<script lang="ts">
import Vue from 'vue'

import LoginForm from '@/components/login/LoginForm.vue'
import SignInForm from '@/components/login/SignInForm.vue'

import { CurrentForm } from '@/types/store/login'

export default Vue.extend({
  layout: 'auth',
  components: {
    LoginForm,
    SignInForm,
  },
  async fetch() {
    if (this.isAuthorized) {
      window.location.replace('/')
    }
  },
  computed: {
    currentForm(): CurrentForm {
      return this.$store.getters['login/currentForm']
    },
    isAuthorized(): string {
      return this.$store.state.user.token
    }
  },
  methods: {
    changeCurrentForm(nextForm: CurrentForm): void {
      this.$store.dispatch('login/changeCurrentForm', nextForm)
    },
  },
  beforeDestroy() {
    this.$store.dispatch('login/clearState')
  },
})
</script>

<template>
  <div class="wrapper-form">
    <div class="side">
      <img src="@/assets/images/logo.png" alt="creaTest" />
    </div>
    <div class="side">
      <transition name="fade" mode="out-in">
        <component
          :is="currentForm"
          @changeCurrentForm="changeCurrentForm"
        ></component>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper-form {
  @include flex-mix(flex);
  min-height: 80vh;
  min-width: 1200px;
  box-shadow: 0 5px 70px rgb(0 0 0 / 8%);
  border-radius: 30px;
  background: linear-gradient(
    270deg,
    transparent 50%,
    $dark-blue 50%,
    $dark-blue
  );

  .side {
    width: 50%;
    height: 80vh;
    @include flex-mix(flex);
  }
}
.fade-enter-active {
  @include transition-easy(0.15s);
}
.fade-enter {
  opacity: 0;
}
.fade-leave-active {
  opacity: 0;
  @include transition-easy(0.15s);
}
</style>
