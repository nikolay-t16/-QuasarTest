<template>
  <div class="left_block">
    <div class="menu_top_block catalog_block asd">
      <catalog-left-menu-items/>
      <catalog-left-menu-filter/>
    </div>
  </div>
</template>

<script>
import CatalogLeftMenuItems from './CatalogLeftMenuItems';
import CatalogLeftMenuFilter from './CatalogLeftMenuFilter';

export default {
  name: 'CatalogLeftMenu',
  components: {
    CatalogLeftMenuItems,
    CatalogLeftMenuFilter,
  },
};
</script>
