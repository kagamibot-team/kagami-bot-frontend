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

function replace_img_to_ids(e: Event) {
  let rep_span = document.createElement('span')
  let target = e.target as HTMLImageElement
  rep_span.innerHTML = target.alt
  target.parentNode!.insertBefore(rep_span, target)
  target.remove()
}
</script>

<template>
  <span class="format-text">
    <span v-for="(char, index) in splitted_text" :key="index">
      <br v-if="char == '\n'" />
      <span v-else-if="char == ' '">&nbsp;</span>
      <span v-else-if="typeof char == 'string'" :class="'text-char-' + char">{{ char }}</span>
      <img v-else class="inline-svg" :style="svg_style" :src="`http://glyphwiki.org/glyph/${char.code}.svg`"
        :alt="char.ids" @error="replace_img_to_ids" />
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

.text-char-✿ {
  color: #f272ae;
  text-shadow: 0 0 2px #f3a3c87b;
}
</style>
