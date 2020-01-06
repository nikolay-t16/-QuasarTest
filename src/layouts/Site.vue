<template>
  <div class="asd fill_bg_n" id="main">
    <div class="
      wrapper1
      catalog_page
      basket_normal
      basket_fill_COLOR side_LEFT
      catalog_icons_N
      banner_auto with_fast_view
      mheader-v1
      header-v11
      regions_Y
      fill_N
      footer-v3
      front-vindex2
      title-v2
      with_phones">
      <site-header/>
      <div
       class="wraps hover_shine js-giftd-block-product  js-giftd-product-main "
       id="content"
       data-giftd-block-id-product="1">
        <router-view/>
      </div>
    </div>
    <site-footer/>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import Vue from 'vue';
import SiteHeader from './Site/SiteHeader.vue';
import SiteFooter from './Site/SiteFooter.vue';


export default Vue.extend({
  name: 'MyLayout',
  components: { SiteHeader, SiteFooter },
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  created() {
    this.getCatalog();
    this.getBasket();
  },
  methods: {
    ...mapActions('catalog', ['getCatalog']),
    ...mapActions('basket', ['getBasket']),
  },
});
</script>


<style src="../statics/css/style.css"/>
