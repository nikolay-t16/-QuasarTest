const route = {
  path: '/basket/',
  component: () => import('src/layouts/SiteLayout.vue'),
  children: [
    {
      path: '/basket/',
      component: () => import('pages/BasketPage.vue'),
    },
  ],
};

export default route;
