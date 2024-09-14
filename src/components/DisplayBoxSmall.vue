<script setup lang="ts">
import { DisplayBoxData } from '../types/inventory.ts'

const props = defineProps<DisplayBoxData>()
</script>
<template>
    <div class="display-box" :style="{ backgroundColor: props.color }" :class="{ 'black': props.black_overlay }">
        <img class="xiaoge-image" :src="props.image" />
        <div v-if="notation_down" class="notation-down" :style="{ color: notation_down_color }">
            {{ props.notation_down }}
        </div>
        <div class="notation-up">{{ props.notation_up }}</div>
        <img v-if="props.new_overlay" class="new-notation" :src="'./resource/new.png'" />
        <div v-if="props.sold_out_overlay" class="sold-out-overlay">
            售罄
        </div>
        <div v-if="props.black_overlay" class="sold-out-overlay"></div>
    </div>
</template>
<style scoped>
.display-box {
    width: 105px;
    height: 84px;
    border-radius: 10px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
}

.display-box.black {
    filter: grayscale(0.6);
}

.display-box::before {
    width: 105px;
    height: 84px;
    border-radius: 10px;
    border: solid #fff4 4px;
    display: block;
    content: '';
    position: absolute;
    box-sizing: border-box;
}

.display-box .notation-down,
.display-box .notation-up {
    font-family: 'x12y16pxMaruMonica', var(--font-fallback);
    position: absolute;
    width: 105px;
    padding-left: 7px;
    font-size: 32px;
    box-sizing: border-box;
    text-align: left;
}

.display-box .notation-down {
    word-break: break-all;
    text-shadow:
        1px 0 0 #000,
        -1px 0 0 #000,
        0 1px 0 #000,
        0 -1px 0 #000;
    color: white;
    bottom: 6px;
}

.display-box .notation-up {
    word-break: break-all;
    text-shadow:
        1px 0 0 #fff,
        -1px 0 0 #fff,
        0 1px 0 #fff,
        0 -1px 0 #fff;
    color: black;
    top: 6px;
}

.display-box .xiaoge-image {
    width: 105px;
    height: 84px;
    position: absolute;
    top: 0;
    left: 0;
}

.display-box .new-notation {
    position: absolute;
    left: 83px;
}

.display-box .sold-out-overlay {
    text-align: center;
    background-color: #0008;
    height: 100%;
    width: 100%;
    line-height: 140px;
    position: absolute;
    font-size: 48px;
    font-family: 'HarmonyOS Sans SC', var(--font-fallback);
    text-shadow: 2px 2px 10px #004;
}
</style>
