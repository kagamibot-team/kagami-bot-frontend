<script setup>
import DisplayBox from './DisplayBox.vue'

const props = defineProps({
  data: Object,
  is_opacity: Boolean || false
})

const color = props.is_opacity ? '#9B969099' : '#9b9690'
const count = props.data.count ? '+' + props.data.count : null
</script>

<template>
  <div class="outbox">
    <DisplayBox
      :image="data.info.image"
      :color="data.info.color"
      :notation_down="count"
      :new_overlay="data.is_new"
    />
    <div class="textbox">
      <div class="rightTitle">{{ props.data.info.display_name }}</div>
      <div class="rightDescription">{{ props.data.info.description }}</div>
      <div class="rightStar" :style="{ color: props.data.info.level.color }">
        {{ props.data.info.level.display_name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.outbox {
  width: 800px;
  background-color: v-bind('color');
  display: flex;
  padding: 18px;
  position: relative;
  margin-top: 25px;
}

.textbox {
  margin-left: 15px;
}

.rightDescription {
  width: 567px;
  color: #ffffff;
  white-space: pre-wrap;
  font-family: '凤凰点阵体 16px', 'Maple UI', var(--font-fallback);
  font-size: 16px;
  line-height: 24px;
}

.rightTitle {
  width: 400px;
  font-size: 43px;
  margin-bottom: 8px;
  color: #ffffff;
  font-family: '荆南俊俊体', '阿里妈妈数黑体', 'Maple UI', var(--font-fallback);
}

.rightStar {
  width: 400px;
  font-size: 38px;
  text-align: right;
  font-family: 'Maple UI', var(--font-fallback);
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
