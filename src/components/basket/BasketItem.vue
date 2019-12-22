<template>
  <tr
    class="basket-items-list-item-container"
    id="basket-item-2423147"
  >
    <td class="basket-items-list-item-descriptions">
      <div class="basket-items-list-item-descriptions-inner"
           id="basket-item-height-aligner-2423147" style="min-height: 0px;">
        <div class="basket-item-block-image">
          <router-link
            :to="`/product/${product.productId}`"
             class="basket-item-image-link">
            <img
              class="basket-item-image"
              :alt="product.name"
              src="https://confaelshop.ru/upload/resize_cache/iblock/669/160_160_1/6698d9253ca3b83b8cb4b0d289bfe5b1.jpg"
            >
          </router-link>
        </div>
        <div class="basket-item-block-info">
          <span class="basket-item-actions-remove visible-xs"></span>
          <h2 class="basket-item-info-name">
            <router-link
              :to="`/product/${product.productId}`"
              class="basket-item-info-name-link"
            >
              <span>{{product.name}}</span>

            </router-link>
          </h2>
        </div>
      </div>
    </td>
    <td class="basket-items-list-item-price
                            basket-items-list-item-price-for-one hidden-xs">
      <div class="basket-item-block-price">
        <div class="basket-item-price-current">
          <span class="basket-item-price-current-text">{{product.price}} руб.</span>
        </div>
        <div class="basket-item-price-title">
          цена за 1 шт
        </div>
      </div>
    </td>
    <td class="basket-items-list-item-amount">
      <div class="basket-item-block-amount">
        <span class="basket-item-amount-btn-minus" @click="removeCount"></span>
        <div class="basket-item-amount-filed-block">
          <input
            v-bind:value="count"
            type="text"
            class="basket-item-amount-filed"
          >
        </div>
        <span class="basket-item-amount-btn-plus" @click="addCount"></span>
        <div class="basket-item-amount-field-description">шт</div>
      </div>
    </td>
    <td class="basket-items-list-item-price">
      <div class="basket-item-block-price">

        <div class="basket-item-price-current">
          <span class="basket-item-price-current-text">{{ +product.price * +count }} руб.</span>
        </div>
      </div>
    </td>
    <td class="basket-items-list-item-remove hidden-xs">
      <div class="basket-item-block-actions">
        <span class="basket-item-actions-remove"></span>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'BasketItem',
  props: {
    product: Object,
    count: Number,
  },
  data() {
    return {
      count_: 0,
    };
  },
  methods: {
    ...mapActions('basket', ['addProduct']),
    addCount() {
      this.addProduct({ productId: this.product.productId, count: this.count + 1 });
    },
    removeCount() {
      if (this.count > 1) {
        this.addProduct({ productId: this.product.productId, count: this.count - 1 });
      }
    },
  },
};
</script>
