<script lang="ts">
import Vue from 'vue'

import TheHeader from '@/components/TheHeader.vue'

export default Vue.extend({
  components: {
    TheHeader
  }
})
</script>
<template>
  <div class="layout">
    <the-header></the-header>
    <div class="page">
      <nuxt />
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .layout {
    width: 100%;
    height: 100%;
    display: block;

    .page {
      max-width: 1200px;
      height: initial;
      min-height: 800px;
      padding: 30px;
      margin: 100px auto 0 auto;
      box-shadow: 0 6px 37px rgb(0 0 0 / 10%);
      border-radius: 15px;
      background: #f9faff;
    }
  }

</style>
