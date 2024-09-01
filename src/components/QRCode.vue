<script setup lang="ts">
import { computedAsync } from '@vueuse/core';
import QRCode from 'qrcode';

const props = defineProps({
    data: {
        type: String,
        default: "",
    }
});

const image = computedAsync(async () => await QRCode.toDataURL(props.data));
</script>

<template>
    <img :src="image" />
</template>