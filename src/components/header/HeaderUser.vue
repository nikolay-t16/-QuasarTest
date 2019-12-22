<template>
  <div class="personal top login twosmallfont">
    <a
      rel="nofollow"
      title="Мой кабинет"
      class="personal-link dark-color animate-load"
      href="javascript:;"
    >
      <i
        class="svg inline  svg-inline-cabinet"
        aria-hidden="true"
        title="Мой кабинет">
        <q-icon name="o_https" class="header-user__icon"/>
      </i>
      <span class="wrap"><span class="name">Войти</span></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HeaderUser',
};
</script>

<style>
  .header-user__icon {
    font-size: 18px;
  }
</style>
