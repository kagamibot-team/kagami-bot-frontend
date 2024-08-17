<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import default_data from '../pre_data/liechang.json';

const data = ref<LiechangData>();
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
    <div>
        {{ JSON.stringify(data) }}
    </div>
</template>

<style lang="scss"></style>