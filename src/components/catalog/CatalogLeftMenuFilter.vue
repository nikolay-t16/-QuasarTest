<template>
  <div class="display_fixed_wrapper">

    <div class="bx_filter bx_filter_vertical filter_under_menu" style="width: auto;">

      <div class="bx_filter_section">
        <form
           name="_form"
           action="/catalog/?display=block"
           method="get"
           class="smartfilter"
           id="smartfilter"
        >
          <div class="bx_filter_parameters_box active title">
            <div class="bx_filter_parameters_box_title">Фильтр по параметрам</div>
          </div>
          <input type="hidden" name="del_url" id="del_url" value="/catalog/">
          <input type="hidden" name="display" id="display" value="block">
          <div class="bx_filter_parameters_box active">
            <span class="bx_filter_container_modef"></span>
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
                      <span style="color:#999;">{{rangeMin}}</span>
                      <span style="color:#999;">{{rangeMax}}</span>
                    </div>
                    <q-range
                            v-model="rangeSlider"
                            :min="rangeMin"
                            :max="rangeMax"
                            color="main-brown"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="clb"></div>
        </form>
        <div style="clear: both;"></div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'CatalogLeftMenuFilter',
  data() {
    return {
      rangeMin: 0,
      rangeMax: 50,
      rangeSlider: {
        min: 10,
        max: 35,
      },
    };
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
