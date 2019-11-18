<template>
  <div class="index" id="main">
    <Carousel/>
    <index-catalog/>
    <Special/>
    <index-about/>
  </div>
</template>

<style>
</style>

<script>
import Carousel from '../components/index/Carousel';
import IndexCatalog from '../components/index/IndexCatalog';
import Special from '../components/index/Special';
import IndexAbout from '../components/index/IndexAbout';

export default {
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
};
</script>
