<template>
  <div class="index" id="main">
    <carousel/>
    <index-catalog/>
    <special/>
    <index-about/>
  </div>
</template>

<style>
</style>

<script lang="ts">
import Vue from 'vue';
import Carousel from '../components/index/Carousel';
import IndexCatalog from '../components/index/IndexCatalog';
import Special from '../components/index/Special';
import IndexAbout from '../components/index/IndexAbout';


export default Vue.extend({
  name: 'PageIndex',
  components: {
    Carousel,
    IndexCatalog,
    IndexAbout,
    Special,
  },
  data() {
    return {
      slide: 1,
    };
  },
});
</script>
