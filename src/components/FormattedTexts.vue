<script setup lang="ts">
import { computed } from 'vue'
import { rep_str_to_ids } from '../script/trans_ids'

const props = defineProps({
  text: { type: String, default: '' },
  invert_color: { type: Boolean, default: true },
  offset: { type: String, default: '0' }
})
const splitted_text = computed(() => {
  return rep_str_to_ids(props.text)
})

const svg_style = computed(() => {
  if (props.invert_color) {
    return { filter: 'invert(100%)' }
  }
  return {}
})
</script>

<template>
  <span class="format-text">
    <span v-for="(char, index) in splitted_text" :key="index">
      <span v-if="typeof char == 'string'">{{ char }}</span>
      <img v-else class="inline-svg" :style="svg_style" :src="`http://glyphwiki.org/glyph/${char.code}.svg`"
        :alt="char.ids" />
    </span>
  </span>
</template>

<style scoped>
.inline-svg {
  vertical-align: text-bottom;
  height: 1.1em;
  /* width: 1.1em; */
  display: inline-block;
  color: black;
  transform: translateY(v-bind(offset));

  * {
    fill: white;
  }
}

.inline-svg-text {
  transform: translateY(-0.15em);
  display: inline-block;
}
</style>
