<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import LiechangFrame from '../components/LiechangFrame.vue';
import LiechangBox from '../components/LiechangBox.vue';
import default_data from '../pre_data/liechang.json';

const data = ref<LiechangData>(default_data);
const route = useRoute();

axios.get(`../data/${route.query.uuid}/`).then(response => {
    if (response.status == 200) {
        data.value = response.data;
    } else {
        data.value = default_data;
    }
}).catch(_ => {
    data.value = default_data;
})

</script>

<template>
    <LiechangFrame :data="data">
        <div class="container">
            <LiechangBox v-for="(item, index) in data?.packs" v-bind:key="index" :data="item"
                :selecting="item.pack_id == data?.selecting" />
        </div>
    </LiechangFrame>
</template>

<style scoped lang="scss">
.container {
    display: flex;
}
</style>