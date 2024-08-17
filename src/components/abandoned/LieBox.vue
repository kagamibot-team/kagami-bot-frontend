<script setup>
import DisplayBox from './DisplayBox.vue'

const props = defineProps({
  data: Object
})
</script>

<template>
  <div class="lie-box">
    <DisplayBox :image="props.data.featured_award.image" :color="props.data.featured_award.color" />
    <div class="lie-title">{{ props.data.pack_id }}号猎场</div>
    <svg>
      <text
        y="0"
        alignment-baseline="text-before-edge"
        dominant-baseline="central"
        text-anchor="middle"
        class="lie-status"
        v-if="props.data.unlocked"
      >
        已购买
      </text>
    </svg>
  </div>
</template>

<style scoped>
.lie-box {
  padding: 20px;
  background-color: #ffffff80;
  display: flex;
  flex-direction: column;
}
.lie-title {
  text-align: center;
  margin-top: 10px;
  font-size: 25px;
  font-family: '阿里妈妈数黑体', var(--font-fallback);
  font-weight: bolder;
}
.lie-status {
  margin-top: 30px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
}
</style>
