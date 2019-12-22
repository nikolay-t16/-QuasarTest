const route = {
  path: '/basket/',
  component: () => import('layouts/Site.vue'),
  children: [
    {
      path: '/basket/',
      component: () => import('pages/BasketPage.vue'),
    },
  ],
};

export default route;
