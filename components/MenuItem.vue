<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    menuItem: {
      required: true,
    },
  },
  methods: {
    goToPage(link: String): void {
      window.location.replace(link.toString())
    },
  },
})
</script>

<template>
  <section @click="goToPage(menuItem.link)" class="card-item">
    <h3 class="card-item__title">{{ menuItem.title }}</h3>
    <p class="card-item__description">
      {{ menuItem.description }}
    </p>
  </section>
</template>

<style lang="scss">
.card-item {
  width: 300px;
  height: inherit;
  min-height: 152px;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 4px 0px 25px rgba(0, 0, 0, 0.1);
  user-select: none;
  @include transition-easy(0.16s);

  &:hover {
    cursor: pointer;
    @include transition-easy(0.16s);
    background: #eef1ff;
    transform: translateY(-5px);
  }
  &__title {
    margin-bottom: 15px;
  }
  &__description {
    font-size: 14px;
    color: #656565;
  }
}
</style>
