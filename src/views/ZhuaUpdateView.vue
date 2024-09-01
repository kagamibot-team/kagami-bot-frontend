<script setup lang="ts">
import { load } from '../common/get_data';
import FormattedTexts from '../components/FormattedTexts.vue';
import default_data from '../pre_data/update.json';
import _colors from '../pre_data/update_color.json';

const data = load<UpdateData>(default_data);
const update_colors: {
    [tag: string]: {
        color: string,
        backgroundColor: string,
    }
} = _colors;

function get_style_of_tag(tag: string) {
    if (Object.keys(update_colors).includes(tag)) {
        return update_colors[tag];
    }
    return {
        backgroundColor: "rgb(226, 186, 100)",
        color: "rgb(55, 45, 28)",
    }
}
</script>

<template>
    <div class="container">
        <div class="title">小镜 Bot 更新摘要</div>
        <div class="items">
            <div class="item" v-for="(item, index) of data.versions" :key="index">
                <div class="item-title">{{ item.version }}</div>
                <div class="item-updates">
                    <div class="item-update" v-for="(update, i) of item.updates" :key="i">
                        <span class="tag" v-for="(tag, i2) of update.tags" :key="i2" :style="get_style_of_tag(tag)">
                            {{ tag }}
                        </span>
                        <FormattedTexts :text="update.content" />
                    </div>
                </div>
                <div class="item-time" v-if="item.time !== undefined">{{ item.time }}</div>
            </div>
        </div>
        <div class="pager" v-if="data.show_pager">
            第 {{ data.current_page }} 页，共 {{ data.max_page }} 页
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: 30px;
    background-color: rgb(34, 34, 35);
    color: rgb(244, 246, 247);

    >.title {
        font-size: 36px;
        font-family: '荆南俊俊体', '阿里妈妈数黑体', 'Maple UI', var(--font-fallback);
    }

    >.items {
        padding-left: 15px;

        >.item {
            border-left: solid 4px rgb(54, 131, 198);
            margin: 20px 0;
            padding: 16px 20px;
            background-color: rgb(55, 57, 63);
            width: 500px;
            border-radius: 8px;
            box-shadow: 10px 10px 30px #0003;

            >.item-title {
                font-size: 36px;
                font-weight: 900;
                font-family: 'HarmonyOS Sans', var(--font-fallback);
                color: rgb(232, 240, 244);
            }

            >.item-updates {
                >.item-update {
                    font-family: 'Maple UI', var(--font-fallback);
                    background-color: rgb(76, 78, 84);
                    margin: 10px 0;
                    padding: 5px 15px;
                    color: rgb(236, 236, 239);
                    border-left: solid 3px #e6c675;
                    border-radius: 3px;
                    text-align: justify;
                    text-align-last: left;
                    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.134);
                    line-height: 1.7em;

                    .tag {
                        border-radius: 50px;
                        padding: 0 7px;
                        margin-right: 5px;
                        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.134);
                    }
                }
            }

            >.item-time {
                color: rgb(111, 115, 118);
                font-family: 'Maple UI', var(--font-fallback);
                text-align: right;
            }
        }
    }

    >.pager {
        text-align: right;
        color: rgb(119, 110, 110);
        font-family: 'Maple UI', var(--font-fallback);
        font-weight: 800;
    }
}
</style>