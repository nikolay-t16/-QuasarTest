<template>
  <div class="top_slider_wrapp maxwidth-banner">
    <div class="flexslider">
      <q-carousel
            animated
            v-model="slide"
            arrows
            navigation
            infinite
    >
      <q-carousel-slide
              class="slides"
              :name="1"
              :img-src="
                'https://confaelshop.ru/upload/ammina.optimizer/' +
                'jpg-webp/q80/upload/iblock/f3d/f3d99d101a9d5e9b16182f9b75f96d3f.webp'
      ">
        <div class="wrapper_inner">
          <table class="table-no-border">
            <tbody>
              <tr>
                <td class="text left">
                  <div class="banner_title">
                    <span>Берите больше - платите меньше</span>
                  </div>
                  <div class="banner_text">При покупке товаров на сумму от 1500 рублей <br>
                    купон в подарок!</div>
                  <div class="banner_buttons">
                    <a href="/sale/take_more_pay_less" class="btn btn-default btn-lg">
                      Узнать подробнее
                    </a>
                  </div>
                </td>
                <td class="img">
                  <!--<img
                    class="plaxy"
                    :src="
                      'https://confaelshop.ru/upload/ammina.optimizer/png-webp/' +
                      'q80/upload/iblock/52a/52acd21edb1db71065eec0aa7364471f.webp'"
                    alt="Берите больше - платите меньше"
                    title="Берите больше - платите меньше"
                    draggable="false">-->
                </td>
            </tr>
           </tbody>
          </table>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="slides" :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide class="slides" :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide class="slides" :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Carousel',
  data() {
    return {
      slide: 1,
    };
  },
});
</script>

<style>
  .flexslider {
    color: white;
  }
</style>
