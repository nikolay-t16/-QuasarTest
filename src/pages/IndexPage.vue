<template>
  <div class="index" id="main">
    <carousel-component/>
    <index-catalog/>
    <special/>
    <index-about/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import CarouselComponent from '../components/index/IndexCarousel.vue';
import IndexCatalog from '../components/index/IndexCatalog';
import Special from '../components/index/IndexSpecial.vue';
import IndexAbout from '../components/index/IndexAbout';



@Component({
  components: {
    CarouselComponent,
    IndexCatalog,
    IndexAbout,
    Special,
  },
})
export default class IndexPage extends Vue {
  data() {
    return {
      slide: 1,
    };
  };
};
</script>
