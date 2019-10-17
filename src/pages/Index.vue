<template>
  <div class="index" id="main">
    <Carousel></Carousel>
    <IndexCatalog></IndexCatalog>
    <Special></Special>
  </div>
</template>

<style>
</style>

<script>
import Carousel from '../components/index/Carousel';
import IndexCatalog from '../components/index/IndexCatalog';
import Special from '../components/index/Special';

export default {
  name: 'PageIndex',
  components: { Carousel, IndexCatalog, Special },
  data() {
    return {
      slide: 1,
    };
  },
};
</script>
