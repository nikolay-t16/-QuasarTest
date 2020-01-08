import { RouteConfig } from 'vue-router';
import admin from './routesAdmin';
import catalog from './routesCatalog';
import basket from './routesBasket';
import ks from './ks/';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/Site.vue'),
    children: [
      { path: '', component: () => import('src/pages/IndexPage.vue') },
    ],
  },
  catalog,
  basket,
  admin,
  ks,
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
