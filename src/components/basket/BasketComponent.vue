<template>
  <div id="basket-root" class="bx-basket bx-step-opacity">
    <div class="row">
      <div class="col-xs-12">
        <div
          class="alert alert-warning alert-dismissable"
          id="basket-warning"
          style="display: none;"
        >
          <span class="close">×</span>
          <div style="display: none;"></div>
          <div style="display: none;">
            В вашей корзине
            <a href="javascript:;" data-entity="basket-items-warning-count">3</a> требует
            внимания.
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="basket-items-list-wrapper basket-items-list-wrapper-height-fixed"
             id="basket-items-list-wrapper" style="">
          <div class="basket-items-list-header">
            <div
              class="basket-items-search-field"
              v-bind:class="{ focus: searchFocus }"
            >
              <div class="form has-feedback">
                <input
                  type="text"
                  class="form-control"
                  v-model="searchValue"
                  placeholder="Фильтр"
                  @focus="onFocusSearch"
                  @focusout="onFocusOutSearch"
                >
                <span class="form-control-feedback basket-clear"></span>
              </div>
            </div>
            <div class="basket-items-list-header-filter">
              <a
                href="javascript:;"
                class="basket-items-list-header-filter-item active">
                В корзине 3 товара
              </a>
              <a href="javascript:;" class="basket-items-list-header-filter-item"
                 style="">1 отложен</a>
              <div class="top_control basket_sort">
                          <span
                            class="delete_all btn btn-default white white-bg grey remove_all_basket"
                            @click="emptyBasket"
                          >
                            Очистить
                          </span>
              </div>
            </div>
          </div>
          <basket-items
            :data="basket"
          />
        </div>
      </div>
    </div>
    <div class="sale-products-gift 0"></div>
    <div class="row">
      <div class="col-xs-12">
        <div class="basket-checkout-container visible">
          <div class="basket-checkout-section">
            <div class="basket-checkout-section-inner">
              <div class="basket-checkout-block basket-checkout-block-total">
                <div class="basket-checkout-block-total-inner">
                  <div class="basket-checkout-block-total-title">Итого:</div>
                </div>
              </div>
              <div class="basket-checkout-block basket-checkout-block-total-price">
                <div class="basket-checkout-block-total-price-inner">
                  <div class="basket-coupon-block-total-price-current">
                    {{basket.totalPrice}} руб.
                  </div>
                </div>
              </div>
              <div class="basket-checkout-block basket-checkout-block-btn">
                <button class="btn btn-lg btn-default basket-btn-checkout white">
                  Оформить заказ
                </button>
              </div>
              <div class="fastorder">
                <span
                  class="oneclickbuy btn btn-lg fast_order"
                  onclick="oneClickBuyBasket()"
                  >
                  Быстрый заказ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BasketItems from './BasketItems';

export default {
  name: 'BasketComponent',
  components: {
    BasketItems,
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
