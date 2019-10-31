<template>
  <div class="menu-only">
    <nav class="mega-menu sliced ovisible initied">
      <div class="table-menu index__table-menu">
        <div class="menu-item dropdown catalog wide_menu">
          <div class="wrap">
            <a @mouseover="onSelectMenu" class="dropdown-toggle" href="/catalog/">
              <div>
                Каталог
                <div class="line-wrapper">
                  <span class="line"></span></div>
              </div>
              <q-icon name="expand_more" size="md"/>
            </a>
            <div class="index-menu__layout">
              <div class="index-menu__layout-wrap">
                <div class="index-menu__column"
                     v-if="rubricTree && rubricTree[0].children.length > 0"
                >
                  <ul class="first-level__list">
                    <li
                            v-for="(item, index) in rubricTree[0].children"
                            v-bind:key="item.id"
                            value=""
                            class="dropdown-submenu has_img"
                    >
                      <a
                              @mouseover="onSelectMenuItem(item, 0)"
                              :data-id="index"
                              href=""
                      >
                        <span class="name">{{item.label}}</span>
                        <q-icon
                                class="header-menu__icon-more"
                                name="keyboard_arrow_right"
                                size="xs"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="index-menu__column"
                     v-if="subMenu1.length > 0"
                >
                  <ul class="second-level__list">
                    <li class="menu-item ">
                      <a
                              href="javascript:;"
                      >
                        <span class="name">Смотреть весь раздел</span>
                      </a>
                    </li>
                    <li
                            v-for="(item, index) in subMenu1"
                            v-bind:key="item.id"
                            class="dropdown-submenu has_img"
                    >
                      <a
                              :data-id="index"
                              href=""
                              @mouseover="onSelectMenuItem(item, 1)"
                      >
                        <span class="name">{{item.label}}</span>
                        <q-icon
                                class="header-menu__icon-more"
                                name="keyboard_arrow_right"
                                size="xs"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="index-menu__column"
                     v-if="subMenu2.length > 0"
                >
                  <ul class="second-level__list">
                    <li class="menu-item ">
                      <a
                              href="javascript:;"
                      >
                        <span class="name">Смотреть весь раздел</span>
                      </a>
                    </li>
                    <li
                            v-for="(item, index) in subMenu2"
                            v-bind:key="item.id"
                            class="dropdown-submenu has_img"
                    >
                      <a
                              :data-id="index"
                              href=""
                      >
                        <span class="name">{{item.label}}</span>
                        <q-icon
                                class="header-menu__icon-more"
                                name="keyboard_arrow_right"
                                size="xs"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <div class="wrap">
            <a class="" href="/individual/">
              <div>
                Доставка и оплата
                <div class="line-wrapper">
                  <span class="line"></span></div>
              </div>
            </a>
          </div>
        </div>
        <div class="menu-item">
          <div class="wrap">
            <a class="" href="/individual/">
              <div>
                Контакты
                <div class="line-wrapper">
                  <span class="line"></span></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'HeaderMenu',
  data() {
    return {
      selectItem1: null,
      selectItem2: null,
      subMenu1: [],
      subMenu2: [],
      menuItems: [
        { label: 'Доставка и оплата', url: '' },
        { label: 'Контакты', url: '' },
      ],
    };
  },
  computed: {
    ...mapState('catalog', ['TYPE_RUBRIC']),
    ...mapGetters('catalog', ['rubricTree']),
  },
  methods: {
    onSelectMenu() {
      this.subMenu1 = [];
      this.subMenu2 = [];
    },
    onSelectMenuItem(item, level) {
      if (level === 0) {
        this.selectItem1 = item;
        this.subMenu1 = item.children;
        this.subMenu2 = [];
      } else {
        this.selectItem2 = item;
        this.subMenu2 = item.children;
      }
    },
    showSubMenu(level) {
      return this.subMenu[level] && this.subMenu[level].length > 0;
    },
  },
};
</script>

<style>
  .dropdown-toggle .q-icon {
    float: right;
    margin-top: 1px;
    position: relative;
    left: 28px;
  }
  .index-menu__column  .q-icon{
    right: 13px;
    position: absolute;
    top: 16px;
  }
  .index__table-menu {
    display: flex;
  }
  .index-menu__column ul li{
    padding-left: 0px;
  }
  .catalog.wide_menu {
    margin-right: -1px;
  }
  .menu-row.middle-block:not(.bglight) .mega-menu .catalog.wide_menu .wrap>a {
    border-left: 1px solid rgba(255,255,255,.15);
  }
</style>
