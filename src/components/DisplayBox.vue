<script setup lang="ts">
import { DisplayBoxData } from '../types/inventory.ts'

const props = defineProps<DisplayBoxData>()
</script>
<template>
  <div class="display-box" :style="{ backgroundColor: props.color }">
    <img class="xiaoge-image" :src="props.image" />
    <div class="notation-down" v-if="notation_down" :style="{ color: notation_down_color }">
      {{ props.notation_down }}
    </div>
    <div class="notation-up">{{ props.notation_up }}</div>
    <img class="new-notation" v-if="props.new_overlay" :src="'./resource/new.png'" />
  </div>
</template>
<style scoped>
.display-box {
  width: 175px;
  height: 140px;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.display-box::before {
  width: 175px;
  height: 140px;
  border-radius: 10px;
  border: solid #fff4 4px;
  display: block;
  content: '';
  position: absolute;
  box-sizing: border-box;
}

.display-box .notation-down,
.display-box .notation-up {
  font-family: 'x12y16pxMaruMonica', var(--font-fallback);
  position: absolute;
  width: 175px;
  padding-left: 13px;
  font-size: 48px;
  box-sizing: border-box;
  text-align: left;
}

.display-box .notation-down {
  word-break: break-all;
  text-shadow:
    1.5px 0 0 #000,
    -1.5px 0 0 #000,
    0 1.5px 0 #000,
    0 -1.5px 0 #000;
  color: white;
  top: 84px;
}

.display-box .notation-up {
  word-break: break-all;
  text-shadow:
    1.5px 0 0 #fff,
    -1.5px 0 0 #fff,
    0 1.5px 0 #fff,
    0 -1.5px 0 #fff;
  color: black;
  top: 10px;
}

.display-box .xiaoge-image {
  width: 175px;
  height: 140px;
  position: absolute;
  top: 0;
  left: 0;
}

.display-box .new-notation {
  position: absolute;
  left: 83px;
}
</style>
