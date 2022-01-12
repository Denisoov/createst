<template>
  <v-app>
    <div class="layout">
      <nuxt />
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
</style>
