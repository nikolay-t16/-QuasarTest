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
      component: () => import('pages/admin/Catalog.vue'),
    },
    {
      path: '/admin/rubric/new/',
      component: () => import('pages/admin/AddRubric.vue'),
      props: true,
    },
    {
      path: '/admin/rubric/:id',
      component: () => import('pages/admin/EditRubric.vue'),
      props: true,
    },
    {
      path: '/admin/product/',
      component: () => import('pages/admin/Products.vue'),
    },
    {
      path: '/admin/product/new',
      component: () => import('pages/admin/AddProduct.vue'),
      props: true,
    },
    {
      path: '/admin/product/:id',
      component: () => import('pages/admin/EditProduct.vue'),
      props: true,
    },
    {
      path: '/admin/pages/',
      component: () => import('pages/admin/Index.vue'),
    },
  ],
};


export default route;
