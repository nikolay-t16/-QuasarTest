<template>
  <div
    class="wraps hover_shine js-giftd-block-product js-giftd-product-main "
    id="content"
    style="z-index: 2;"
  >
    <!--title_content-->
    <div class="top_inner_block_wrapper maxwidth-theme">
      <div class="page-top-wrapper grey">
        <section class="page-top maxwidth-theme  ">
          <div class="breadcrumbs" id="navigation">
            <div class="bx-breadcrumb-item">
              <router-link to="/" title="Главная страница">
                <span itemprop="name">Главная страница</span>
                <meta itemprop="position" content="1">
              </router-link></div>
          </div>
          <div class="page-top-main">
            <h1
              id="pagetitle"
              class="js-giftd-product-title  js-giftd-block-1  js-giftd-product-mai"
              data-giftd-block-id-product="1"
            >
            </h1>
          </div>
        </section>
      </div>
    </div>
    <div class="wrapper_inner ">
      <div class="left-block">
        <catalog-left-menu
          :rubricId="0"
        />
      </div>
      <div class="right_block wide_N">
        <product-item
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import Vue from 'vue';
import ProductItem from '../components/product/ProductItem';
import CatalogLeftMenu from '../components/catalog/CatalogLeftMenu';


export default Vue.extend({
  name: 'ProductPage',
  props: {
    productId: String,
  },
  components: {
    ProductItem,
    CatalogLeftMenu,
  },
  computed: {
    ...mapGetters('product', ['product']),
  },
  watch: {
    productId: {
      immediate: true,
      handler() {
        console.log('watch');
        console.log(this.productId);
        this.getProduct({ id: this.productId });
      },
    },
  },
  methods: {
    ...mapActions('product', ['getProduct']),
  },
});
</script>
