<template>
  <div class="header-lan-selector">
    <div class="header-lan-selector__header" @click="onDropdownClick">
      <div>
        <img :src="require(`assets/ks/img/flag/${curDropdownItem.icon}`)" class="header-lan-selector__flag">
        <span class="header-lan-selector__label">{{curDropdownItem.label}}</span>
      </div>
      <q-icon name="expand_more" class="header-lan-selector__arrow"/>
    </div>
    <div
      class="header-lan-selector__dropdown"
      v-bind:class="{ ['header-lan-selector__dropdown_state-open']: dropdownOpen }"
    >
      <div
        v-for="item in dropdownItems"
        v-bind:key="item.value"
        @click="onDropdownItemClick(item.value)"
        class="header-lan-selector__dropdown-item"
      >
        <img
          :src="require(`assets/ks/img/flag/${item.icon}`)"
          class="header-lan-selector__dropdown-item-flag"
        >
        <span class="header-lan-selector__dropdown-item-label">{{item.label}}</span>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Module } from 'vuex-smart-module'
import lang, {
  LangState,
  LangGetters,
  LangMutations,
  LangActions
}  from '../../../store/lang';
import config from '../../../../common/config';
import foo from '../../../store/foo';

interface DropdownItemData {
  icon: string;
  label: string;
  value: string;
}

@Component
export default class HeaderLanSelector extends Vue {
  public dropdownOpen: boolean = false;
  protected langStore = lang.context(this.$store);

  public get curDropdownItem(): DropdownItemData {
    const isLanItem = _ => _.value === this.langStore.getters.lang;
    return this.dropdownItems.find(isLanItem) as DropdownItemData;
  }

  public get dropdownItems(): DropdownItemData[] {
    return [
      {icon: 'flag-1.jpg', label: 'English', value: config.lang.en},
      {icon: 'flag-2.jpg', label: 'German', value: config.lang.ger},
    ];
  };

  public onDropdownClick(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  public onDropdownItemClick(val: string) :void {
    this.langStore.actions.setLang(val);
    this.dropdownOpen = false;
  }
};
</script>

<style>
  .header-lan-selector__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-lan-selector__flag {
    padding-right: 5px;
  }

  .header-lan-selector__label {
    font-size: 14px;
    color: #252525;
  }

  .header-lan-selector__dropdown {
    background: #fff;
    max-width: 142px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 34px;
    line-height: 23px;
    border: 1px solid #dee2e6;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)
  }

  .header-lan-selector__dropdown_state-open {
    opacity: 1;
    top: 24px;
    visibility: visible;
  }

  .header-lan-selector__dropdown-item {
    line-height: 23px;
    padding: 0 10px;
  }

  .header-lan-selector__dropdown-item-flag {
    padding-right: 10px;
  }
  .header-lan-selector__dropdown-item-label {
    font-size: 13px;
    color: #000;
    letter-spacing: 0.325px;
  }
</style>
