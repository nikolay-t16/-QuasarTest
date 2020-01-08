<template>
  <div class="basket-items-list-container" id="basket-items-list-container">
    <div class="basket-items-list" id="basket-item-list">
      <table
        class="basket-items-list-table"
        id="basket-item-table"
      >
        <tbody>
        <basket-item
          v-for="(prod, i) in data.products"
          v-bind:key="i"
          :product="prod"
          :count="data.items[prod.productId]"
        />
        </tbody>
      </table>
      <div
        class="basket-search-not-found"
        id="basket-item-list-empty-result"
        style="display: none;">
        <div class="basket-search-not-found-icon"></div>
        <div class="basket-search-not-found-text">
          По данному запросу товаров не найдено
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import BasketItem from './BasketItem';

@Component({
  components: {
    BasketItem,
  },
  props: {
    data: Object,
  },
})
export default class BasketItems extends Vue {};
</script>
