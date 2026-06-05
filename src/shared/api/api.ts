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
    return data;
  },

  createPost: async (post: IPost): Promise<void> => {
    await firebaseAxios.post('/posts.json', post);
  },

};