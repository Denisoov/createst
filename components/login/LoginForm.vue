<script lang="ts">
import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { min, max, email, required } from '@/helpers/vee-validate-rules'

import { CurrentForm } from '@/types/store/auth'

import AppButton from '@/components/base/AppButton.vue'

extend('min', min)
extend('max', max)
extend('email', email)
extend('required', required)

export default Vue.extend({
  components: {
    ValidationProvider,
    ValidationObserver,
    AppButton,
  },
  computed: {
    secondNameValue: {
      get(): String {
        return this.$store.state.auth.loginForm.second_name
      },
      set(value: string): void {
        this.$store.commit('auth/SET_SECOND_NAME', value)
      },
    },
    firstNameValue: {
      get(): String {
        return this.$store.state.auth.loginForm.first_name
      },
      set(value: string): void {
        this.$store.commit('auth/SET_FIRST_NAME', value)
      },
    },
    patronymic: {
      get(): String {
        return this.$store.state.auth.loginForm.patronymic
      },
      set(value: string): void {
        this.$store.commit('auth/SET_PATRONYMIC', value)
      },
    },
    username: {
      get(): String {
        return this.$store.state.auth.loginForm.username
      },
      set(value: string): void {
        this.$store.commit('auth/SET_USERNAME', value)
      },
    },
    password: {
      get(): String {
        return this.$store.state.auth.loginForm.password
      },
      set(value: string): void {
        this.$store.commit('auth/SET_PASSWORD', value)
      },
    },
  },
  methods: {
    goToSignIn(): void {
      this.$emit('changeCurrentForm', CurrentForm.SIGN_IN)
    },
  },
})
</script>

<template>
  <div class="form">
    <h2 class="form__title">Давайте сделаем первый шаг</h2>
    <span class="form__preview-text">
      Начать работу быстро и легко, просто заполните информацию ниже
    </span>
    <validation-observer ref="LogInForm" v-slot="formSlotProps" tag="div">
      <v-form class="form" :value="formSlotProps.valid" @submit.prevent>
        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required|min:3'"
          :placeholder="'Фамилия'"
        >
          <v-text-field
            v-model="secondNameValue"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Фамилия"
            type="text"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required|min:2'"
          :placeholder="'Имя'"
        >
          <v-text-field
            v-model="firstNameValue"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Имя"
            type="text"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required|min:4'"
          :placeholder="'Отчество'"
        >
          <v-text-field
            v-model="patronymic"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Отчество"
            type="text"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required|email'"
          :placeholder="'Логин'"
        >
          <v-text-field
            v-model="username"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Логин"
            type="text"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required|min:6|max:36'"
          :placeholder="'Пароль'"
        >
          <v-text-field
            v-model="password"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Пароль"
            type="password"
          ></v-text-field>
        </validation-provider>
      </v-form>
    </validation-observer>
    <div class="content-url--registration">
      У меня
      <a @click="goToSignIn">есть аккаунт</a>
    </div>
    <app-button title="Регистрация" />
  </div>
</template>

<style lang="scss">
.form {
  @include flex-mix(flex);
  flex-direction: column;

  input {
    width: 300px !important;
  }
  // задаем шрифт для всех блоков кроме h2
  & > *:not(.form__title) {
    font-family: 'Montserrat-Medium', 'sans-serif';
  }
}
.form__title {
  margin-bottom: 25px;
}
.form__preview-text {
  width: 300px;
  text-align: center;
  color: $light-gray;
  font-size: 14px;
  margin-bottom: 10px;
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
    text-decoration: underline;
  }
}
</style>
