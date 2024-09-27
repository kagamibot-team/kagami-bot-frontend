<script setup lang="ts">
import { computed } from 'vue'
import DisplayBox from './DisplayBox.vue'
import ProgressBar from './ProgressBar.vue'
import { SingleLiechang } from '../types/liechang'

const props = defineProps<{ data: SingleLiechang; selecting: boolean }>()
const liechang_name = computed(() => ['废墟猎场', '荒野猎场', '学园猎场'][props.data.pack_id - 1])
const price = [0, 0 , 1000, 3000]

// const data_sum = computed(() => props.data.award_count.map(p => p.sum_up).reduce((p, q) => p + q));
</script>

<template>
  <div
    class="liechang-box"
    :class="[selecting ? 'selecting' : 'unselecting', data.unlocked ? 'unlocked' : 'locked']"
  >
    <h1>{{ data.pack_id }} 号猎场</h1>
    <h2>{{ liechang_name }}</h2>
    <DisplayBox
      :image="data.featured_award.image_url"
      :color="data.featured_award.color"
      notation_down=""
      style="display: inline-block"
      class="display-box"
    />
    <ProgressBar
      v-for="(item, index) in data.award_count"
      :key="index"
      :current="item.collected"
      :max="item.sum_up"
      :color="item.level.color"
      class="progress-bar"
    />
    <div v-if="!data.unlocked" class="locked-hint">
      <div>
        <h1>未解锁!</h1>
        <div class="para">
          <div class="p1">输入指令</div>
          <div class="p2">购买猎场 {{ data.pack_id }}</div>
          <div class="p3">花费 {{ price[props.data.pack_id] }} 薯片解锁</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.liechang-box {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.41);
  border: solid 3px #00000000;
  color: white;
  width: 280px;
  height: 600px;
  margin-right: 20px;
  box-sizing: border-box;
  position: relative;
  padding-top: 45px;
  backdrop-filter: blur(10px);
  border-radius: 30px;

  &.selecting {
    background-color: rgba(110, 94, 62, 0.275);
    box-shadow: 0 0 30px rgba(231, 192, 65, 0.677);
  }

  &.unselecting {
    transform: scale(0.925);
  }

  &.locked {
    background-color: rgba(0, 0, 0, 0.305);
  }

  &.locked > h1,
  &.locked > h2,
  &.locked > .display-box,
  &.locked > .progress-bar {
    filter: saturate(0.5) brightness(0.5) blur(5px);
    opacity: 0.6;
  }

  & > .locked-hint {
    position: absolute;
    top: 0;
    left: 0;
    width: 280px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    font-family: 'HarmonyOS Sans SC', var(--font-fallback);
    text-shadow: 2px 2px 0 #000;

    & .para {
      width: 250px;

      & > .p1 {
        text-align: left;
      }

      & > .p2 {
        color: #82aeec;
        display: block;
        font-size: 36px;
        font-weight: bolder;
      }

      & > .p3 {
        text-align: right;
        margin-bottom: 60px;
      }
    }
  }

  & > h1 {
    font-family: '阿里妈妈数黑体', 'HarmonyOS Sans SC', var(--font-fallback);
    font-size: 48px;
    margin-bottom: 0px;
    margin-top: 25px;
  }

  & > h2 {
    font-family: '阿里妈妈数黑体', 'HarmonyOS Sans SC', var(--font-fallback);
    font-size: 24px;
    text-align: right;
    padding-right: 40px;
    color: #bdbdbd;
    text-shadow: 2px 2px 0 #000;
    margin-top: 0px;
    margin-bottom: 20px;
  }

  & > .display-box {
    margin-bottom: 10px;
  }

  & > .progress-bar {
    width: 80%;
    margin: auto;
    margin-top: 10px;
  }
}
</style>
