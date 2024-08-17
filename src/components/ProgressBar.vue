<script setup lang="ts">
const props = defineProps<{ current: number, max: number, color: string }>();
</script>
<template>
    <div class="container">
        <div class="rect" :style="{
            backgroundColor: props.color ?? 'white',
            gridTemplateColumns: `${props.current / props.max}fr ${1 - props.current / props.max}fr`
        }">
            <div class="rect-left"></div>
            <div class="rect-right"></div>
        </div>
        <div class="text">
            <span class="current">{{ props.current }}</span>
            <span class="slash">/</span>
            <span class="max">{{ props.max }}</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 80px;
    align-items: center;

    &>.rect {
        background-color: white;
        height: 10px;
        display: grid;
        position: relative;

        &::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            background-color: inherit;
            filter: brightness(0.15) saturate(0.5);
            left: 2px;
            top: 2px;
            opacity: 0.3;
        }

        &>.rect-left {
            background-color: inherit;
            filter: saturate(1.2);
        }

        &>.rect-right {
            background-color: inherit;
            filter: brightness(0.5);
        }
    }

    &>.text {
        font-size: 32px;
        text-shadow: 2px 2px 0 #000;
        text-align: right;
        font-family: 'x12y16pxMaruMonica', var(--font-fallback);
    }
}
</style>