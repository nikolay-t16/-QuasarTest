<template>
  <div class="pull-right block-link">
    <div class="wrap_icon inner-table-block baskets big-padding"></div>
    <div class="wrap_icon inner-table-block baskets big-padding">
      <router-link
        rel="nofollow"
        class="basket-link delay with_price big "
        to="/basket/"
        title="Список отложенных товаров пуст"
      >
        <span class="js-basket-block">
          <i
            class="svg inline svg-inline-wish big"
            aria-hidden="true"
          >
            <svg
             xmlns="http://www.w3.org/2000/svg"
             width="22.969"
             height="21" viewBox="0 0 22.969 21"
            >
              <defs></defs>
              <path
                class="whcls-1"
                d="M21.028,10.68L11.721,20H11.339L2.081,
                   10.79A6.19,6.19,0,0,1,6.178,0a6.118,
                   6.118,0,0,1,5.383,3.259A6.081,6.081,
                   0,0,1,23.032,6.147,6.142,6.142,0,0,1,
                   21.028,10.68ZM19.861,9.172h0l-8.176,
                   8.163H11.369L3.278,9.29l0.01-.009A4.276,
                   4.276,0,0,1,6.277,1.986,4.2,4.2,0,0,1,
                   9.632,3.676l0.012-.01,0.064,0.1c0.077,
                   0.107.142,0.22,0.208,0.334l1.692,
                   2.716,1.479-2.462a4.23,4.23,0,0,1,
                   .39-0.65l0.036-.06L13.52,3.653a4.173,
                   4.173,0,0,1,3.326-1.672A4.243,
                   4.243,0,0,1,19.861,9.172ZM22,
                   20h1v1H22V20Zm0,0h1v1H22V20Z"
                transform="translate(-0.031)"
              >
              </path>
            </svg>
          </i>
          <span class="title dark_link">Отложенные</span>
          <span class="count">0</span>
        </span>
      </router-link>
    </div>
    <div class="wrap_icon inner-table-block baskets big-padding">
      <router-link
        rel="nofollow"
        class="basket-link basket has_prices with_price big basket-count"
        to="/basket/"
        title="В корзине товаров на 410 руб."
      >
        <span class="js-basket-block">
          <i class="svg inline  svg-inline-basket big" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="21"
              viewBox="0 0 22 21"
            >
              <defs></defs>
              <path
                data-name="Ellipse 2 copy 6" class="cls-1"
                d="M1507,122l-0.99,1.009L1492,123l-1-1-1-9h-3a0.88,
                0.88,0,0,1-1-1,1.059,1.059,0,0,1,1.22-1h2.45c0.31,0,
                .63.006,0.63,0.006a1.272,1.272,0,0,1,1.4.917l0.41,
                3.077H1507l1,1v1ZM1492.24,117l0.43,
                3.995h12.69l0.82-4Zm2.27,7.989a3.5,
                3.5,0,1,1-3.5,3.5A3.495,3.495,0,0,1,1494.51,
                124.993Zm8.99,0a3.5,3.5,0,1,1-3.49,3.5A3.5,
                3.5,0,0,1,1503.5,124.993Zm-9,2.006a1.5,1.5,0,1,
                1-1.5,1.5A1.5,1.5,0,0,1,1494.5,127Zm9,
                0a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,1503.5,127Z"
                transform="translate(-1486 -111)"
              >
              </path>
            </svg>
          </i>
          <span class="wrap">
           <span class="title dark_link">Корзина</span>
           <span class="prices">{{basket.totalPrice}} руб.</span>
          </span>
          <span class="count">{{basket.totalCount}}</span>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { Component, Vue, } from 'vue-property-decorator';

@Component({
    computed: {
        ...mapGetters('basket', ['basket']),
    },
})
export default class BasketHeader extends Vue {

};
</script>
