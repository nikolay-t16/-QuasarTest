<template>
  <div class="wraps hover_shine js-giftd-block-product  js-giftd-product-main ">
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
            <h1 id="pagetitle">Каталог подарков из шоколада - Конфаэль</h1>
          </div>
        </section>
      </div>
    </div>
    <div class="wrapper_inner ">
      <div class="right_block wide_N">
        <catalog-product-list
          :products="products"
        />
      </div>
      <div class="left-block">
        <catalog-left-menu
          :rubricId="rubricId"
          v-bind:maxPrice="products.maxPrice"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { Component, Prop, Vue, } from 'vue-property-decorator';
import CatalogLeftMenu from '../components/catalog/CatalogLeftMenu';
import CatalogProductList from '../components/catalog/CatalogProductList';

@Component({
    watch: {
        rubricId: {
            immediate: true,
            handler() {
                this.resetFilter();
                this.resetSort();
            },
        },
    },
    components: {
        CatalogProductList,
        CatalogLeftMenu,
    },
    computed: {
        ...mapGetters('product', ['allProducts', 'productsByRubric', 'filter']),
    },
    methods: {
        ...mapActions('product', ['resetFilter', 'resetSort']),
    },
})
export default class Catalog extends Vue {
  @Prop(Object)
    rubricId: number = 0;


  products(): object {
      return this.productsByRubric(this.rubricId);
  };
};
</script>
