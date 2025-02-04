<script setup lang="ts">
import { computed } from 'vue';
import { load } from '../common/get_data';
import { SkinPackOpen } from '../types/skin_shop';
import image_map from '../pre_data/image_map';

const data = load<SkinPackOpen>({
  user: {
    name: "一个名字很长的很长很长先生啊啊啊1111你在听我说话吗"
  },
  dialog: {
    // speaker: "服装店主塩",
    speaker: "服装学徒驹草",
    face: "通常",
    text: "对话没有传进来诶……"
  },
  image: "./resource/shit.png",
  level: 2,
  skin_award_name: "某小哥",
  skin_name: "皮肤名字",
  biscuit_after: 100,
  biscuit_return: 10,
  do_user_have_before: true,
});

const dialog_img = computed(() => {
  return image_map[data.value.dialog.speaker][data.value.dialog.face];
});
</script>

<template>
  <div class="main" :class="`main-${data.level}`">
    <div class="background">
      <div class="circle-1"></div>
      <div class="circle-2"></div>
    </div>
    <div class="poster">
      <div class="frame-1"></div>
      <div class="frame-2"></div>
      <div class="xibao">喜报</div>
      <div class="lines">
        <p class="line-1">
          <span class="name">{{ data.user.name }}</span> 同学：
        </p>
        <p class="line-2">恭喜你！</p>
        <p class="line-3">
          你刚才打开了皮肤盲盒，<span v-if="data.do_user_have_before" class="chongfu">又</span>得到了 <u>{{ data.skin_award_name }}</u> 的
          <span v-for="index in data.level" :key="index" class="heart"></span>
          {{ data.level }} 心的皮肤，<span class="chongfu">
            得到了 {{ data.biscuit_return }} 饼干。
          </span>被称作：
        </p>
        <div class="xgname">{{ data.skin_name }}</div>
        <p class="line-2">特发此报，以资鼓励。</p>
      </div>
      <div class="poster-overlay"></div>
    </div>
    <div class="xg-img-container">
      <svg class="wait-what-arrow" view-box="0 0 200 200">
        <defs>
          <marker id='head' orient="auto" markerWidth='4' markerHeight='8' refX='2' refY='1.5'>
            <path d='M0,0 V3 L4,1.5 Z' fill="red" />
          </marker>
        </defs>
        <line stroke="red" marker-end='url(#head)' stroke-width="6" x1="30" y1="190" x2="140" y2="110" />
        <ellipse cx="220" cy="70" rx="100" ry="50" fill="transparent" stroke="red" stroke-width="4" />
      </svg>
      <div class="img">
        <img :src="data.image" />
      </div>
    </div>
    <div class="npc-container" :class="data.dialog.speaker == '服装学徒驹草' ? `npc-container-cao` : ''">
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
@use 'sass:math';
@use 'sass:color';

$screen-width: 800px;
$screen-height: 600px;

