<template>
  <div class="auth_wrapp form-block">
    <div class="wrap_md1">
      <div class="main_info_block form">
        <div class="form-wr form-body">
          <form>
            <div class="form-group">
                <div class="">
                  <label for="USER_LOGIN_POPUP">
                    Логин
                    <span class="required-star">*</span>
                  </label>
                  <div class="input">
                    <input
                      type="text"
                      name="USER_LOGIN"
                      id="USER_LOGIN_POPUP"
                      maxlength="50"
                      value="" autocomplete="on" tabindex="1"
                    >
                  </div>
                </div>
              </div>
            <div class="form-group">
                <div class="">
                  <label
                    for="USER_PASSWORD_POPUP">
                    Пароль
                    <span class="required-star">*</span>
                  </label>
                  <div class="input">
                    <input
                      type="password"
                      name="USER_PASSWORD"
                      id="USER_PASSWORD_POPUP"
                      autocomplete="on"
                      tabindex="2"
                      aria-required="true"
                      aria-invalid="false"
                    >
                  </div>
                </div>
              </div>
            <div class="but-r">
              <div class="filter block">
                <a
                  class="forgot pull-right"
                   href="javascript:;"
                   tabindex="3"
                >
                  Забыли пароль?
                </a>
                <div class="prompt remember pull-left">
                  <input
                    type="checkbox"
                    id="USER_REMEMBER_frm"
                    name="USER_REMEMBER"
                    value="Y"
                    tabindex="5"
                  >
                  <label
                    for="USER_REMEMBER_frm"
                    title="Запомнить меня"
                    tabindex="5"
                  >
                    Запомнить меня
                  </label>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="buttons clearfix">
                <button type="submit" class="btn btn-default bold" name="Login" value=""
                        tabindex="4">
                  <span>Войти</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="form-footer socserv1">
      <div class="inner-table-block">
        <a
        href="javascript:;"
        @click="onRegFormClick"
        class="btn transparent bold register"
      >
        Регистрация
      </a>
      </div>
      <div class="inner-table-block header-user-form-login__reg-text">
        <div class="more_text_small">
          Вам будет доступно управление рассылками,
          использование персональных данных, связь
          профиля с аккаунтом соцсети и т.д.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HeaderUserFormLogin',
  methods: {
    onRegFormClick() {
      this.$emit('regFormClick');
    },
  },
});
</script>

<style>
  .header-user-form-login__reg-text {
    max-width: 230px;
  }
</style>
