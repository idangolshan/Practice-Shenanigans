
const routes = [
  { path: '/flex', component: () => import('pages/flex.vue') },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/functions', component: () => import('pages/Index.vue') },
      { path: '/firestore', component: () => import('pages/Firestore.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
