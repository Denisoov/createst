<script lang="ts">
import Vue from 'vue'

import LoginForm from '@/components/login/LoginForm.vue'

export default Vue.extend({
  components: {
    LoginForm
  }
})
</script>

<template>
  <v-app>
    <div class="layout">
      <div class="wrapper-form">
        <div class="side cover">

        </div>
        <div class="side form">
          <component :is="'LoginForm'"></component>
        </div>
      </div>
    </div>
  </v-app>
</template>

<style lang="scss" scoped>
  .layout {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(
      270deg, 
      transparent 50%, 
      #171B94 50%, 
      #171B94);
  }
  .wrapper-form {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    min-width: 1200px;
    box-shadow: 0 5px 70px rgb(0 0 0 / 8%);
    border-radius: 30px;
    background: linear-gradient(
      270deg, 
      transparent 50%, 
      #2529B4 50%, 
      #2529B4);

    .side {
      width: 50%;
      height: 80vh;
    }
    .cover {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
</style>
