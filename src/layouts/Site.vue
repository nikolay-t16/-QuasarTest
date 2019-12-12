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
      <Header/>
      <div
       class="wraps hover_shine js-giftd-block-product  js-giftd-product-main "
       id="content"
       data-giftd-block-id-product="1">
        <router-view/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './Site/Header';
import Footer from './Site/Footer';

export default {
  name: 'MyLayout',
  components: { Header, Footer },
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
};
</script>


<style src="../statics/css/style.css"/>
