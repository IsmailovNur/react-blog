import axios from 'axios';
import type {
  FirebasePostsResponse,
  IPost,
  IPostWithId
} from "../types/blog.ts";

const firebaseAxios = axios.create({
  baseURL: 'https://js-31-nurisma-default-rtdb.europe-west1.firebasedatabase.app/',
});

export const blogApi = {
  getAllPosts: async (): Promise<IPostWithId[]> => {
    const response = await firebaseAxios.get<FirebasePostsResponse>('/posts.json');
    const data = response.data;
    if (!data) return [];

    return Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    })).sort((a, b) =>
      new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
    );
  },

  createPost: async (post: IPost): Promise<void> => {
    await firebaseAxios.post('/posts.json', post);
  },

  getPostById: async (id: string): Promise<IPost | null> => {
    const response = await firebaseAxios.get<IPost | null>(`/posts/${id}.json`);
    return response.data;
  },

  deletePost: async (id: string): Promise<void> => {
    await firebaseAxios.delete(`/posts/${id}.json`);
  },

  updatePost: async (id: string, post: IPost): Promise<void> => {
    await firebaseAxios.put(`/posts/${id}.json`, post);
  },
};