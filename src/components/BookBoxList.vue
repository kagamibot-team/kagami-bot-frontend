<script setup lang="ts">
import { BookBoxData } from '../types/inventory';
import BookBox from './BookBox.vue'

defineProps({
  items: {
    type: Array<BookBoxData>,
    default: [],
  }
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
