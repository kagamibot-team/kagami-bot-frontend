<script setup lang="ts">
import default_data from '../pre_data/storage.json'
import BookBoxSmall from '../components/BookBoxSmall.vue'
import { StorageData } from '../types/inventory'
import { load } from '../common/get_data'

const data = load<StorageData>(default_data)
</script>

<template>
    <div class="storage-view">
        <h1>{{ data.user.name }} 的 {{ data.title_text }}</h1>
        <div v-for="(item, index) of data.boxes" :key="index">
            <h2 v-if="item.title" :style="{ color: item.title_color || '#EEEEEE' }">
                {{ item.title }}
            </h2>
            <div class="book-box-list">
                <BookBoxSmall v-for="(storage, i2) in item.elements" v-bind="storage" :key="i2" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.storage-view {
    margin: 0;
    padding: 50px 70px;
    background-color: #9B9690;
    color: white;

    h1 {
        margin: 0;
        font-size: 54px;
        font-family: '荆南波波黑', var(--font-fallback);
    }

    h2 {
        margin: 0;
        margin-top: 30px;
        font-size: 48px;
        font-family: '荆南波波黑', var(--font-fallback);
    }

    .book-box-list {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }
}
</style>
