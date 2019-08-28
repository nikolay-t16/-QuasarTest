const route = {
  path: '/admin/',
  component: () => import('layouts/Admin.vue'),
  children: [
    {
      path: '/admin/',
      component: () => import('pages/admin/Index.vue'),
    },
    {
      path: '/admin/orders/',
      component: () => import('pages/admin/Index.vue'),
    },
    {
      path: '/admin/users/',
      component: () => import('pages/admin/Index.vue'),
    },
    {
      path: '/admin/catalog/',
      component: () => import('pages/catalog/Index.vue'),
    },
    {
      path: '/admin/products/',
      component: () => import('pages/admin/Products.vue'),
    },
    {
      path: '/admin/pages/',
      component: () => import('pages/admin/Index.vue'),
    },
  ],
};


export default route;