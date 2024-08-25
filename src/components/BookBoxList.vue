<script setup lang="ts">
import BookBox from './BookBox.vue'
import { BookBoxData } from '../types/inventory';

defineProps({
  items: Array<BookBoxData>
})
</script>

<template>
  <div>
    <div class="book-box-list">
      <BookBox v-for="(item, index) in items" v-bind="item" :key="index" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.book-box-list {
  display: flex;
  flex-wrap: wrap;
  max-width: 1560px;
}
</style>
