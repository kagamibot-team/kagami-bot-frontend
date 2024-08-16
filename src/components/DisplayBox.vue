<script setup>
defineProps({
  data: Object
})
</script>

<template>
  <div class="displayBox" :style="{ backgroundColor: data.color }">
    <img :src="data.image" />
  </div>
</template>

<style scoped>
.displayBox {
  width: 176px;
  height: 140px;
  border-radius: 10px;
  border: rgba(255, 255, 255, 0.35) 4px solid;
  overflow: hidden;
  margin-top: 20px;
}

.displayBox img {
  height: 100%;
}
</style>
