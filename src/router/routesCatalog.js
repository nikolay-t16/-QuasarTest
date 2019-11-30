const route = {
  path: '/catalog/',
  component: () => import('layouts/Site.vue'),
  children: [
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
