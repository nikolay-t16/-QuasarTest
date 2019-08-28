<template>
  <q-page class="flex flex-center">
    <q-tree
        :nodes="simple"
        node-key="label"
        :expanded.sync="expanded"
        dark
      ></q-tree>

  </q-page>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Catalog',
};
Vue({
  el: '#q-app',
  data() {
    return {
      expanded: ['Satisfied customers (with avatar)', 'Good food (with icon)'],
      simple: [
        {
          label: 'Satisfied customers (with avatar)',
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          children: [
            {
              label: 'Good food (with icon)',
              icon: 'restaurant_menu',
              children: [
                { label: 'Quality ingredients' },
                { label: 'Good recipe' },
              ],
            },
            {
              label: 'Good service (disabled node with icon)',
              icon: 'room_service',
              disabled: true,
              children: [
                { label: 'Prompt attention' },
                { label: 'Professional waiter' },
              ],
            },
            {
              label: 'Pleasant surroundings (with icon)',
              icon: 'photo',
              children: [
                {
                  label: 'Happy atmosphere (with image)',
                  img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png',
                },
                { label: 'Good table presentation' },
                { label: 'Pleasing decor' },
              ],
            },
          ],
        },
      ],
    };
  },
});
</script>

<style scoped>

</style>
