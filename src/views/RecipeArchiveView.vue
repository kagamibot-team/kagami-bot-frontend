<script setup lang="ts">
import { computed } from 'vue'

import RecipeBox from '../components/RecipeBox.vue'

import defaultData from '../pre_data/recipe_archive.json'
import _answers from '../pre_data/dialogue/recipe_archive.json'
import { load } from '../common/get_data'
import { RecipeArchiveData } from '../types/recipe'
import { DialogueMessage } from '../types/common'

const data = load<RecipeArchiveData>(defaultData)

// 注：这里有类型注解
// 所以如果更改了回答的数据结构，请在这里同时更改
const answers: {
    normal: {
        [inp: number]: {
            [out: number]: Array<string>
        }
    },
    xiaohua: Array<string>,
    xiaokelian: Array<string>
} = _answers;

// 下面是计算需要什么对话的逻辑，是从后端搬到前端的
const dialogue = computed<DialogueMessage>(() => (v => {
    // 这个函数将下面的语法转换成 object 以方便界面读取
    // 说话人 表情：内容
    let spl1 = v.substring(0, v.indexOf("："));
    let speaker = spl1.substring(0, spl1.indexOf(" "));
    let face = spl1.substring(spl1.indexOf(" ") + 1);
    let text = v.substring(v.indexOf("：") + 1);

    return {
        speaker: speaker,
        face: face,
        text: text,
    }
})((() => {
    // 这里是随机抽取句子
    var pool: Array<string>;

    if (data.value.product.aid == 9) {
        pool = answers.xiaohua;
    } else if (data.value.product.aid == 98) {
        pool = answers.xiaokelian;
    } else if (data.value.product.level.lid == 0) {
        if (data.value.product.aid == 89) {
            pool = answers.normal[0][1];    // 粑粑小哥的反应
        } else {
            pool = answers.normal[0][0];    // 其他零星的反应
        }
    } else {
        let good_enough = data.value.good_enough? 1 : 0; // 0: 普通反应，1: 满意反应
        pool = answers.normal[data.value.product.level.lid][good_enough];
    }
    return pool[Math.floor(Math.random() * pool.length)];
})()));
</script>

<template>
    <div v-if="data" class="wrapper">
        <div class="top-title">
            <!--<Avatar :qqid="data.user.qqid" style="margin-right: 30px;" />-->{{ data.user.name }} 的查询：
        </div>
        <div class="total">
            <div class="dialogue-text">
                <div class="dialogue-intext">{{ dialogue.text }}</div>
                <img class="dialogue-textbox" :src="`./resource/合成/对话框.png`" />
            </div>
            <div class="archive-list">
                <RecipeBox
                    v-for="(item, index) in data.recipes" :key="index" :info="item" :now_merging="false" :is_opacity="true" />
            </div>
            <svg class="merge-side-title">
                <text x="0" y="0" alignment-baseline="text-before-edge" text-anchor="start">
                    本次查询花费了你 {{ data.cost_chip }} 薯片，你还有 {{ data.own_chip }} 薯片。
                </text>
            </svg>
            <img class="dialogue-figure" :src="`./resource/合成/${dialogue.speaker} 表情 ${dialogue.face}.png`" />
        </div>
        <img class="background" :src="`./resource/合成/背景 合成档案.png`" />
    </div>
</template>

<style scoped>

.wrapper {
    position: relative;
    width: fit-content;
    padding: 60px 80px 60px 80px;
    overflow: hidden;

    &>.background {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        left: 0;
        top: 0;
        z-index: -1;
    }
}

.dialogue-text {
    position: relative;
    height: 180px;
    left: 150px;
    top: -20px;
}

.dialogue-intext {
    position: relative;
    font-size: 35px;
    font-family: '荆南波波黑', var(--font-fallback);
    color: #333333;
    width: 410px;
    height: 200px;
    left: 120px;
    top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1;
}

.dialogue-textbox {
    position: absolute;
    width: 900px;
    height: 420px;
    top: -110px;
    left: -200px;
    z-index: 0;
}

.dialogue-figure {
    position: absolute;
    width: 1680px;
    right: -560px;
    top: -200px;
    z-index: -1;
}

.archive-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
    margin-left: -10px;
}

.total {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 0;
    /* background-color: #ffffff; */
}

.top-title {
    font-family: 'HarmonyOS Sans SC', var(--font-fallback);
    font-size: 84px;
    font-weight: bolder;
    color: white;
    text-shadow:
        8px 8px 30px #1e1e2168,
        3px 3px 0 #000000;
    width: 1250px;
    word-break: break-all;
}

.merge-side-title {
    width: 100%;
    height: 32px;
    font-family: 'HarmonyOS Sans SC', var(--font-fallback);
    fill: #ffffff;
    font-weight: bolder;
    font-size: 24px;
    margin-top: 12px;
    paint-order: stroke;
    stroke: black;
    stroke-width: 4px;
    overflow: visible;
}
</style>
