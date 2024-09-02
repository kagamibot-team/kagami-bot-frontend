<script setup lang="ts">
import { load } from '../../common/get_data';

const data = load<unknown>(undefined);
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

<style lang="scss"></style>
