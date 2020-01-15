const route = {
  path: '/ks/',
  component: () => import('src/layouts/ks/SiteLayout.vue'),
  children: [
    {
      path: '/ks/',
      component: () => import('src/pages/ks/IndexPage.vue'),
    },
  ],
};

export default route;
