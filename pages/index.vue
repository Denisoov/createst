<script lang="ts">
import Vue from 'vue'

import Menu from '@/components/Menu.vue'

export default Vue.extend({
  layout: 'default',
  components: {
    Menu,
  },
})
</script>

<template>
  <div>
    <h2>Главное меню</h2>
    <section class="wrapper">
      <Menu />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  @include flex-mix(flex);
}
h2 {
  width: fit-content;
}
</style>
