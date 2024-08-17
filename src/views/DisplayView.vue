<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import CatchBox from '../components/CatchBox.vue';

type DataType = {
    info: AwardInfo,
    count: number | undefined
};

const default_data: DataType = {
    "info": {
        "description": "如果持续遇到此问题，请联系开发组。",
        "display_name": "你不该在这里。",
        "color": "rgb(198, 193, 191)",
        "image": "./resource/shit.png",
        "level": { "display_name": "★★★★★", "color": "rgb(192, 232, 174)" }
    },
    "count": 2
};
const data = ref<DataType>(default_data);
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
    <CatchBox :data="data" />
</template>