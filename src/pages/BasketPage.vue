<template>
  <div class="wraps hover_shine js-giftd-block-product  js-giftd-product-main ">
    <breadcrumbs-block/>
    <div class="wrapper_inner wide_page">

      <div class="middle">
        <div class="container">
          <div class="maxwidth-theme">
            <basket-component v-if="+basket.totalCount > 0"/>
            <basket-empty v-else/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BreadcrumbsBlock from '../layouts/Site/BreadcrumbsBlock';
import BasketComponent from '../components/basket/BasketComponent';
import BasketEmpty from '../components/basket/BasketEmpty';

export default {
  name: 'BasketPage',
  components: {
    BreadcrumbsBlock,
    BasketComponent,
    BasketEmpty,
  },
  data() {
    return {
      searchFocus: false,
      searchValue: '',
    };
  },
  computed: {
    ...mapGetters('basket', ['basket']),
  },
  methods: {
    ...mapActions('basket', ['emptyBasket']),
    onFocusSearch() {
      this.searchFocus = true;
    },
    onFocusOutSearch() {
      this.searchFocus = false;
    },
  },
};
</script>

<style>
  .basket-items-search-field.focus {
    flex: 3 1 0;
  }
</style>
