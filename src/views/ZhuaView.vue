<script setup>
import { ref } from 'vue'
import CatchBox from '../components/CatchBox.vue'

import axios from 'axios'
import { useRoute } from 'vue-router'
import defaultData from '../pre_data/zhua.json'
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
    <div class="top-title">{{ data.name }} 的一抓</div>
    <div class="side-title">
      本次获得
      {{ data.meta.get_chip }} 薯片，目前共有 {{ data.meta.own_chip }} 薯片。<br />剩余次数：{{
        data.meta.remain_time
      }}，距下次次数恢复还要{{ data.meta.need_time }}。
    </div>
    <CatchBox v-for="(item, index) in data.catchs" :data="item" :key="index" />
  </div>
</template>

<style scoped>
.wrapper {
  width: fit-content;
  padding: 60px 80px 80px 80px;
  background-color: #eeebe3;
}

.top-title {
  color: #63605c;
  /* '荆南波波黑' */
  font-family: '阿里妈妈数黑体', 'HarmonyOS Sans SC', var(--font-fallback);
  font-size: 96px;
  font-weight: bolder;
  width: 800px;
}

.side-title {
  color: #9b9690;
  font-family: '阿里妈妈数黑体', var(--font-fallback);
  font-size: 28px;
  font-weight: bold;
  width: 800px;
}
</style>
