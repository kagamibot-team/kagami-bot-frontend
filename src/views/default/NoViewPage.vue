<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const data = ref<any>(undefined);
const route = useRoute();
const uuid: any | null = route.query.uuid;

if (uuid !== null) {
    axios.get(`../data/${uuid}/`).then(res => {
        if (res.status == 200) {
            data.value = res.data;
        }
    }).catch(_ => { });
}
</script>

<template>
    <main>
        <h3>404 Not Found</h3>
        <p>当前页面接口暂时未实现前端，如果你遇到了这个页面，请联系 passthem 修复这个问题！</p>
        <hr />
        <p>传入当前页面的数据如下：</p>
        <code>{{ data }}</code>
    </main>
</template>

<style lang="scss">
</style>
