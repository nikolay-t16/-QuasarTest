<template>
  <div class="bx-sbb-empty-cart-container">
    <div class="bx-sbb-empty-cart-image">
      <img src="https://confaelshop.ru/bitrix/templates/aspro/components/bitrix/sale.basket.basket/new/images/empty_cart.svg" alt="">
    </div>
    <div class="bx-sbb-empty-cart-text">Ваша корзина пуста</div>
    <div class="bx-sbb-empty-cart-desc">
      <router-link to="/catalog/">Нажмите здесь</router-link>, чтобы продолжить покупки
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class BasketEmpty extends Vue {};
</script>

<style>
  .bx-sbb-empty-cart-image {
    width: 131px;
    height: 116px;
    margin: 50px auto 42px;
  }

  .bx-sbb-empty-cart-desc {
    text-align: center;
    color: #000;
    font-size: 16px;
    margin-bottom: 42px;
  }

  .bx-sbb-empty-cart-desc a {
    color: #a6a6a6
  }

  .bx-sbb-empty-cart-desc a:focus, .bx-sbb-empty-cart-desc a:hover {
    color: #a6a6a6;
  }
</style>
