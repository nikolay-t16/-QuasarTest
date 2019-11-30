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

<script>
import CatalogLeftMenuItems from './CatalogLeftMenuItems';
import CatalogLeftMenuFilter from './CatalogLeftMenuFilter';

export default {
  name: 'CatalogLeftMenu',
  props: ['rubricId', 'maxPrice'],
  components: {
    CatalogLeftMenuItems,
    CatalogLeftMenuFilter,
  },
  methods: {
    onFiltered() {
      this.$emit('filtered');
    },
  },
};
</script>
