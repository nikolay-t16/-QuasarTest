<template>
  <div class="display_fixed_wrapper">

    <div class="bx_filter bx_filter_vertical filter_under_menu" style="width: auto;">

      <div class="bx_filter_section">
        <form
           name="_form"
           method="get"
           class="smartfilter"
        >
          <div class="bx_filter_parameters_box active title">
            <div class="bx_filter_parameters_box_title">Фильтр по параметрам</div>
          </div>
          <div class="bx_filter_parameters_box active">
            <div class="bx_filter_parameters_box_title icons_fa">Цена</div>
            <div class="bx_filter_block">
              <div class="bx_filter_parameters_box_container numbers">
                <div class="wrapp_all_inputs wrap_md">
                  <div class="wrapp_change_inputs iblock">
                    <div class="bx_filter_parameters_box_container_block">
                      <div class="bx_filter_input_container form-control bg">
                        <input
                          class="min-price"
                          type="text"
                          v-model="rangeSlider.min"
                         >
                      </div>
                    </div>
                    <div class="bx_filter_parameters_box_container_block">
                      <div class="bx_filter_input_container form-control bg">
                        <input
                          class="max-price"
                          type="text"
                          size="5"
                          v-model="rangeSlider.max"
                        >
                      </div>
                    </div>
                    <div style="clear: both;"></div>
                  </div>
                  <div style="clear: both;"></div>
                  <div class="wrapp_slider iblock">
                    <div
                       class="flex justify-between"
                       style="margin-bottom: -17px;margin-top: 5px;">
                      <span style="color:#999;">{{minPrice}}</span>
                      <span style="color:#999;">{{maxPrice}}</span>
                    </div>
                    <q-range
                            v-model="rangeSlider"
                            :min="minPrice"
                            :max="maxPrice"
                            color="main-brown"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="clb"></div>
          <div class="bx_filter_button_box active">
            <div class="bx_filter_block">
              <div class="bx_filter_parameters_box_container">
                <input
                  class="bx_filter_search_button btn btn-default"
                  type="button"
                  name="set_filter"
                  value="Показать"
                  @click="onClickFilter"
                >
                <button
                  class="bx_filter_search_reset btn btn-default white grey"
                  type="button"
                  name="del_filter"
                  @click="onClickReset"
                >
                  Сбросить
                </button>
              </div>
            </div>
          </div>
        </form>
        <div style="clear: both;"></div>
      </div>
    </div>


  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CatalogLeftMenuFilter',
  props: ['maxPrice'],
  data() {
    return {
      minPrice: 0,
      rangeSlider: {
        min: 0,
        max: 0,
      },
    };
  },
  created() {
    this.rangeSlider.max = this.maxPrice;
  },
  methods: {
    ...mapActions('product', ['resetFilter', 'filter']),
    onClickFilter() {
      this.filter({ minPrice: this.rangeSlider.min, maxPrice: this.rangeSlider.max });
    },
    onClickReset() {
      this.resetFilter({ minPrice: 0, maxPrice: null });
      // this.filter({ minPrice: 0, maxPrice: null });
    },
  },
};
</script>

<style>
  .text-main-brown {
    color: #512c1d;
  }
  .bg-main-brown {
    background: #512c1d;
  }
</style>
