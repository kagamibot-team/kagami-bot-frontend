<script setup lang="ts">
import { PropType } from 'vue'
import DisplayBoxSmall from './DisplayBoxSmall.vue'
import { DisplayBoxData } from '../types/inventory';

const props = defineProps({
  display_box: {
    type: Object as PropType<DisplayBoxData>,
    default: () => { return {} }
  },
  title1: {
    type: String,
    default: '',
  },
  title2: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="book-box">
    <DisplayBoxSmall v-bind="props.display_box" />
    <div class="title title1">{{ props.title1 }}</div>
    <div class="title title2">{{ props.title2 }}</div>
  </div>
</template>

<style lang="scss" scoped>
.book-box {
  width: min-content;

  .title {
    text-align: center;
    font-size: 16px;
    line-height: 120%;
    font-weight: bold;
    font-family: 'HarmonyOS Sans SC', var(--font-fallback);
  }

  .title1 {
    margin-top: 4px;
  }

  .title2 {
    opacity: .5;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
