<script setup lang="ts">
import { computed, ref } from 'vue'
import CatchBox from '../components/CatchBox.vue'
import DisplayBox from '../components/DisplayBox.vue'
import RecipeBackground from '../components/RecipeBackground.vue'
import Avatar from '../components/Avatar.vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import defaultData from '../pre_data/recipe.json'

import _answers from '../pre_data/mokie/answers.json'

const data = ref<MergeData>(defaultData)
const route = useRoute()

type level = 0 | 1 | 2 | 3 | 4 | 5
const answers: {
  normal: {
    [inp: number]: {
      [out: number]: Array<string>
    }
  },
  xiaohua: Array<string>,
  love: Array<string>,
  zero: Array<string>
} = _answers;

const ymh = computed<YMHMessage>(() => (v => {
  let spl1 = v.substring(0, v.indexOf("："));
  let speaker = spl1.substring(0, spl1.indexOf(" "));
  let face = spl1.substring(spl1.indexOf(" ") + 1);
  let text = v.substring(v.indexOf("：") + 1);

  return {
    speaker: speaker,
    face: face,
    text: text,
  }
})((() => {
  var pool: Array<string>;

  if (data.value.output.info.aid == 9) {
    pool = answers.xiaohua;
  } else if ([34, 98].indexOf(data.value.output.info.aid) != -1) {
    pool = answers.love;
  } else {
    let max_input = Math.max(...data.value.inputs.map(i => i.level.lid));
    let output = data.value.output.info.level.lid;
    let _p = answers.normal[max_input];
    pool = _p[output];
  }

  if (pool.length == 0) {
    return "榆木华 黑化：……";
  }
  return pool[Math.floor(Math.random() * pool.length)];
})()));

const notation = computed(() => "+" + data.value.output.count);

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
    <div class="top-title">
      <Avatar :qqid="data.user.qqid" style="margin-right: 30px;" />{{ data.user.name }} 的合成材料：
    </div>
    <div class="total">
      <div class="left-list">
        <DisplayBox v-for="(item, index) in data.inputs" :image="item.image_url" :color="item.color" :key="index" />
      </div>
      <div class="right-list">
        <div class="ymh-text">
          <div class="ymh-intext">{{ ymh.text }}</div>
          <img class="ymh-textbox" src="../assets/image/mokie/榆木华对话框.png" />
        </div>
        <div class="merge-title">合成结果：{{ data.meta.status }}</div>
        <CatchBox color_on_notation :info="data.output.info" :is_new="data.output.is_new" :notation="notation"
          :is_opacity="true" />
        <svg class="merge-side-title">
          <text x="0" y="0" alignment-baseline="text-before-edge" text-anchor="start">
            本次合成花费了你 {{ data.meta.cost_chip }} 薯片，你还有 {{ data.meta.own_chip }} 薯片。
          </text>
        </svg>
      </div>
      <img class="ymh-figure" :src="`./resource/mokie/${ymh.speaker} 表情 ${ymh.face}.png`" />
    </div>
    <RecipeBackground :is_strange="data.meta.is_strange" :level="data.output.info.level.lid" />
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  width: fit-content;
  padding: 60px 80px 80px 80px;
  overflow: hidden;
}

.ymh-text {
  position: relative;
  height: 270px;
}

.ymh-intext {
  position: relative;
  font-size: 35px;
  font-family: '荆南波波黑', var(--font-fallback);
  color: #333333;
  width: 410px;
  height: 200px;
  left: -30px;
  top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
}

.ymh-textbox {
  position: absolute;
  top: -150px;
  left: -350px;
  z-index: 0;
}

.ymh-figure {
  position: absolute;
  width: 866px;
  right: -170px;
  top: -100px;
  z-index: -1;
}

.left-list {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  gap: 35px;
}

.right-list {
  margin-top: 10px;
  margin-left: 100px;
}

.total {
  position: relative;
  display: flex;
  z-index: 0;
}

.top-title {
  color: #ffffff;
  font-family: 'HarmonyOS Sans SC', var(--font-fallback);
  font-size: 80px;
  font-weight: bolder;
  width: 1188px;
  word-break: break-all;
}

.side-title {
  color: #9b9690;
  font-family: '阿里妈妈数黑体', var(--font-fallback);
  font-size: 28px;
  font-weight: bold;
  width: 800px;
}

.merge-title {
  margin-bottom: 10px;
  font-size: 60px;
  font-family: 'HarmonyOS Sans SC', var(--font-fallback);
  color: #ffffff;
  font-weight: bolder;
}

.merge-side-title {
  width: 100%;
  height: 32px;
  font-family: 'HarmonyOS Sans SC', var(--font-fallback);
  fill: #ffffff;
  font-weight: bolder;
  font-size: 24px;
  margin-top: 12px;
  paint-order: stroke;
  stroke: black;
  stroke-width: 4px;
  overflow: visible;
}
</style>
