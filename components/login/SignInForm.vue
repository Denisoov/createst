<script lang="ts">
import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'

import { CurrentForm } from '@/types/store/login'

import AppButton from '@/components/base/AppButton.vue'

import { required } from '@/helpers/vee-validate-rules'

extend('required', required)

export default Vue.extend({
  components: {
    ValidationObserver,
    ValidationProvider,
    AppButton,
  },
  computed: {
    username: {
      get(): String {
        return this.$store.state.login.signInForm.username
      },
      set(value: String): void {
        this.$store.commit('login/SET_USERNAME_SIGNIN', value)
      },
    },
    password: {
      get(): String {
        return this.$store.state.login.signInForm.password
      },
      set(value: string): void {
        this.$store.commit('login/SET_PASSWORD_SIGNIN', value)
      },
    },
    form(): Vue & { validate: () => boolean } {
      return this.$refs.SignInForm as Vue & { validate: () => boolean }
    },
  },
  methods: {
    goToLogIn(): void {
      this.$emit('changeCurrentForm', CurrentForm.LOG_IN)
    },
    async signIn() {
      const formObserver = await this.form.validate()

      if (formObserver) {
        await this.$store.dispatch('user/signIn', {
          email: this.username,
          password: this.password,
        })

        await this.$router.push('/')
      }
    },
  },
})
</script>

<template>
  <div class="form">
    <h2 class="form__title">Вход в систему</h2>
    <validation-observer ref="SignInForm" v-slot="formSlotProps" tag="div">
      <v-form class="form" :value="formSlotProps.valid" @submit.prevent>
        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required'"
          :placeholder="'Логин'"
        >
          <v-text-field
            class="input__text"
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
          :rules="'required'"
          :placeholder="'Пароль'"
        >
          <v-text-field
            class="input__text"
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
      <a @click="goToLogIn">нет аккаунта</a>
    </div>
    <app-button @click="signIn()" title="Войти" />
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
