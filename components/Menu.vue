<script lang="ts">
import Vue from 'vue'

import MenuItem from '@/components/MenuItem.vue'
export default Vue.extend({
  data: () => {
    return {
      menuItems: [
        {
          title: 'Управление банками',
          description:
            'В этом разделе пользователь имеет возможность создать свой банк тестовых заданий',
          link: '/banks',
        },
        {
          title: 'Список категорий',
          description: 'Список созданных пользователем, категории вопросов',
          link: '/categories',
        },
        {
          title: 'Выгрузка данных',
          description:
            'Раздел предоставляет возможность выгрузить файлом, банк тестовых заданий',
          link: '/unloading',
        },
        {
          title: 'Помощь пользователю',
          description: 'Инструкция и руководство для Пользователей',
          link: '/help',
        },
      ],
    }
  },
  components: {
    MenuItem,
  },
})
</script>

<template>
  <div class="container-grid">
    <MenuItem v-for="(item, idx) in menuItems" :key="idx" :menuItem="item" />
  </div>
</template>

<style lang="scss">
.container-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px 30px;
}
</style>
