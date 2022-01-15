<template>
  <button v-bind="$attrs" class="app-button" v-on="$listeners">
    {{ $attrs.title }}
  </button>
</template>
<style lang="scss" scoped>
.app-button {
  background: #2529b4;
  color: #fff;
  padding: 16px 90px 16px 90px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.15s all ease-in-out;

  &:active {
    transition: 0.15s all ease-in-out;
    transform: translate(0px, 3px);
    -webkit-transform: translate(0px, 3px);
    box-shadow: 0px 5px 0px 0px;
  }
}
</style>
