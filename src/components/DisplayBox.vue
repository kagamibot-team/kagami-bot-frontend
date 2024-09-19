<script setup lang="ts">
import { computed } from 'vue'
import { DisplayBoxData } from '../types/inventory.ts'

const props = defineProps<DisplayBoxData>()
const width = computed(() => (props.width ?? 175) + "px")
const glow_color = computed(() => {
    if (props.do_glow)
        return "0 0 20px " + props.color
    return "none"
})
</script>
<template>
    <div class="display-box" :style="{ backgroundColor: props.color }" :class="{ 'black': props.black_overlay }">
        <img class="xiaoge-image" :src="props.image" />
        <div v-if="notation_down" class="notation-down" :style="{ color: notation_down_color }">
            {{ props.notation_down }}
        </div>
        <div class="notation-up">{{ props.notation_up }}</div>
        <img v-if="props.new_overlay" class="new-notation" :src="'./resource/new.png'" />
        <div v-if="props.black_overlay" class="black-overlay"></div>
        <div v-if="props.sold_out_overlay" class="sold-out-overlay">
            售罄
        </div>
    </div>
</template>
<style scoped>
.display-box {
    width: v-bind(width);
    aspect-ratio: 175 / 140;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: v-bind('glow_color');
    overflow: hidden;
    position: relative;
}

.display-box.black {
    filter: grayscale(0.6);
}

.display-box::before {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: solid v-bind('props.color') 4px;
    display: block;
    content: '';
    position: absolute;
    box-sizing: border-box;
    z-index: 1;
    opacity: 0.5;
    filter: brightness(1.5);
}

.display-box .notation-down,
.display-box .notation-up {
    font-family: 'x12y16pxMaruMonica', var(--font-fallback);
    position: absolute;
    width: 175px;
    padding-left: 13px;
    font-size: 48px;
    box-sizing: border-box;
    text-align: left;
}

.display-box .notation-down {
    word-break: break-all;
    text-shadow:
        1.5px 0 0 #000,
        -1.5px 0 0 #000,
        0 1.5px 0 #000,
        0 -1.5px 0 #000;
    color: white;
    bottom: 10px;
}

.display-box .notation-up {
    word-break: break-all;
    text-shadow:
        1.5px 0 0 #fff,
        -1.5px 0 0 #fff,
        0 1.5px 0 #fff,
        0 -1.5px 0 #fff;
    color: black;
    top: 10px;
}

.display-box .xiaoge-image {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.display-box .new-notation {
    position: absolute;
    left: 83px;
    z-index: 1;
}

.display-box .black-overlay {
    background-color: #0008;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2;
}

.display-box .sold-out-overlay {
    text-align: center;
    height: 100%;
    width: 100%;
    line-height: 140px;
    position: absolute;
    font-size: 48px;
    font-family: 'HarmonyOS Sans SC', var(--font-fallback);
    text-shadow: 2px 2px 10px #004;
    z-index: 2;
}
</style>
