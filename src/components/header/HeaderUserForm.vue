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

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import HeaderUserFormLogin from './HeaderUserFormLogin';
import HeaderUserFormRegister from './HeaderUserFormRegister';

@Component({
  components: {
    HeaderUserFormLogin,
    HeaderUserFormRegister,
  },
})
export default class HeaderUserForm extends Vue {
  isLogin:boolean = true;

  get header() {
    return this.isLogin ? 'Авторизация' : 'Регистрация';
  };

  onRegFormClick() {
    this.isLogin = false;
  };

  onLoginFormClick() {
    this.isLogin = true;
  };
};
</script>

<style>
  .header-user-form__close {
    position: absolute;
    right: 33px;
    top: 13px;
  }
</style>
