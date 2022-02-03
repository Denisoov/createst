<script lang="ts">
import Vue from 'vue'

import { CurrentForm } from '@/types/store/auth'

import AppButton from '@/components/base/AppButton.vue'

export default Vue.extend({
  components: {
    AppButton,
  },
  methods: {
    goToLogIn(): void {
      this.$emit('changeCurrentForm', CurrentForm.LOG_IN)
    },
    signIn(): void {
      this.$store.dispatch('auth/signIn')
    },
  },
})
</script>

<template>
  <div class="form">
    <h2 class="form__title">Вход в систему</h2>
    <v-text-field class="input__text" placeholder="Логин"></v-text-field>
    <v-text-field placeholder="Пароль" type="password"></v-text-field>
    <div class="content-url--registration">
      У меня
      <a @click="goToLogIn">нет аккаунта</a>
    </div>
    <app-button @click="signIn" title="Войти" />
  </div>
</template>

<style lang="scss">
.form {
  @include flex-mix(flex);
  flex-direction: column;

  // задаем шрифт для всех блоков кроме h2
  & > *:not(.form__title) {
    font-family: 'Montserrat-Medium', 'sans-serif';
  }
}
.form__title {
  margin-bottom: 25px;
}
.v-application .primary--text {
  color: rgba(23, 27, 148, 0.42) !important;
  caret-color: rgba(23, 27, 148, 0.42) !important;
}
.content-url--registration {
  text-align: center;
  margin: 5px 0 29px 0;
  font-size: 14px;

  a {
    color: rgba(23, 27, 148);
  }
}
</style>
