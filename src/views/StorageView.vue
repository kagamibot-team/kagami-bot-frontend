<script setup lang="ts">
import { ref } from 'vue'
import default_data from '../pre_data/storage.json'
import BookBoxList from '../components/BookBoxList.vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const data = ref<StorageData>(default_data)
const route = useRoute()

axios
  .get(`../data/${route.query.uuid}`)
  .then((response) => {
    if (response.status == 200) {
      data.value = response.data
    } else {
      data.value = default_data
    }
  })
  .catch((_) => {
    data.value = default_data
  })
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
