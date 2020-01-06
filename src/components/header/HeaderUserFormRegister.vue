<template>
  <div class="auth_wrapp form-block">
    <div class="wrap_md1">
      <div class="main_info_block form">
        <div class="form-wr form-body">
          <form>
            <div class="form-group">
                <div class="input">
                  <label for="input_NAME">Фамилия Имя Отчество <span class="star">*</span></label>
                  <input
                    size="30"
                    type="text"
                    id="input_NAME"
                    name="REGISTER[NAME]"
                    required=""
                    value=""
                    aria-required="true"
                  >
                </div>
            </div>
            <div class="form-group">
              <div class="input">
                  <label for="input_EMAIL">E-mail <span class="star">*</span></label>
                  <input
                    size="30"
                    type="email"
                    id="input_EMAIL"
                    name="REGISTER[EMAIL]"
                    required=""
                    value=""
                    aria-required="true"
                  >
                </div>
            </div>
            <div class="form-group">
              <div class="input">
                  <label for="input_PERSONAL_PHONE">Телефон <span class="star">*</span></label>

                  <input
                    size="30"
                    type="tel"
                    id="input_PERSONAL_PHONE"
                    name="REGISTER[PERSONAL_PHONE]"
                    class="phone_input"
                    required=""
                    value=""
                    aria-required="true"
                  >
                </div>
            </div>
            <div class="form-group">
              <div class="input">
                  <label for="input_PASSWORD">Пароль <span class="star">*</span></label>
                  <input
                    size="30"
                    type="password"
                    id="input_PASSWORD"
                    name="REGISTER[PASSWORD]"
                    required=""
                    value=""
                    autocomplete="off"
                    class="password"
                    aria-required="true"
                  >

                </div>
            </div>
            <div class="form-group">
             <div class="input">
                  <label for="input_CONFIRM_PASSWORD">
                    Подтверждение пароля
                    <span class="star">*</span>
                  </label>
                  <input
                    size="30"
                    type="password"
                    id="input_CONFIRM_PASSWORD"
                    name="REGISTER[CONFIRM_PASSWORD]"
                    required=""
                    value=""
                    autocomplete="off"
                    class="confirm_password"
                    aria-required="true"
                  >
                </div>
            </div>
            <div class="but-r">
              <div class="wrap_md">
                <div class="licence_block filter label_block">
                    <input
                      type="checkbox"
                      id="licenses_register"
                      checked=""
                      name="licenses_register"
                      required=""
                      value="Y"
                      aria-required="true"
                    >
                    <label for="licenses_register">
                      Я согласен на обработку
                      <a
                        title="Политика конфиденциальности"
                        target="_blank"
                        href="/include/licenses/privacy_policy.php"
                      >
                        персональных данных
                      </a>
                    </label>
                  </div>
              </div>
              <button
                class="btn btn-default short"
                type="submit"
                name="register_submit_button1"
                value="Регистрация"
              >
                Зарегистрироваться
              </button>
              <div class="clearboth"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
 </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class HeaderUserFormRegister extends Vue {};
</script>
