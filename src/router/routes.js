import admin from './routesAdmin';
import catalog from './routesCatalog';

const routes = [
  {
    path: '/',
    component: () => import('layouts/Site.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },
  catalog,
  admin,
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
