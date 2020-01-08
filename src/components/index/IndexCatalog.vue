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
import { Component, Prop, Vue, } from 'vue-property-decorator';
import IndexCatalogItem from './IndexCatalogItem';

@Component({
    components: {
        IndexCatalogItem
    },
    computed: {
        ...mapGetters('catalog', ['rootRubrics']),
    },
})
export default class Catalog extends Vue {

};
</script>
