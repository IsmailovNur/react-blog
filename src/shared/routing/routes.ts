export const AppRoutes = {
  main: '/',
  about: '/about',
  contacts: '/contacts',
  addPost: '/posts/add',
  postForm: '/posts/form',
  postDetails: '/posts/:id',
} as const;

export type AllowedPath = typeof AppRoutes[keyof typeof AppRoutes];