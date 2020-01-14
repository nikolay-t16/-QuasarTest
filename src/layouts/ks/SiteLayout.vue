<template>
  <div>
    <site-header/>
    <router-view/>
    <site-footer/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SiteHeader from "./site/SiteHeader.vue";
import SiteFooter from "./site/SiteFooter.vue";

@Component({
  components: {
    SiteHeader,
    SiteFooter,
  }
})
export default class SiteLayout extends Vue {};
</script>


<style type="scss">
  @import "../../assets/ks/css/bootstrap.min.css";
  @import "../../assets/ks/css/elegant-icons.css";
  @import "../../assets/ks/css/font-awesome.min.css";
  /*@import "../../assets/ks/css/jquery-ui.min.css";*/
  @import "../../assets/ks/css/nice-select.css";
  /*@import "../../assets/ks/css/owl.carousel.min.css";*/
  @import "../../assets/ks/css/slicknav.min.css";
  @import "../../assets/ks/css/themify-icons.css";
  @import "../../assets/ks/css/style.css";
</style>
