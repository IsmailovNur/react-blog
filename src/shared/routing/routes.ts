export const AppRoutes = {
  main: '/',
  about: '/about',
  contacts: '/contacts',
  addPost: '/posts/add',
  postDetails: '/posts/:id',
  editPost: '/posts/:id/edit',
} as const;

export type AllowedPath = typeof AppRoutes[keyof typeof AppRoutes];