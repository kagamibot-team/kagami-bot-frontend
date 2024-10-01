<script setup lang="ts">
defineProps({
  is_strange: { type: Boolean, default: false },
  level: { type: Number, default: 1 }
})
const color = ['#000000', '#2a68bc', '#2a68bc', '#2a68bc', '#7E2FCE', '#7E2FCE']
</script>

<template>
  <div class="recipe-background">
    <div v-if="!is_strange" class="ellipse1" />
    <div v-if="!is_strange" class="ellipse2" />
    <div v-if="!is_strange" class="ellipse3" />
  </div>
</template>

<style scoped>
.recipe-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: v-bind('color[level]');
}

.ellipse1 {
  position: absolute;
  top: -1200px;
  left: -1200px;
  width: 2400px;
  height: 2400px;
  border-radius: 1200px;
  background-color: rgba(255, 255, 255, 0.1);
}

.ellipse2 {
  position: absolute;
  top: -900px;
  left: -900px;
  width: 1800px;
  height: 1800px;
  border-radius: 900px;
  background-color: rgba(255, 255, 255, 0.1);
}

.ellipse3 {
  position: absolute;
  top: -600px;
  left: -600px;
  width: 1200px;
  height: 1200px;
  border-radius: 600px;
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
