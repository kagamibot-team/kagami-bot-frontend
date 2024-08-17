<script setup lang="ts">
import DisplayBox from './DisplayBox.vue'

const props = withDefaults(defineProps<{
  data: {
    count?: number,
    info: AwardInfo,
    is_new?: boolean
  },
  is_opacity?: boolean,
}>(), {
  data: () => {
    return {
      "info": {
        "description": "如果持续遇到此问题，请联系开发组。",
        "display_name": "你不该在这里。",
        "color": "rgb(198, 193, 191)",
        "image": "./resource/shit.png",
        "level": { "display_name": "★★★★★", "color": "rgb(192, 232, 174)" }
      },
      "count": 2
    }
  },
  is_opacity: false
})

const color = props.is_opacity ? '#9B969099' : '#9b9690'
const count = props.data.count ? '+' + props.data.count : ""
</script>

<template>
  <div class="outbox">
    <DisplayBox :image="data.info.image" :color="data.info.color" :notation_down="count || '+1'"
      :new_overlay="data.is_new" />
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
