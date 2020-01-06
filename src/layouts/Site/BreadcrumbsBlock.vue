<template>
  <div class="top_inner_block_wrapper maxwidth-theme">
    <div class="page-top-wrapper grey">
      <section class="page-top maxwidth-theme  ">
        <div class="breadcrumbs" id="navigation">
          <div class="bx-breadcrumb-item">
            <router-link to="/" title="Главная страница">
              <span itemprop="name">Главная страница</span>
              <meta itemprop="position" content="1">
            </router-link></div>
        </div>
        <div class="page-top-main">
          <h1 id="pagetitle">Каталог подарков из шоколада - Конфаэль</h1>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BreadcrumbsBlock',
});
</script>
