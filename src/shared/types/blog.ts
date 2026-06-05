export interface IPost {
  title: string;
  description: string;
  datetime: string;
}

export interface IPostWithId extends IPost {
  id: string;
}

export type FirebasePostsResponse = Record<string, IPost> | null;