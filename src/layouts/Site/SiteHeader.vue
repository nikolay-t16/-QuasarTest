<template>
  <div class="header_wrap visible-lg visible-md title-v2 index">
    <header id="header">
      <div class="top-block top-block-v1">
        <div class="maxwidth-theme">
          <div class="row justify-end">
            <div class="top-block-item pull-right show-fixed top-ctrl">
              <div class="personal_wrap">
                <header-user/>
              </div>
            </div>
            <div class="top-block-item pull-right">
              <div class="phone-block">
                <div class="inline-block">
                  <div class="phone with_dropdown">
                    <i class="svg svg-phone"></i>
                    <a rel="nofollow" href="tel:+74952419104">+7 (495) 241-91-04</a>
                    <div class="dropdown">
                      <div class="wrap">
                        <div class="more_phone">
                          <a rel="nofollow" href="tel:88006005353">8 (800) 600-53-53</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="inline-block">
                  <span class="callback-block animate-load twosmallfont colored" data-event="jqm"
                    data-param-form_id="CALLBACK" data-name="callback">Заказать звонок</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-v3 header-wrapper">
        <div class="logo_and_menu-row">
          <div class="logo-row">
            <div class="maxwidth-theme">
              <div class="row justify-between">
                <div class="logo-block col-md-2 col-sm-3">
                  <div class="logo">
                    <router-link to="/">
                      <img
                        src="/statics/img/logo.webp"
                        alt="Конфаэль интернет-магазин" title="Конфаэль интернет-магазин"
                      >
                    </router-link>
                  </div>
                </div>
                <div class="row">
                  <div
                  class="pull-left search_wrap wide_search"
                  style="opacity: 1; visibility: visible;">
                  <div class="search-block inner-table-block" style="width: 804px;">
                    <div class="search-wrapper">
                      <div id="title-search_fixed">
                        <form action="/catalog/" class="search">
                          <div class="search-input-div">
                            <input
                              class="search-input"
                              id="title-search-input_fixed"
                              type="text" name="q" value=""
                              placeholder="Поиск" size="20" maxlength="50" autocomplete="off">
                          </div>
                          <div class="search-button-div">
                            <button class="btn btn-search" type="submit" name="s" value="Поиск">
                              <q-icon name="search" /></button>
                            <span
                              class="close-block inline-search-hide">
                              <span class="svg svg-close close-icons"></span>
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                  <basket-header/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="menu-row middle-block bgcolored">
          <div class="maxwidth-theme">
            <div class="row">
              <div class="col-md-12">
                <header-menu/>
              </div>
            </div>
          </div>
        </div>
        <div class="banner_UNDER_MENU">
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BasketHeader from '../../components/basket/BasketHeader';
import HeaderUser from '../../components/header/HeaderUser';
import HeaderMenu from './HeaderMenu';

@Component({
  components: {
    HeaderUser,
    HeaderMenu,
    BasketHeader,
  },
})
export default class SiteHeader extends Vue {};
</script>

<style>
  .btn-search .material-icons {
    font-size: 24px;
    color: black;
  }
</style>
