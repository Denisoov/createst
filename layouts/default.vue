<script>

import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>
<template>
  <div class="wrapper-app">
    <the-header></the-header>
  </div>
</template>
<style lang="scss">
  .wrapper-app {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
  }
</style>
