<template>
  <div class="maxwidth-theme">
    <div class="sections_wrapper">
      <div class="top_block">
        <h3 class="title_block">Каталог</h3>
      </div>
      <div class="list items">
        <div class="row margin0 flexbox">
          <index-catalog-item
            v-for="(item, index) in rootRubrics"
            v-bind:key="index"
            :data="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import Vue from 'vue';
import IndexCatalogItem from './IndexCatalogItem';


export default Vue.extend({
  name: 'Catalog',
  components: { IndexCatalogItem },
  computed: {
    ...mapGetters('catalog', ['rootRubrics']),
  },
});
</script>
