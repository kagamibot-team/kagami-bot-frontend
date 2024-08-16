<script setup>
import { ref } from 'vue'
import CatchBox from '../components/CatchBox.vue'
import DisplayBox from '../components/DisplayBox.vue'
import RecipeBackground from '../components/RecipeBackground.vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import defaultData from '../pre_data/recipe.json'
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
    <div class="top-title">{{ data.name }} 的合成材料</div>
    <div class="total">
      <div class="left-list">
        <DisplayBox v-for="(item, index) in data.inputs" :data="item" :key="index" />
      </div>
      <div class="right-list">
        <div class="merge-title">合成结果：{{ data.meta.status }}</div>
        <CatchBox :data="data.output" :is_opacity="true" />
        <div class="merge-side-title">
          本次合成花费了你 {{ data.meta.cost_chip }} 薯片，你还有 {{ data.meta.own_chip }} 薯片。
        </div>
      </div>
    </div>
    <RecipeBackground :is_strange="data.meta.is_strange" :level="data.output.info.level.lid" />
  </div>
</template>

<style scoped>
.wrapper {
  width: fit-content;
  padding: 60px 80px 80px 80px;
  overflow: hidden;
}
.left-list {
  margin-top: 100px;
}
.right-list {
  margin-top: 270px;
  margin-left: 100px;
}
.total {
  display: flex;
}
.top-title {
  color: #ffffff;
  font-family: 'HarmonyOS Sans SC', var(--font-fallback);
  font-size: 80px;
  font-weight: bolder;
  width: 1188px;
}

.side-title {
  color: #9b9690;
  font-family: '阿里妈妈数黑体', var(--font-fallback);
  font-size: 28px;
  font-weight: bold;
  width: 800px;
}

.merge-title {
  font-size: 60px;
  font-family: 'HarmonyOS Sans SC', var(--font-fallback);
  color: #ffffff;
  font-weight: bolder;
}

.merge-side-title {
  font-family: 'HarmonyOS Sans SC', var(--font-fallback);
  color: #ffffff;
  font-weight: bolder;
  font-size: 24px;
  margin-top: 12px;
  -webkit-text-stroke: 0.8px #000;
}
</style>
