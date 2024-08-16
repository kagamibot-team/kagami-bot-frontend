<script setup>
defineProps({
  data: Object
})
</script>

<template>
  <div class="rightDescription">{{ data.info.description }}</div>
  <div class="rightTitle">{{ data.info.display_name }}</div>
  <div class="rightStar" :style="data.info.level.color">{{ data.info.level.display_name }}</div>
</template>

<style scoped>
.rightDescription {
  width: 567px;
  color: #ffffff;
  font-family: '凤凰点阵体 16px', 'Maple UI';
  font-size: 16px;
}

.rightTitle {
  font-size: 43px;
  color: #ffffff;
  font-family: '荆南俊俊体', '阿里妈妈数黑体', 'Maple UI';
}

.rightStar {
  width: 400px;
  font-size: 43px;
  text-align: right;
  font-family: 'Maple UI';
}
</style>
