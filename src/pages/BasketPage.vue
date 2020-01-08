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

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { Component, Vue, } from 'vue-property-decorator';
import BreadcrumbsBlock from '../layouts/Site/BreadcrumbsBlock';
import BasketComponent from '../components/basket/BasketComponent';
import BasketEmpty from '../components/basket/BasketEmpty';

@Component({
    components: {
        BreadcrumbsBlock,
        BasketComponent,
        BasketEmpty,
    },
    computed: {
        ...mapGetters('basket', ['basket']),
    },
    methods: {
        ...mapActions('basket', ['emptyBasket']),
    },
})
export default class BasketPage extends Vue {

  searchFocus: boolean = false;
  searchValue: string = '';

  onFocusSearch(): void {
      this.searchFocus = true;
  };

  onFocusOutSearch(): void {
      this.searchFocus = false;
  };
};
</script>

<style>
  .basket-items-search-field.focus {
    flex: 3 1 0;
  }
</style>
