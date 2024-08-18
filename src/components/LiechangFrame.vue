<script setup lang="ts">
defineProps<{ data: LiechangData }>()
</script>

<template>
  <div class="liechang-interface">
    <img class="background" :src="`./resource/猎场/背景 ${data.selecting}.png`" />
    <!-- lqr 和它的聊天框 -->
    <div class="lqr-chat">
      <img class="chat" :src="'./resource/猎场/对话框.png'" />
      <div class="chat-text">
        <span>{{ data.expression.text }}</span>
      </div>
      <img class="lqr" :src="`./resource/猎场/LQR ${data.expression.face}.png`" />
    </div>
    <!-- end -->
    <div class="title">{{ data.user.name }} 的猎场</div>
    <div class="subject">
      <slot />
    </div>
    <svg class="notation">
      <text x="0" y="0" alignment-baseline="text-before-edge" text-anchor="start">
        你现在有 {{ data.chips }} 薯片。输入
        <tspan alignment-baseline="text-before-edge" text-anchor="start" class="text-inner">
          切换猎场
        </tspan>
        可以换到其他猎场。
      </text>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.liechang-interface {
  position: relative;
  padding-right: 590px;
  padding-bottom: 20px;
  width: fit-content;
  overflow: hidden;

  & > .background {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    top: 0;
    z-index: -1;
  }

  .lqr-chat {
    position: absolute;
    bottom: 1070px;
    right: 1450px;
  }

  .lqr {
    position: absolute;
    width: 1350px;
    top: 20px;
    left: 480px;
  }

  .chat {
    position: absolute;
    opacity: 80%;
    width: 1440px;
    left: -110px;
  }

  .chat-text {
    position: absolute;
    font-family: '霞鹜文楷', var(--font-fallback);
    font-size: 45px;
    text-align: center;
    display: flex;
    width: 1070px;
    height: 385px;
    padding-top: 110px;
    padding-bottom: 110px;
    padding-left: 130px;
    padding-right: 130px;
    left: -110px;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
  }

  & > .title {
    font-family: '阿里妈妈数黑体', 'HarmonyOS Sans SC', var(--font-fallback);
    font-size: 84px;
    font-weight: bolder;
    color: white;
    padding-top: 50px;
    margin-left: 50px;
    text-shadow:
      8px 8px 30px #1e1e2168,
      3px 3px 0 #000000;
    max-width: 1500px;
    word-break: break-all;
  }

  & > .subject {
    display: flex;
    min-width: 850px;
    min-height: 600px;
    margin-top: 350px;
    margin-left: 100px;
  }

  & > .notation {
    margin-top: 20px;
    margin-left: 40px;
    width: 100%;
    height: 50px;
    font-family: 'HarmonyOS Sans SC', var(--font-fallback);
    fill: #ffffff;
    font-weight: bolder;
    font-size: 36px;
    paint-order: stroke;
    stroke: black;
    stroke-width: 4px;
    overflow: visible;

    & .text-inner {
      fill: #82aeec;
    }
  }
}
</style>
