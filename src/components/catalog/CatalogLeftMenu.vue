<template>
  <div class="left_block">
    <div class="menu_top_block catalog_block asd">
      <catalog-left-menu-items
        :rubricId="rubricId"
      />
      <catalog-left-menu-filter
        v-if="maxPrice"
        :rubricId="rubricId"
        :maxPrice="maxPrice"
        :filtered="onFiltered"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import CatalogLeftMenuItems from './CatalogLeftMenuItems';
import CatalogLeftMenuFilter from './CatalogLeftMenuFilter';

@Component({
  props: ['rubricId', 'maxPrice'],
  components: {
    CatalogLeftMenuItems,
    CatalogLeftMenuFilter,
  },
})
export default class HeaderUserFormRegister extends Vue {
  onFiltered(): void {
    this.$emit('filtered');
  }
};
</script>
