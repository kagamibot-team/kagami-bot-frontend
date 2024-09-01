<script setup lang="ts">
import default_data from '../pre_data/storage.json'
import BookBoxList from '../components/BookBoxList.vue'
import { StorageData } from '../types/inventory'
import { load } from '../common/get_data'

const data = load<StorageData>(default_data)
</script>

<template>
  <div class="storage-view">
    <h1>{{ data.user.name }} 的 {{ data.title_text }}</h1>
    <div v-for="(item, index) of data.boxes" :key="index">
      <h2 v-if="item.title" :style="{ color: item.title_color || '#EEEEEE' }">{{ item.title }}</h2>
      <BookBoxList :items="item.elements" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.storage-view {
  margin: 0;
  padding: 50px 70px;
  background-color: rgb(134, 129, 128);
  color: white;

  h1 {
    margin: 0;
    font-size: 72px;
    font-family: '荆南波波黑', var(--font-fallback);
  }

  h2 {
    margin: 0;
    margin-top: 50px;
    font-size: 54px;
    font-family: '荆南波波黑', var(--font-fallback);
  }
}
</style>
