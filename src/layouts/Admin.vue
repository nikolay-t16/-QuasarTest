<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title clickable to="/">
          <q-item to="/">На сайт</q-item>
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Разделы</q-item-label>
        <q-item v-for="item in leftMenu" v-bind:key="item.name" clickable tag="a" :to=item.url>
          <q-item-section avatar>
            <q-icon :name=item.icon />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{item.label}}</q-item-label>
            <q-item-label caption>{{item.labelCaption}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'Admin',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      leftMenu: [
        {
          label: 'Главная',
          labelCaption: null,
          icon: 'home',
          url: '/admin/',
        },
        {
          label: 'Заказы',
          labelCaption: null,
          icon: 'shopping_basket',
          url: '/admin/orders/',
        },
        {
          label: 'Пользователи',
          labelCaption: null,
          icon: 'account_box',
          url: '/admin/users/',
        },
        {
          label: 'Каталог',
          labelCaption: null,
          icon: 'list',
          url: '/admin/catalog/',
        },
        {
          label: 'Товары',
          labelCaption: null,
          icon: 'all_inbox',
          url: '/admin/product/',
        },
        {
          label: 'Страницы',
          labelCaption: null,
          icon: 'wallpaper',
          url: '/admin/pages/',
        },
      ],
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style>
  .q-item.q-router-link--active {
    color: inherit;
  }
  .q-item.q-router-link--exact-active {
    color: #027be3;
    color: var(--q-color-primary);
  }
</style>
