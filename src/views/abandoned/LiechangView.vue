<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import defaultData from '../pre_data/liechang.json'
import LieBox from '../components/LieBox.vue'
const data = ref()

const route = useRoute()

axios
  .get(`../data/${route.query.uuid}/`)
  .then((response) => {
    if (response.status == 200) {
      data.value = response.data
    } else {
      data.value = defaultData
    }
  })
  .catch((error) => {
    data.value = defaultData
  })
</script>

<template>
  <div class="wrapper" v-if="data">
    <div class="top-title">{{ data.user.name }} 的当前猎场：{{ data.selecting }}</div>
    <div class="lie-total"><LieBox :data="data.packs[0]" /></div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  width: fit-content;
  padding: 30px 50px 50px 50px;
  overflow: hidden;
  background-color: rgba(145, 188, 255, 1);
}
.top-title {
  color: #ffffff;
  font-family: '阿里妈妈数黑体', var(--font-fallback);
  font-size: 80px;
  font-weight: bolder;
  width: 1188px;
}
.lie-total {
  display: flex;
}
</style>
