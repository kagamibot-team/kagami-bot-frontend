<script setup lang="ts">
import { PropType } from 'vue'
import DisplayBox from './DisplayBox.vue'
import { DisplayBoxData } from '../types/inventory'
import FormattedTexts from './FormattedTexts.vue'

const props = defineProps({
  display_box: {
    type: Object as PropType<DisplayBoxData>,
    default: () => {
      return {}
    }
  },
  title1: {
    type: String,
    default: ''
  },
  title2: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="book-box">
    <DisplayBox v-bind="props.display_box" />
    <div class="title title1"><FormattedTexts :text="props.title1" /></div>
    <div class="title title2"><FormattedTexts :text="props.title2" /></div>
  </div>
</template>

<style lang="scss" scoped>
.book-box {
  width: 175px;

  .title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    font-family: 'HarmonyOS Sans SC', var(--font-fallback);
  }

  .title1 {
    margin-top: 8px;
  }

  .title2 {
    opacity: 0.5;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
