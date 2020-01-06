<template>
  <div class="rr-content maxwidth-theme">
    <div class="tab-title">
      <div class="category-title">
        <div @click="selectTab(CATEGORY_NEW)" :class="getTabTittleClass(CATEGORY_NEW)">
          <span>Новинки</span>
        </div>
        <div @click="selectTab(CATEGORY_HIT)" :class="getTabTittleClass(CATEGORY_HIT)">
          <span>Хиты продаж со скидками</span>
        </div>
      </div>
    </div>
    <index-special-category :data="newProducts" v-if="activeCategory === CATEGORY_NEW"/>
    <index-special-category :data="hitProducts" v-if="activeCategory === CATEGORY_HIT"/>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import IndexSpecialCategory from './IndexSpecialCategory.vue';

const CATEGORY_NEW = 'new';
const CATEGORY_HIT = 'hit';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: { IndexSpecialCategory },
  computed: {
    ...mapGetters('product', ['newProducts', 'hitProducts']),
  },
})
export default class IndexSpecial extends Vue {
  CATEGORY_NEW: string = CATEGORY_NEW;
  CATEGORY_HIT: string = CATEGORY_HIT;
  activeCategory: string = CATEGORY_NEW;
  slide: number = 1;

  getTabTittleClass(type: string): string {
    return type === this.activeCategory ? 'rr-tabLink active' : 'rr-tabLink';
  };

  selectTab(type): void {
    this.activeCategory = type;
  };

};
</script>

