<script setup lang="ts">
import DisplayBox from './DisplayBox.vue';
import ProgressBar from './ProgressBar.vue';

const props = defineProps<{ data: SingleLiechang, selecting: boolean }>();

const data_sum = props.data.award_count.map(p => p.sum_up).reduce((p, q) => p + q);
</script>

<template>
    <div class="liechang-box" :class="[selecting ? 'selecting' : '', data.unlocked ? 'unlocked' : 'locked']">
        <h1>{{ data.pack_id }} 号猎场</h1>
        <DisplayBox :image="data.featured_award.image" :color="data.featured_award.color"
            :notation_down="'共' + data_sum + '小哥'" style="display: inline-block;" class="display-box" />
        <ProgressBar v-for="(item, index) in data.award_count" :key="index" :current="item.collected" :max="item.sum_up"
            :color="item.level.color" class="progress-bar" />
        <div class="locked-hint" v-if="!data.unlocked">
            <div>
                <h1>未解锁!</h1>
                <div class="para">
                    <div class="p1">
                        输入指令
                    </div>
                    <div class="p2">
                        购买猎场 {{ data.pack_id }}
                    </div>
                    <div class="p3">
                        花费 1000 薯片解锁
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.liechang-box {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.489);
    border: solid 3px #00000000;
    color: white;
    width: 280px;
    height: 600px;
    margin-right: 20px;
    box-sizing: border-box;
    position: relative;

    &.selecting {
        background-color: rgba(87, 78, 60, 0.489);
        border-color: rgba(217, 188, 93, 0.677);
    }

    &.locked>h1,
    &.locked>.display-box,
    &.locked>.progress-bar {
        filter: saturate(0.5) brightness(0.5) blur(5px);
    }

    &>.locked-hint {
        position: absolute;
        top: 0;
        left: 0;
        width: 280px;
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        font-family: 'HarmonyOS Sans SC', var(--font-fallback);
        text-shadow: 2px 2px 0 #000;

        & .para {
            width: 250px;

            &>.p1 {
                text-align: left
            }

            &>.p2 {
                color: #82aeec;
                display: block;
                font-size: 36px;
                font-weight: bolder;
            }

            &>.p3 {
                text-align: right;
                margin-bottom: 60px;
            }
        }
    }

    &>h1 {
        font-family: '阿里妈妈数黑体', 'HarmonyOS Sans SC', var(--font-fallback);
        font-size: 48px;
        margin-bottom: 15px;
        margin-top: 25px;
    }

    &>.display-box {
        margin-bottom: 10px;
    }

    &>.progress-bar {
        width: 80%;
        margin: auto;
        margin-top: 10px;
    }
}
</style>
