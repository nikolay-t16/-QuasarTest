<template>
  <div class="header-lan-selector">
    <div class="header-lan-selector__header" @click="onDropdownClick">
      <div>
        <img src="~assets/ks/img/flag-1.jpg" class="header-lan-selector__flag">
        <span class="header-lan-selector__label">English</span>
      </div>
      <q-icon name="expand_more" class="header-lan-selector__arrow"/>
    </div>
    <div
      class="header-lan-selector__dropdown"
      v-bind:class="{ ['header-lan-selector__dropdown_state-open']: dropdownOpen }"
    >
      <div class="header-lan-selector__dropdown-item">
        <img src="~assets/ks/img/flag-1.jpg" class="header-lan-selector__dropdown-item-flag">
        <span class="header-lan-selector__dropdown-item-label">English</span>
      </div>
      <div class="header-lan-selector__dropdown-item">
        <img src="~assets/ks/img/flag-2.jpg" class="header-lan-selector__dropdown-item-flag">
        <span class="header-lan-selector__dropdown-item-label">German</span>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HeaderLanSelector extends Vue {
  public dropdownOpen: boolean = false;

  public onDropdownClick(): void {
    this.dropdownOpen = !this.dropdownOpen;
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