<style>
  .category-title {
    display: flex;
    cursor: pointer;
  }

  .rr-tabContent {
    height: 0;
    visibility: hidden;
  }

  .rr-tabContent.active .rr-active,
  .rr-tabContent.active {
    height: auto;
    visibility: visible;
  }

  .rr-content .rr-tabLink {
    margin-right: 29px;
    white-space: nowrap;
  }

  .rr-content .rr-tabLink span {
    display: inline-block;
    color: #222;
    border-bottom: 2px solid transparent;
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    padding-bottom: 5px;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .rr-content .rr-tabLink.active span {
    border-bottom-color: #4f433e;
  }

  .tab-title {
    width: calc(100% - 66px);
  }

  .rr-widget-5c8f853f97a5252b105fd607-popular.rr-active {
    margin-top: -24px;
  }

  .rr-widget .rr_header {
    position: absolute;
    right: 0;
    top: -42px;
  }

  .rr-widget {
    height: 0;
    visibility: hidden;
    position: relative;
    display: inline-block;
    width: 100%;
    outline: none;
    font-family: inherit;
    box-sizing: border-box;
    padding-right: 5px;
  }

  .rr-widget .widgettitle {
    font-size: 21px;
    font-weight: 700;
    color: #333;
    text-align: left;
    margin: 15px 0;
    display: inline-block;
  }

  .rr-tabContent.active .rr-widget.rr-active .retailrocket-items {
    min-height: 761px;
  }

  .rr-widget .retailrocket-items {
    padding: 0;
    position: relative;
    min-height: 0;
    margin: 0 -7px;
  }

  .rr-widget .retailrocket-item {
    float: left;
    list-style: none;
    text-align: center;
    outline: none;
    margin: 0 0px;
    height: 359px;
  }

  .rr-widget .slick-slide {
    float: left;
  }

  .rr-widget .retailrocket-item:last-child .rr_container {
    border-right: solid 1px #eee;
  }

  .rr-widget .rr_container {
    background: #fff;
    padding: 20px 19px 21px 20px;
    border: solid 1px #eee;
    border-right: none;
    background: #fff;
    height: 100%;
  }

  .rr-widget .rr_container:hover {
    border-color: #fff;
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    z-index: 12;
    height: auto;
    position: relative;
  }

  .rr-widget .item-image {
    width: 100%;
    outline: none
  }

  .rr-widget .item-image img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    margin: 0 auto;
    outline: none
  }

  .rr-widget .item-info {
    text-decoration: none;
    outline: none
  }

  .rr-widget .item-title {
    font-size: 14px;
    font-weight: 700;
    color: #333;
    margin: 5px 0;
    text-align: center;
    overflow: hidden;
    outline: none;
    height: 48px;
  }

  .rr-widget .item-title:hover {
    text-decoration: none;
    color: #512c1d
  }

  .rr-widget .item-old-price {
    font-size: 16px;
    font-weight: 400;
    color: #333;
    margin: 0 7px;
    text-decoration: line-through;
    display: inline-block
  }

  .rr-widget .item-price {
    color: #1d2029;
    margin: 0 7px;
    font-size: 18px;
    font-weight: bold;
    line-height: 15px;
    margin-bottom: 8px;
    display: inline-block
  }

  .rr-widget .item-price-currency::before {
    content: 'руб./шт'
  }

  .rr-widget .item-actions {
    margin-top: 5px;
    width: 100%;
    line-height: 27px;
    outline: none;
    opacity: 0;
    visibility: hidden;
    height: 0;
    -webkit-transition: all .1s ease;
    -moz-transition: all .1s ease;
    transition: all .1s ease;
  }

  .rr-widget .item-actions .item-actions-more {
    display: inline-block;
    background-color: #512c1d;
    border-color: #512c1d;
    color: #fff;
    font-size: 13px;
    line-height: 18px;
    font-weight: 400;
    text-transform: none;
    text-decoration: none;
    margin: 0;
    border-radius: 2px;
    padding: 7px 18px 9px;
    overflow: hidden;
    transition: background-color .3s ease;
    -moz-transition: background-color .3s ease;
    -ms-transition: background-color .3s ease;
    -o-transition: background-color .3s ease;
    -webkit-transition: background-color .3s ease;
  }

  .rr-widget .item-actions .item-actions-more:hover {
    text-decoration: underline;
    background-color: #683825;
    border-color: #683825
  }

  .rr-widget .item-actions .item-actions-more::after {
    content: 'Подробнее'
  }

  .rr-widget .item-actions .item-actions-buy {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    background-color: #388e3c;
    padding: 5px 10px;
    text-align: center;
    display: inline-block;
    margin-left: 20px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  .rr-widget .item-actions .item-actions-buy:hover {
    background-color: #489e4c
  }

  .rr-widget .item-actions .item-actions-buy::after {
    content: 'Купить'
  }

  .rr-widget .slick-list {
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 20px 5px;
    padding-bottom: 65px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    height: auto !important;
  }

  .rr-widget .slick-prev::before,
  .rr-widget .slick-next::before {
    content: '';
    width: 40px;
    height: 40px;
    display: inline-block !important;
    cursor: pointer;
    z-index: 1
  }

  .rr-widget .slick-prev::before {
    background: url(https://confaelshop.ru/bitrix/templates/aspro/images/arrows2.png) 50% no-repeat;
    background-position: 4px -18px;
  }

  .rr-widget .slick-next::before {
    background: url(https://confaelshop.ru/bitrix/templates/aspro/images/arrows2.png) 50% no-repeat;
    background-position: -70px -18px;
  }

  .rr-widget .slick-hidden {
    display: none !important
  }

  .rr-widget span.star-active {
    cursor: default;
    background: url(https://confaelshop.ru/bitrix/templates/aspro/images/ai.png) -137px -51px no-repeat;
    width: 15px;
    height: 14px;
    overflow: hidden;
    display: inline-block;
  }

  .rr-widget span.star-active.star-empty {
    background-position: -152px -51px;
  }

  .rr-widget .retailrocket-item:hover .item-actions {
    opacity: 1;
    visibility: visible;
    height: 30px;
    margin: 11px 0px 0px;
    height: auto;
  }

  .rr-widget .rr_label {
    width: auto;
    margin: 0px 3px 6px;
    letter-spacing: 0.5px;
    position: relative;
    display: inline-block;
    color: #fff;
    font-size: 10px;
    line-height: 12px;
    padding: 5px 10px 4px;
    text-transform: uppercase;
    border-radius: 2px;
  }

  .rr-widget .rr_stickers {
    left: 0px;
    top: 4px;
    position: absolute;
    z-index: 3;
    text-align: left;
    padding-right: 50px;
  }

  .rr-widget .item-img-block {
    position: relative;
  }

  .rr-widget .rr_sale_text {
    background-color: #e52929;
  }

  .rr-widget .rr_novinka {
    background-color: #4fad00;
  }

  .rr-widget .rr_hit {
    background-color: #2992d9;
  }

  .rr-widget .rr_aktsiya {
    background-color: #ffc438;
    color: #1d2029;
  }

  .rr-widget .rr_halal {
    background-color: #006400
  }

  .rr-widget .rr_postnoe {
    background-color: #e52929
  }

  .rr-widget .rr_sovetuem {
    background-color: #893ca9;
  }

  .rr-widget .rr-arrow {
    width: 33px;
    height: 35px;
    border-radius: 2px 0 0 2px;
    border: 1px solid #e5e5e5;
    float: left;
  }

  .rr-widget .rr-slider-arrow::after {
    content: '';
    clear: both;
    display: block;
  }

  .rr-widget .rr-slider-arrow {
    display: inline-block;
    float: right;
    margin-top: 10px;
  }

  .rr-widget
  .retailrocket-item:hover
  .fast_view_block,
  .rr-widget
  .retailrocket-item:hover
  .wish_item {
    visibility: visible;
    opacity: 1;
  }

  .rr-widget .item-old-price span.item-price-currency, .rr-widget .item-old-price-value {
    font-size: 13px;
    line-height: 15px;
    font-weight: normal;
    color: #888;
    text-decoration: line-through;
  }

  .rr-widget .item-block-price {
    min-height: 54px;
  }

  @media (max-width: 991px) {
    .rr-widget .item-actions {
      opacity: 1;
      visibility: visible;
      height: auto;
    }

    .rr-widget .like_icons span {
      opacity: 1;
      visibility: visible;
    }

    .rr-widget .slick-list {
      padding-bottom: 20px;
      position: relative;
    }

    .rr-widget .retailrocket-items,
    .rr-widget .retailrocket-item,
    .rr-widget .slick-list {
      height: 0 !important;
    }

    .rr-tabContent.active .rr-widget.rr-active .retailrocket-items,
    .rr-tabContent.active .rr-widget.rr-active .retailrocket-item,
    .rr-tabContent.active .rr-widget.rr-active .slick-list {
      height: auto !important;
    }

    .rr-widget .retailrocket-item:hover .item-actions {
      margin-top: 5px;
    }
  }

</style>
