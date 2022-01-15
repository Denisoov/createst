<script lang="ts">
import Vue from 'vue'

import IconHome from '@/components/icons/IconHome.vue'
import IconQuestion from '@/components/icons/IconQuestion.vue'
import IconUser from '@/components/icons/IconUser.vue'

export default Vue.extend({
  components: {
    IconHome,
    IconQuestion,
    IconUser,
  },
})
</script>

<template>
  <div class="the-header">
    <div class="header-bar">
      <div></div>
      <ul class="menu">
        <li>
          <icon-home />
        </li>
        <li>
          <icon-question />
        </li>
        <li>
          <icon-user />
        </li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.the-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  @include flex-mix(flex, center, flex-start);
  z-index: -55;
  font-family: 'Montserrat-Medium';
  background: linear-gradient(180deg, #171b94 0%, #242ace 100%);
  color: #f3f3f3;
}
.header-bar {
  width: 100%;
  height: 100px;
  max-width: 1980px;
  @include flex-mix(flex, space-between);
  align-items: center;

  .menu {
    @include flex-mix(flex);
    margin: 0;
    list-style-type: none;
    width: initial;
    height: 34px;

    li {
      display: inline-block;
      width: initial;
      margin-right: 30px;
      height: 31px;
    }
  }
}
</style>
