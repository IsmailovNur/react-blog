export const AppRoutes = {
  main: '/',
  about: '/about',
  contacts: '/contacts',
  addPost: '/posts/add',
  postDetails: '/posts/:id',
} as const;

export type AllowedPath = typeof AppRoutes[keyof typeof AppRoutes];