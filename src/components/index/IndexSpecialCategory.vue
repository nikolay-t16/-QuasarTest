<template>
  <div class="special-category">
    <div v-if="slides">
      <q-carousel-control class="special-category__control q-gutter-xs">
        <q-btn
          class="special-category__control-btn"
          text-color="#b0b0b0" icon="keyboard_arrow_left"
          @click="$refs.carousel.previous()"
        />
        <q-btn
          class="special-category__control-btn"
          icon="keyboard_arrow_right"
          @click="$refs.carousel.next()"
        />
      </q-carousel-control>
      <q-carousel
        animated
        v-model="slide"
        infinite
        transition-prev="slide-right"
        transition-next="slide-left"
        ref="carousel"
        height="min-content"
        class="special-category__carousel"
      >
        <q-carousel-slide
                v-for="(slide, index) in slides"
                v-bind:key="index"
                :name="index"
                class="flex-center">
          <product-list-item
            v-for="(prod, i) in slide"
            v-bind:key="i"
            :data="prod"
          />
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductListItem from '../product/ProductListItem';
import Component from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

@Component({
  components: {
    ProductListItem,
  },
})
export default class IndexAbout extends Vue {
  @Prop({})
  data: any[] = [];
  slide: string = 'style';

  get slides() {
    let i = 0;
    const res: any[] = [];
    while (i < this.data.length) {
      res.push(this.data.slice(i, i + 10));
      i += 10;
    }
    return res;
  }
};
</script>

<style>
  .special-category {
    position: relative;
  }

  .special-category__carousel .q-panel {
    padding-bottom: 42px;
  }

  .special-category__control {
    height: min-content;
    position: absolute;
    top: -45px;
    margin: 0!important;
  }

  .special-category__control-btn {
    color: rgba(0,0,0,0.5);
  }
</style>
