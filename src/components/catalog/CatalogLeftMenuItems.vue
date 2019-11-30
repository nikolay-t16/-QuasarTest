<template>
  <ul v-if="getSubRubrics(rubricId)" class="menu dropdown">
    <li
      v-for="(rub, id) in getSubRubrics(rubricId)"
      v-bind:key="id"
      class="full m_line v_hover"
    >
      <router-link class="icons_fa parent" :to="`/catalog/${rub.rubricId}`">
        <span class="name">{{rub.name}}</span>
        <q-icon
          name="keyboard_arrow_right"
          v-if="getSubRubrics(rub.rubricId)"
          class="catalog-left-menu-items__arrow-next"
        />
      </router-link>
      <ul v-if="getSubRubrics(rub.rubricId)" class="dropdown">
        <li
          v-for="(subRub, sId) in getSubRubrics(rub.rubricId)"
          v-bind:key="sId">
          <span class="image">
            <router-link :to="`/catalog/${subRub.rubricId}/`">
              <img
                src="/upload/resize_cache/iblock/3a2/50_50_1/3a2c3c046bcf47ab92d3a7b88fde6af6.jpg"
                alt="Символ года 2020"></router-link></span>
          <router-link
            class="section"
            :to="`/catalog/${subRub.rubricId}/`"
          >
            <span>{{rub.name}}</span>
          </router-link>
          <div class="clearfix"></div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CatalogLeftMenuItems',
  props: ['rubricId'],
  computed: {
    ...mapGetters('rubric', ['rubricTree']),
  },
  methods: {
    getSubRubrics(rubricId) {
      if (this.rubricTree.has(+rubricId)) {
        return this.rubricTree.get(+rubricId).values();
      }
      return null;
    },
  },
};
</script>

<style>
  .icons_fa {
    position: relative;
  }
  .catalog-left-menu-items__arrow-next {
    position: absolute;
    right: 0;
    padding-right: 27px;
    padding-top: 9px;
  }
</style>
