<script lang="ts">
import Vue from 'vue'

import MenuItem from '@/components/MenuItem.vue'
export default Vue.extend({
  components: {
    MenuItem,
  },
})
</script>

<template>
  <div class="container-grid">
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
  </div>
</template>

<style lang="scss">
.container-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px 30px;
}
</style>
