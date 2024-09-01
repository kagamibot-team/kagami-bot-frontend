<script setup lang="ts">
import { load } from '../../common/get_data';

const data = load<BuyData>({
    cost_chips: 100,
    remain_chips: 2024,
    date: '2024-09-01',
    time: '20:10:12',
    qrcode_url: '',
    records: [],
    user: {
        name: '小明',
    }
});
</script>

<template>
    <div>
        123
    </div>
</template>