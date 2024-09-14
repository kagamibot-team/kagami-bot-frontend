<script setup lang="ts">
import { computed, PropType } from 'vue'
import BookBox from './BookBox.vue'
import BookBoxSmall from '../components/BookBoxSmall.vue'
import FormattedTexts from './FormattedTexts.vue';
import { MergeData } from '../types/recipe';

const props = defineProps({
    info: {
        type: Object as PropType<MergeData>,
        default: (() => {return {}}),
    },
    now_merging: {
        type: Boolean,
        default: false
    },
    is_opacity: {
        type: Boolean,
        default: false
    },
})

const color = computed(() => (props.is_opacity ? '#9B969099' : '#9b9690'))
const notation_color = computed(() => {
    if (props.now_merging) {
        if (props.info.output.count == 1) {
            return '#FFFFFF'
        } else if (props.info.output.count == 2) {
            return '#FFFD55'
        } else {
            return '#8BFA84'
        }
    }
    return '#FFFFFF'
})
const notations_down = computed(() => {
    if (props.now_merging) {
        return ["→" + props.info.after_storages[0], "→" + props.info.after_storages[1], "→" + props.info.after_storages[2], "+" + props.info.output.count]
    }
    let ret = ["", "", "", ""]
    if (props.info.inputs[0].aid > 0) ret[0] += props.info.after_storages[0]
    if (props.info.inputs[1].aid > 0) ret[1] += props.info.after_storages[1]
    if (props.info.inputs[2].aid > 0) ret[2] += props.info.after_storages[2]
    if (props.info.output.info.aid > 0) ret[3] += props.info.after_storages[3]
    return ret
})
const is_new = computed(() => {
    if (props.now_merging) {
        return props.info.output.is_new
    }
    return false
})
const possible = computed(() => {
    if (props.info.possibility == -1) {
        return "成功率 未知"
    } else if (props.info.possibility > 0.6) {
        return "成功率：高"
    } else if (props.info.possibility > 0.3) {
        return "成功率：中"
    } else {
        return "成功率：低"
    }
})
const last_time = computed(() => {
    if (props.now_merging) {
        return ""
    }
    return "上回记录：" + props.info.last_time
})
</script>

<template>
    <div class="outbox">
        <div class="recipe">
            <div class="recipe-material">
                <BookBoxSmall
                    v-for="(item, index) in info.inputs" :key="index" 
                    :display_box="{
                        image: item.image_url,
                        color: item.color,
                        notation_down: notations_down[index],
                        notation_down_color: notation_color,
                        do_glow: item.level.lid >= 4,
                        glow_type: 0,
                        black_overlay: info.light_off[index]
                    }" :title1="item.display_name"/>
                </div>
            <div class="recipe-info">
                <FormattedTexts :text="possible"/>
                <FormattedTexts :text="last_time"/>
            </div>
        </div>
        <div class="recipe-product">
            <BookBox
                :display_box="{
                    image: info.output.info.image_url,
                    color: info.output.info.color,
                    notation_down: notations_down[3],
                    notation_down_color: notation_color,
                    do_glow: info.output.info.level.lid >= 4,
                    glow_type: 0,
                    new_overlay: is_new,
                    black_overlay: info.light_off[3]
                }" :title1="info.output.info.display_name"/>
        </div>
    </div>
</template>
<style scoped>
.outbox {
    width: 640px;
    /* height: 172px; */
    background-color: v-bind('color');
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    position: relative;
    color: #ffffff;
}

.recipe {
    width: 440px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #0003;
}

.recipe-material {
    /* width: 560px; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: auto;
}

.recipe-product {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    /* background-color: #F00000; */
}

.recipe-info {
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
    color: #ffffff;
    font-family: '凤凰点阵体 16px', 'Maple UI', var(--font-fallback);
}

</style>
