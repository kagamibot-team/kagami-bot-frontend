<script setup lang="ts">
import { computed } from 'vue';
import { load } from '../common/get_data';
import { SkinPackOpen } from '../types/skin_shop';
import image_map from '../pre_data/image_map';

const data = load<SkinPackOpen>({
  user: {
    name: "小帕"
  },
  dialog: {
    speaker: "服装店主塩",
    face: "通常",
    text: "恭喜哦！"
  },
  image: "./resource/shit.png",
  level: 3,
  skin_award_name: "某小哥",
  skin_name: "大大哥",
});

const dialog_img = computed(() => {
  return image_map[data.value.dialog.speaker][data.value.dialog.face];
});
</script>

<template>
  <div class="main">
    <div class="background">
      <div class="circle-1"></div>
      <div class="circle-2"></div>
    </div>
    <div class="poster">
      <div class="xibao">喜报</div>
    </div>
    <div class="npc-container">
      <img :src="dialog_img" width="900" />
    </div>
    <div class="dialog-container">
      <div class="dialog">
        {{ data.dialog.text }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$screen-width: 800px;
$screen-height: 600px;

.main {
  width: $screen-width;
  height: $screen-height;
  background: radial-gradient(circle at top left, rgb(219, 90, 10), rgb(208, 38, 12));
  position: relative;
}

.background {
  position: absolute;
  width: 800px;
  height: 600px;
  top: 0;
  left: 0;
  overflow: hidden;

  & .circle-1,
  & .circle-2 {
    aspect-ratio: 1;
    border-radius: 50%;
    position: absolute;
    background: radial-gradient(circle at 25% 25%, #e8a3236f, transparent);
  }

  & .circle-1 {
    width: 500px;
    left: -200px;
    top: 220px;
  }

  & .circle-2 {
    width: 400px;
    left: 500px;
    top: -20px;
  }
}

$poster-width: 650px;
$poster-height: 460px;

.poster {
  position: absolute;
  left: ($screen-width - $poster-width) / 2;
  top: ($screen-height - $poster-height) / 2;
  width: $poster-width;
  height: $poster-height;
  background-color: rgb(230, 218, 182);
  filter: drop-shadow(40px 40px 90px rgba(61, 24, 24, 0.757));
  transform: rotate3d(2, -1, 0, 20deg);

  &::before {
    $deco-padding: 14px;
    display: block;
    position: absolute;
    border: solid 5px rgb(137, 25, 8);
    width: $poster-width - $deco-padding * 2;
    height: $poster-height - $deco-padding * 2;
    left: $deco-padding;
    top: $deco-padding;
    box-sizing: border-box;
    content: '';
  }

  &::after {
    $deco-padding: 22px;
    display: block;
    position: absolute;
    border: solid 2px rgb(137, 25, 8);
    width: $poster-width - $deco-padding * 2;
    height: $poster-height - $deco-padding * 2;
    left: $deco-padding;
    top: $deco-padding;
    box-sizing: border-box;
    content: '';
  }

  & .xibao {
    position: absolute;
    width: 3em;
    left: calc($poster-width / 2 - 1.5em);
    font-size: 48px;
    font-family: "阿里妈妈数黑体";
    text-align: center;
    color: rgb(244, 199, 100);
    text-shadow: 0 0 0 5px rgb(137, 25, 8);
  }
}

.npc-container {
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  width: $screen-width;
  height: $screen-height;
  opacity: 0;

  & img {
    position: absolute;
    top: 220px;
    left: 260px;
  }
}

.dialog-container {
  width: $screen-width - 210;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: right;
  padding-bottom: 40px;

  & .dialog {
    background-color: rgb(255, 255, 255);
    margin-left: auto;
    width: max-content;
    padding: 15px 25px;
    font-size: 24px;
    font-family: '霞鹜文楷', var(--font-fallback);
    border-radius: 25px 0 25px 25px;
    box-shadow: 8px 8px 20px #0004;
  }
}
</style>
