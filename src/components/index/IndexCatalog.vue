<template>
  <div class="maxwidth-theme">
    <div class="sections_wrapper">
      <div class="top_block">
        <h3 class="title_block">Каталог</h3>
      </div>
      <div class="list items">
        <div class="row margin0 flexbox">
          <IndexCatalogItem></IndexCatalogItem>
          <IndexCatalogItem></IndexCatalogItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IndexCatalogItem from './IndexCatalogItem';

export default {
  name: 'Catalog',
  components: { IndexCatalogItem },
};
</script>

<style scoped>

</style>
