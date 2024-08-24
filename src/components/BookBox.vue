<script setup lang="ts">
import { PropType } from 'vue';
import DisplayBox from './DisplayBox.vue';

const props = defineProps({
    display_box: Object as PropType<DisplayBoxData>,
    title1: String,
    title2: {
        type: String,
        default: "",
    }
});
</script>

<template>
    <div class="book-box">
        <DisplayBox v-bind="props.display_box" />
        <div class="title title1">{{ props.title1 }}</div>
        <div class="title title2">{{ props.title2 }}</div>
    </div>
</template>

<style lang="scss" scoped>
.book-box {
    margin: 20px 10px;

    .title {
        text-align: center;
        font-size: larger;
    }

    .title1 {
        margin-top: 8px;
    }
}
</style>