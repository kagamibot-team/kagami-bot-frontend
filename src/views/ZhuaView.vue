<script setup>
import { ref } from 'vue'
import CatchBox from '../components/CatchBox.vue'

const data = ref({
  title: '小哥 的一抓',
  details: '本次获得2薯片，目前共有2薯片。\n剩余次数：2/2，距下次次数恢复还要2年。',
  catchs: [
    {
      info: {
        description: '小哥是小哥，大哥是大哥，大哥不是小哥，小哥不是大哥。',
        display_name: '小哥',
        level: {
          display_name: '星星',
          color: 'black'
        }
      }
    }
  ]
})
</script>

<template>
  <div class="top-title">{{ data.title }}</div>
  <div class="side-title">{{ data.details }}</div>
  <CatchBox v-for="(item, index) in data.catchs" :data="item" :key="index" />
</template>

<style scoped>
.top-title {
  color: #63605c;
  font-family: '荆南波波黑', 'HarmonyOS Sans SC';
  font-size: 96px;
  font-weight: bolder;
  width: 800px;
}
.side-title {
  color: #9b9690;
  font-family: '阿里妈妈数黑体';
  font-size: 28px;
  font-weight: bold;
  width: 800px;
}
</style>
