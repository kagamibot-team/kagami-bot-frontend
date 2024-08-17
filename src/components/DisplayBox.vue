<script setup lang="ts">
const props = defineProps({
  image: String,
  color: String,
  notation_down: { type: String, default: '' },
  notation_up: { type: String, default: '' },
  new_overlay: Boolean
})
</script>
<template>
  <div class="display-box" :style="{ backgroundColor: props.color }">
    <img class="xiaoge-image" :src="props.image" />
    <div class="notation-down" v-if="notation_down">{{ props.notation_down }}</div>
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
  font-family: 'x12y12pxMaruMinya', var(--font-fallback);
  position: absolute;
  width: 175px;
  padding-left: 13px;
  font-size: 36px;
  box-sizing: border-box;
  color: white;
  text-shadow: 3px 3px 0 #000;
}

.display-box .notation-down {
  top: 90px;
}

.display-box .notation-up {
  top: 10px;
}

.display-box .xiaoge-image {
  width: 175px;
  height: 140px;
  position: absolute;
}

.display-box .new-notation {
  position: absolute;
  left: 83px;
}
</style>
