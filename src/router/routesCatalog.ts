const route = {
  path: '/catalog/',
  component: () => import('src/layouts/SiteLayout.vue'),
  children: [
    {
      path: '/catalog/product/:productId',
      component: () => import('pages/ProductPage.vue'),
      props: true,
    },
    {
      path: '/catalog/:rubricId',
      component: () => import('pages/Catalog.vue'),
      props: true,
    },
    {
      path: '/catalog/',
      component: () => import('pages/Catalog.vue'),
      props: { rubricId: '0' },
    },
  ],
};

export default route;
