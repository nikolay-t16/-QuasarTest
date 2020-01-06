<template>
  <div class="col-m-20 col-md-3 col-sm-4 col-xs-6">
    <a href="/catalog/komu/shokolad-dlya-vzroslykh/"></a>
    <div class="item">
      <a href="/catalog/komu/shokolad-dlya-vzroslykh/">
        <div class="img shine">
          <img
                  :src="'https://confaelshop.ru/upload/ammina.optimizer/jpg-webp/q80/'
                    + 'upload/resize_cache/iblock/98c/120_120_2/'
                    + '98ce17a7639202f3cf6f029f8d3537e4.webp'"
                  :alt="data.label" :title="data.label">
        </div>
      </a>
      <div class="name">
        <a href="/catalog/komu/shokolad-dlya-vzroslykh/" class="dark_link">
          {{ data.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexCatalogItem',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
});
</script>
