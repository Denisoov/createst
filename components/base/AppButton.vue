<template>
  <v-btn v-bind="$attrs" class="app-button" v-on="$listeners">
    <slot />
    <template #loader>
      <slot name="loader" />
    </template>
  </v-btn>
</template>
<style lang="scss" scoped>

    @import '~@/assets/styles/colors.scss';
    .app-button {
        min-height: 40px;
        padding: 0 10px;
        color: $white;
        // background-color: $primary;
        box-shadow: 0 2px 10px rgba(215, 68, 0, 0.4);
    }
</style>