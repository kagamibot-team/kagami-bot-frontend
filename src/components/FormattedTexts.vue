<script setup lang="ts">
import { computed } from 'vue';
import { rep_str_to_ids } from '../script/trans_ids';

const props = defineProps({
    text: { type: String, default: "" },
    invert_color: { type: Boolean, default: true },
});
const splitted_text = computed(() => {
    return rep_str_to_ids(props.text);
});

const svg_style = computed(() => {
    if (props.invert_color) {
        return { filter: "invert(100%)" };
    }
    return {};
});
</script>

<template>
    <span>
        <span v-for="(char, index) in splitted_text" :key="index">
            <span v-if="char.length == 1">{{ char }}</span>
            <object v-else class='inline-svg' :style="svg_style" :data="`http://glyphwiki.org/glyph/${char}.svg`"
                type="image/svg+xml">
                {{ char }}
            </object>
        </span>
    </span>
</template>
