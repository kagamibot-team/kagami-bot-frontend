<script setup lang="ts">
const props = defineProps<{ data: LiechangData }>();
const data = props.data;
</script>

<template>
    <div class="liechang-interface">
        <img class="background" :src="'./resource/猎场/背景 1.png'" />
        <img class="chat" :src="'./resource/猎场/对话框.png'" />
        <div class="chat-text">
            <span>{{ data.expression.text }}</span>
        </div>
        <img class="lqr" :src="`./resource/猎场/LQR ${data.expression.face}.png`" />
        <div class="title">{{ data.user.name }} 的猎场</div>
        <div class="subject">
            <slot />
        </div>
        <svg class="notation">
            <text x="0" y="0">
                你现在有 {{ data.chips }} 薯片。输入<tspan class="text-inner">切换猎场</tspan>可以换到其他猎场。
            </text>
        </svg>
    </div>
</template>

<style scoped lang="scss">
.liechang-interface {
    position: relative;
    width: 1600px;
    height: 1200px;

    &>* {
        position: absolute;
    }

    &>.background {
        left: 0;
        top: 0;
    }

    &>.lqr {
        left: 620px;
        top: 160px;
        width: 1350px;
    }

    &>.chat {
        top: 130px;
        left: 140px;

        opacity: 80%;
        width: 90%;
    }

    &>.chat-text {
        top: 130px;
        left: 140px;

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
        align-items: center;
        box-sizing: border-box;
    }

    &>.title {
        font-family: '阿里妈妈数黑体', 'HarmonyOS Sans SC', var(--font-fallback);
        font-size: 84px;
        font-weight: bolder;
        color: white;
        top: 50px;
        left: 50px;
        text-shadow: 8px 8px 30px #1e1e2168, 3px 3px 0 #000000;
    }

    &>.subject {
        top: 490px;
        left: 100px;
    }

    &>.notation {
        left: 50px;
        top: 1140px;
        width: 100%;
        height: 32px;
        font-family: 'HarmonyOS Sans SC', var(--font-fallback);
        fill: #ffffff;
        font-weight: bolder;
        font-size: 36px;
        margin-top: 12px;
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