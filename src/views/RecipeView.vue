<script setup lang="ts">
import { computed } from 'vue'

import CatchBox from '../components/CatchBox.vue'
import DisplayBox from '../components/DisplayBox.vue'
import RecipeBackground from '../components/RecipeBackground.vue'

import defaultData from '../pre_data/recipe.json'
import { load } from '../common/get_data'
import { MergeData } from '../types/recipe'
import { DialogueMessage } from '../types/common'
import image_map from '../pre_data/image_map'

const data = load<MergeData>(defaultData)

// 下面是计算需要什么对话的逻辑，是从后端搬到前端的
const dialogue = computed<DialogueMessage>(() => {
  return data.value.dialog ?? {
    face: "吐舌",
    speaker: "纸板华",
    text: "后端没有传入对话数据，请联系 PT 修复"
  }
})
</script>

<template>
  <div v-if="data" class="wrapper">
    <div class="top-title">
      <!--<Avatar :qqid="data.user.qqid" style="margin-right: 30px;" />-->{{ data.meta?.user.name }}
      的合成：
    </div>
    <div class="total">
      <div class="left-list">
        <DisplayBox v-for="(item, index) in data.inputs" :key="index" :image="item.image_url" :color="item.color"
          :notation_down="'→' + data.after_storages[index]" />
      </div>
      <div class="right-list">
        <div class="dialogue-text" :class="{
          'hidden': dialogue.speaker == '纸板华'
        }">
          <div class="dialogue-intext">{{ dialogue.text }}</div>
          <img class="dialogue-textbox" :src="`./resource/合成/对话框.png`" />
        </div>
        <div class="merge-title">合成结果：{{ data.meta?.status }}</div>
        <CatchBox color_on_notation :info="data.output.info" :is_new="data.output.is_new"
          :notation="'+' + data.output.count" :is_opacity="true" />
        <svg class="merge-side-title">
          <text x="0" y="0" alignment-baseline="text-before-edge" text-anchor="start">
            本次合成花费了你 {{ data.meta?.cost_chip }} 薯片，你还有
            {{ data.meta?.own_chip }} 薯片。
          </text>
        </svg>
      </div>
      <img class="dialogue-figure" :class="{
        'dialogue-figure-aquko': dialogue.speaker == '研究员水瓶子',
        'dialogue-figure-paper': dialogue.speaker == '纸板华'
      }" :src="image_map[dialogue.speaker][dialogue.face]" />
    </div>
    <RecipeBackground :is_strange="data.meta?.is_strange" :level="data.output.info.level.lid" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: fit-content;
  padding: 60px 80px 80px 80px;
  overflow: hidden;
}

.dialogue-text {
  position: relative;
  height: 270px;

  &.hidden {
    opacity: 0;
  }
}

.dialogue-intext {
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

.dialogue-textbox {
  position: absolute;
  top: -150px;
  left: -350px;
  z-index: 0;
}

.dialogue-figure {
  position: absolute;
  width: 1600px;
  right: -580px;
  top: -220px;
  z-index: -1;
}

.dialogue-figure-aquko {
  top: -320px;
}

.dialogue-figure-paper {
  transform: scale(.4);
  top: -780px;
  right: -550px;
  filter: drop-shadow(0 6rem 10rem rgba(0, 0, 0, 0.405));
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
