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

          <div
            class="bx_filter_parameters_box">
            <div class="bx_filter_parameters_box_title icons_fa"
             @click="onClickFilterItem('price')"
            >
              Цена
              <q-icon
                class="catalog-left-menu-filter__bx-filter-label-icon"
                :name="activeFilterItems.price ? 'expand_less' : 'expand_more'"
              />
          </div>
          <div
            v-bind:class="{ active: activeFilterItems.price }"
            class="catalog-left-menu-filter__bx-filter-block bx_filter_block"
          >
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
                      <div class="catalog-left-menu-filte__range-slider">
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

<script lang="ts">
import { mapActions } from 'vuex';
import { Component, Prop, Vue, } from 'vue-property-decorator';

@Component({
    created() {
        this.rangeSlider.max = this.maxPrice;
    },
    methods: {
        ...mapActions('product', ['resetFilter', 'filter']),
    },
})
export default class CatalogLeftMenuFilter extends Vue {
  @Prop(Object)
  maxPrice: number = 0;

  minPrice: number = 0;
  activeFilterItems: object = {
        price: false,
  };
  rangeSlider: object = {
        min: 0,
        max: 0,
  };



  onClickFilter(): void {
      this.filter({ minPrice: this.rangeSlider.min, maxPrice: this.rangeSlider.max });
  };
  onClickReset(): void {
      this.resetFilter({ minPrice: 0, maxPrice: null });
  };
  onClickFilterItem(item: number): void {
      this.activeFilterItems[item] = !this.activeFilterItems[item];
  };
};
</script>

<style>
  .text-main-brown {
    color: #512c1d;
  }
  .bg-main-brown {
    background: #512c1d;
  }
  .catalog-left-menu-filter__bx-filter-block {
    max-height: 0;
    transition: max-height .4s;
    overflow: hidden;
  }
  .catalog-left-menu-filter__bx-filter-block.active{
    max-height: 100px;
  }
  .catalog-left-menu-filte__range-slider {
    margin: 0 11px;
  }
  .catalog-left-menu-filter__bx-filter-label-icon {
    position: absolute;
    right: -8px;
    top: 4px;
  }
</style>
