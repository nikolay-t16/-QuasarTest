<template>
  <div class="middle ">
    <div class="container">
      <div class="right_block1 clearfix catalog vertical" id="right_block_ajax">
        <div class="js_filter filter_horizontal">
          <div class="bx_filter bx_filter_vertical"></div>
        </div>
        <div class="inner_wrapper">

          <div class="adaptive_filter">
            <a class="filter_opener"><i></i><span>Фильтр</span></a>
          </div>
          <div class="sort_header view_block">
            <div class="sort_filter">
              <a href="/catalog/index.php?sort=SHOWS&amp;order=desc&amp;display=block"
                 class="sort_btn current asc SHOWS" rel="nofollow" onclick="ajaxReSort(event)">
                <i class="icon" title="По популярности"></i>
                <span>По популярности</span>
                <i class="arr icons_fa"></i>
              </a>
            </div>
            <div class="clearfix"></div>
            <!--/noindex-->
          </div>
          <div class="ajax_load block">
            <div class="top_wrapper row margin0 show_un_props">
              <div class="catalog_block items block_list">
                <product-list-item
                  v-for="(prod, i) in products.items"
                  v-bind:key="i"
                  :data="prod"
                />
              </div>
            </div>
            <div class="bottom_nav ">
              <div class="ajax_load_btn">
                <span class="more_text_ajax">Показать еще</span>
              </div>
              <div class="module-pagination">
                <div class="nums">
                  <ul class="flex-direction-nav">
                    <li
                       class="flex-nav-next "><a
                       href="/catalog/?sort=SHOWS&amp;order=asc&amp;display=block&amp;PAGEN_3=2"
                       class="flex-next"></a></li>
                  </ul>
                  <span class="cur">1</span>
                  <a
                    href="/catalog/?sort=SHOWS&amp;order=asc&amp;display=block&amp;PAGEN_3=2"
                    class="dark_link">2</a>
                  <a
                    href="/catalog/?sort=SHOWS&amp;order=asc&amp;display=block&amp;PAGEN_3=3"
                    class="dark_link">3</a>
                  <span class="point_sep"></span>
                  <a
                    href="/catalog/?sort=SHOWS&amp;order=asc&amp;display=block&amp;PAGEN_3=46"
                    class="dark_link">46</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductListItem from '../product/ProductListItem';

export default {
  name: 'CatalogProductList',
  props: ['products'],
  components: {
    ProductListItem,
  },
};
</script>
