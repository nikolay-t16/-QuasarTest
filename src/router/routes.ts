import { RouteConfig } from 'vue-router';
import admin from './routesAdmin';
import catalog from './routesCatalog';
import basket from './routesBasket';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('src/layouts/SiteLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/IndexPage.vue') },
    ],
  },
  catalog,
  basket,
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
