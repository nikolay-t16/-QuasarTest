<template>
  <div id="wrap_ajax_auth" class="form">
    <div class="form_head">
      <h2>{{header}}</h2>
      <q-btn icon="close" class="header-user-form__close" flat round dense v-close-popup />
    </div>
    <header-user-form-login
      v-if="isLogin"
      @regFormClick="onRegFormClick"
    />
    <header-user-form-register
      v-else
      @loginFormClick="onLoginFormClick"
    />
  </div>
</template>

<script>
import HeaderUserFormLogin from './HeaderUserFormLogin';
import HeaderUserFormRegister from './HeaderUserFormRegister';

export default {
  name: 'HeaderUserForm',
  components: {
    HeaderUserFormLogin,
    HeaderUserFormRegister,
  },
  data() {
    return {
      isLogin: true,
    };
  },
  computed: {
    header() {
      return this.isLogin ? 'Авторизация' : 'Регистрация';
    },
  },
  methods: {
    onRegFormClick() {
      this.isLogin = false;
    },
    onLoginFormClick() {
      this.isLogin = true;
    },
  },
};
</script>

<style>
  .header-user-form__close {
    position: absolute;
    right: 33px;
    top: 13px;
  }
</style>
