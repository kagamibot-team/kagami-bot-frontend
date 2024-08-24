<script setup lang="ts">
import BookBox from './BookBox.vue';

defineProps({
    items: Array<BookBoxData>,
    line_item_count: Number,
});
</script>

<template>
    <div class="book-box-list">
        <BookBox v-for="(item, index) in items" v-bind="item" :key="index" />
    </div>
</template>

<style lang="scss" scoped>
.book-box-list {
    display: grid;
    grid-template-columns: repeat(v-bind("line_item_count"), 1fr);
}
</style>