@mixin kagami-themes($level, $color-primary) {
  $color-text: color.adjust($color-primary, $lightness: -30%, $saturation: -10%);
  $color-bright-1: color.adjust($color-primary, $whiteness: 10%);
  $color-bright-2: color.adjust($color-primary, $whiteness: 20%);
  $color-bright-3: color.adjust($color-primary, $whiteness: 30%);
  $color-bright-8: color.adjust($color-primary, $whiteness: 80%);
  $color-dark-drop: color.adjust($color-primary, $lightness: -20%);
  $color-shadow-tint: color.adjust($color-primary, $lightness: -40%, $saturation: -40%, $alpha: -0.2);
  $color-shadow-tint-2: color.adjust($color-primary, $lightness: -40%, $saturation: -40%, $alpha: -0.6);

  .main-#{$level} {
    &.main {
      width: $screen-width;
      height: $screen-height;
      background: radial-gradient(circle at top left, $color-bright-3, $color-primary);
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
        background: radial-gradient(circle at 25% 25%, $color-bright-3, transparent);
        opacity: .7;
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
    $poster-foreground: $color-text;
    $poster-background: $color-bright-8;

    .poster {
      position: absolute;
      left: math.div($screen-width - $poster-width, 2);
      top: math.div($screen-height - $poster-height, 2) - 30px;
      width: $poster-width;
      height: $poster-height;
      background-color: $poster-background;
      filter: drop-shadow(40px 40px 90px $color-shadow-tint);
      transform: rotate3d(2, -1, 0, 20deg);
      user-select: none;

      & .frame-1 {
        $deco-padding: 14px;
        display: block;
        position: absolute;
        border: solid 5px $poster-foreground;
        width: $poster-width - $deco-padding * 2;
        height: $poster-height - $deco-padding * 2;
        left: $deco-padding;
        top: $deco-padding;
        box-sizing: border-box;
        content: '';
      }

      & .frame-2 {
        $deco-padding: 22px;
        display: block;
        position: absolute;
        border: solid 2px $poster-foreground;
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
        top: 30px;
        font-size: 54px;
        font-family: "阿里妈妈数黑体";
        text-align: center;
        color: $poster-foreground;
      }

      & .lines {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 60px;
        padding-top: 90px;
        font-family: 'HarmonyOS Sans SC', var(--font-fallback);
        color: $poster-foreground;
        font-size: 20px;
        box-sizing: border-box;
        font-weight: 500;

        & .line-1 .name {
          padding: 0 16px;
          position: relative;
          display: inline-block;
          font-family: '霞鹜文楷', var(--font-fallback);
          font-size: larger;
          color: black;
          max-width: 300px;
          height: 1.1em;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;

          &::before {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            background-color: $poster-foreground;
            height: 2px;
            left: 0;
            bottom: 0;
          }
        }

        & .line-2 {
          text-indent: 2em;
        }

        & .line-3 {
          text-indent: 2em;

          & .heart {
            mask: url("../assets/heart.svg") no-repeat center;
            mask-size: contain;
            width: .8em;
            aspect-ratio: 1;
            display: inline-block;
            background-color: $poster-foreground;
          }

          & .chongfu {
            background-color: $color-text;
            color: $poster-background;
          }
        }

        & .xgname {
          text-align: center;
          font-size: 54px;
          font-family: maokenzajin, '阿里妈妈数黑体', 'Maple UI', var(--font-fallback);
          width: max-content;
          margin: 0 auto;
          font-weight: normal;
          color: $color-bright-1;
          text-shadow: 2px 2px 0 $color-dark-drop;
        }
      }

      & .poster-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: linear-gradient(-30deg, #ffffff00 30%, #ffffff95);
      }
    }

    .npc-container {
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      width: $screen-width;
      height: $screen-height;
      // opacity: 0;
      pointer-events: none;

      & img {
        position: absolute;
        top: 120px;
        left: 250px;
      }

      &.npc-container-cao img {
        top: 60px;
      }
    }

    .xg-img-container {
      z-index: 4;
      position: absolute;
      left: 0;
      bottom: 0;

      .wait-what-arrow {
        position: absolute;
        left: 175px;
        bottom: 30px;
        height: 300px;
        width: 500px;
      }

      & .img {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 2;
        aspect-ratio: 5 / 4;
        width: 175px;
        overflow: hidden;
        border: solid 6px red;
        margin: 20px;
        background-color: $color-primary;

        & img {
          width: 100%;
        }
      }
    }

    .dialog-container {
      width: $screen-width - 210;
      position: absolute;
      top: 420px;
      right: 140px;
      z-index: 5;
      padding-bottom: 40px;
      pointer-events: none;

      & .dialog {
        $border: $color-bright-1;

        background-color: rgb(255, 255, 255);
        border: solid 4px $border;
        color: rgb(0, 0, 0);
        margin-left: auto;
        text-align: justify;
        text-align-last: left;
        width: max-content;
        max-width: 390px;
        padding: 15px 25px;
        font-size: 24px;
        font-family: '霞鹜文楷', var(--font-fallback);
        border-radius: 25px 0 25px 25px;
        box-shadow:
          1px 1px 0 $border,
          2px 2px 0 $border,
          3px 3px 0 $border,
          4px 4px 0 $border,
          5px 5px 0 $border,
          6px 6px 0 $border,
          7px 7px 0 $border,
          8px 8px 0 $border,
          8px 8px 20px $color-shadow-tint-2,
          4px 4px 10px $color-shadow-tint,
        ;
      }
    }
  }
}

@include kagami-themes(1, #63d256);
@include kagami-themes(2, #6F93E7);
@include kagami-themes(3, #996FE0);
@include kagami-themes(4, #f4bd4f);
</style>
