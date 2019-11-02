<template>
  <div class="retailrocket-item" style="display: inline-block;">
    <div class="rr_container catalog_item" data-url="https://confaelshop.ru/catalog/komu/podarki-dlya-muzhchin/1514/">
      <div class="item-img-block">
        <div class="rr_stickers">
          <div v-if="data.isNew" class="rr_label rr_novinka">Новинка</div>
          <div v-if="data.isHit" class="rr_label rr_hit">Хит</div>
        </div>
        <div class="like_icons">
          <div class="wish_item_button">
            <span v-if="data.inWish" title="В отложенных" class="wish_item in added"><i></i></span>
            <span v-else title="Отложить" class="wish_item to"><i></i></span>
          </div>
        </div>
        <a class="item-info" href="https://confaelshop.ru/catalog/personalnye-podarki/solobox/dlya-nee/7324/">
          <div class="item-image shine">
            <img
                    src="https://cdn.retailrocket.net/api/1.0/partner/5c86511097a5281d447d7a3b/item/1514/picture/?format=png&width=170&height=170&scale=both"
                    title="Набор конфет с индивидуальным дизайном (SoloBox «Будь всегда со мной»)">
          </div>
        </a>
        <!-- <div
          class="fast_view_block"
          data-event="jqm"
          data-param-form_id="fast_view"
          data-param-iblock_id="4"
          data-param-id="1514"
          data-param-item_href="/catalog/komu/podarki-dlya-muzhchin/1514/"
          data-name="fast_view">Быстрый просмотр</div>
      </div> -->
      <div class="item-name-block">
        <a
          class="item-info"
          href="https://confaelshop.ru/catalog/komu/podarki-dlya-muzhchin/1514/"
          tabindex="0"
        >
          <div class="item-title">{{ data.name}}</div>
        </a>
      </div>
      <div class="rating">
        <span class="star-active star-voted"></span>
        <span class="star-active star-voted"></span>
        <span class="star-active star-empty"></span>
        <span class="star-active star-empty"></span>
        <span class="star-active star-empty"></span>
      </div>
      <div class="item-block-price">
        <div class="item-price">
          <span class="item-price-value">{{ +data.price }}</span>
          <span class="item-price-currency"></span>
        </div>
      </div>
      <div class="footer_button">
        <div class="rr-container-wrap">
          <div class="counter_block" data-offers="N" data-item="1514">
            <span class="minus" id="bx_3966226736_1514_quant_down">-</span>
            <input
               type="text"
               class="text"
               id="bx_3966226736_1514_quantity"
               name="quantity"
               value="1"
               tabindex="0"
            >
            <span class="plus" id="bx_3966226736_1514_quant_up">+</span>
          </div>
          <div id="bx_3966226736_1514_basket_actions" class="button_block ">
            <span
              data-value="545"
              data-currency="RUB"
              class="
                small
                giftd_add_basket
                to-cart btn btn-default
                transition_bg
                animate-load
                js-giftd-product-add
                js-giftd-block-1
                js-giftd-product-main"
              data-item="1514"
              data-float_ratio=""
              data-ratio="1"
              data-bakset_div="bx_basket_div_2486"
              data-props=""
              data-part_props="Y"
              data-add_props="Y"
              data-empty_props="Y"
              data-offers=""
              data-iblockid="4"
              data-quantity="1"
              data-giftd-block-id-product="1">
              <i></i>
              <span>Заказать</span>
            </span>
            <a
              rel="nofollow"
              href="/basket/"
              class="small in-cart btn btn-default transition_bg"
              data-item="1514"
              style="display:none;"
              tabindex="0">
              <i></i>
              <span>В корзине</span>
            </a>
          </div>
          <div class="total_summ" data-id="1514" style="overflow: hidden; display: none;">
            <div>Общая стоимость <span class="rr-summ"></span> <b>руб.</b></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style type="text/css">
  .rr-tabContent{height:0;visibility:hidden;}
  .rr-tabContent.active .rr-active,
  .rr-tabContent.active{height:auto;visibility:visible;}
  .rr-content .rr-tabLink{margin-right:29px;white-space:nowrap;}
  .rr-content .rr-tabLink span{
    display:inline-block;
    color:#222;
    border-bottom:2px solid transparent;
    font-size:16px;
    line-height:20px;
    font-weight:bold;
    padding-bottom:5px;
    margin-bottom:5px;
    cursor:pointer;
  }
  .rr-content .rr-tabLink.active span{border-bottom-color:#4f433e;}
  .tab-title{width:calc(100% - 66px);}
  .rr-widget-5c8f853f97a5252b105fd607-popular.rr-active{margin-top:-24px;}
  .rr_header{position:absolute;right:0;top:-42px;}
  .rr-widget{
    height:0;
    visibility:hidden;
    position:relative;
    display:inline-block;
    width:100%;outline:none;
    font-family:inherit;
    box-sizing:border-box;padding-right:5px;}
  .widgettitle{
    font-size:21px;
    font-weight:700;
    color:#333;
    text-align:left;
    margin:15px 0;
    display:inline-block;
  }
  .rr-tabContent.active .rr-widget.rr-active .retailrocket-items{min-height:761px;}
  .retailrocket-items{padding:0;position:relative;min-height:0;margin:0 -7px;}
  .retailrocket-item{
    width: 20%;
    float:left;
    list-style:none;
    text-align:center;
    outline:none;
    margin:0 0px;
    height:359px;
  }
  .slick-slide{float:left;}
  .retailrocket-item:last-child .rr_container{border-right:solid 1px #eee;}

  .rr_container {
    background: #fff;
    padding: 20px 19px 21px 20px;
    border: solid 1px #eee;
    border-right: none;
    background: #fff;
    height: 100%;
  }

  .rr_container:hover {
    border-color: #fff;
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    z-index: 12;
    height: auto;
    position: relative;
  }

  .item-image {
    width: 100%;
    outline: none
  }

  .item-image img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    margin: 0 auto;
    outline: none
  }

  .item-info {
    text-decoration: none;
    outline: none
  }

  .item-title {
    font-size: 14px;
    font-weight: 700;
    color: #333;
    margin: 5px 0;
    text-align: center;
    overflow: hidden;
    outline: none;
    height: 48px;
  }

  .item-title:hover {
    text-decoration: none;
    color: #512c1d
  }

  .item-old-price {
    font-size: 16px;
    font-weight: 400;
    color: #333;
    margin: 0 7px;
    text-decoration: line-through;
    display: inline-block
  }

  .item-price {
    color: #1d2029;
    margin: 0 7px;
    font-size: 18px;
    font-weight: bold;
    line-height: 15px;
    margin-bottom: 8px;
    display: inline-block
  }

  .item-price-currency::before {
    content: 'руб.'
  }

  .slick-list {
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

  .slick-prev::before,
  .slick-next::before {
    content: '';
    width: 40px;
    height: 40px;
    display: inline-block !important;
    cursor: pointer;
    z-index: 1
  }

  .slick-prev::before {
    background: url(https://confaelshop.ru/bitrix/templates/aspro/images/arrows2.png) 50% no-repeat;
    background-position: 4px -18px;
  }

  .slick-next::before {
    background: url(https://confaelshop.ru/bitrix/templates/aspro/images/arrows2.png) 50% no-repeat;
    background-position: -70px -18px;
  }

  .slick-hidden {
    display: none !important
  }

  span.star-active {
    cursor: default;
    background: url(https://confaelshop.ru/bitrix/templates/aspro/images/ai.png) -137px -51px no-repeat;
    width: 15px;
    height: 14px;
    overflow: hidden;
    display: inline-block;
  }

  span.star-active.star-empty {
    background-position: -152px -51px;
  }

  .retailrocket-item:hover .item-actions {
    opacity: 1;
    visibility: visible;
    height: 30px;
    margin: 11px 0px 0px;
    height: auto;
  }

  .rr_label {
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

  .rr_stickers {
    left: 0px;
    top: 4px;
    position: absolute;
    z-index: 3;
    text-align: left;
    padding-right: 50px;
  }

  .item-img-block {
    position: relative;
  }

  .rr_sale_text {
    background-color: #e52929;
  }

  .rr_novinka {
    background-color: #4fad00;
  }

  .rr_hit {
    background-color: #2992d9;
  }

  .rr_aktsiya {
    background-color: #ffc438;
    color: #1d2029;
  }

  .rr_halal {
    background-color: #006400
  }

  .rr_postnoe {
    background-color: #e52929
  }

  .rr_sovetuem {
    background-color: #893ca9;
  }

  .rr-arrow {
    width: 33px;
    height: 35px;
    border-radius: 2px 0 0 2px;
    border: 1px solid #e5e5e5;
    float: left;
  }

  .rr-slider-arrow::after {
    content: '';
    clear: both;
    display: block;
  }

  .rr-slider-arrow {
    display: inline-block;
    float: right;
    margin-top: 10px;
  }

  .retailrocket-item:hover .fast_view_block,
  .retailrocket-item:hover .wish_item {
    visibility: visible;
    opacity: 1;
  }

  .item-old-price span.item-price-currency,
  .item-old-price-value {
    font-size: 13px;
    line-height: 15px;
    font-weight: normal;
    color: #888;
    text-decoration: line-through;
  }

  .item-block-price {
    min-height: 54px;
  }

  .rr-container-wrap {
    padding: 0
  }

  .total_summ {
    margin: 9px 0px 0px;
    width: 100%;
    font-size: 13px;
    line-height: 20px;
    color: #666;
  }

  .total_summ .rr-summ {
    font-weight: bold;
  }

  .slick-slide {
    outline: 0
  }

  @media (max-width: 991px) {
    .item-actions {
      opacity: 1;
      visibility: visible;
      height: auto;
    }

    .like_icons span {
      opacity: 1;
      visibility: visible;
    }

    .slick-list {
      padding-bottom: 20px;
      position: relative;
    }

    .retailrocket-items,
    .retailrocket-item,
    .slick-list {
      height: 0 !important;
    }

    .rr-tabContent.active .rr-widget.rr-active .retailrocket-items,
    .rr-tabContent.active .rr-widget.rr-active .retailrocket-item,
    .rr-tabContent.active .rr-widget.rr-active .slick-list {
      height: auto !important;
    }

    .retailrocket-item:hover .item-actions {
      margin-top: 5px;
    }
  }
</style>
