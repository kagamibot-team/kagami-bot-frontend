<script setup lang="ts">
import { computed } from 'vue'
import CatchBox from '../components/CatchBox.vue'
import { load } from '../common/get_data';

const default_data: {
  info: AwardInfo,
  count: number,
  stats: string,
  is_new: boolean
} = {
  info: {
    aid: 0,
    sorting: 0,
    description: '如果持续遇到此问题，请联系开发组。',
    display_name: '你不该在这里。',
    color: 'rgb(198, 193, 191)',
    image_url: './resource/shit.png',
    level: { lid: 5, display_name: '★★★★★', color: 'rgb(192, 232, 174)' }
  },
  count: 2,
  is_new: false,
  stats: "3",
}
const data = load<{
  info: AwardInfo,
  count: number,
  stats: string,
  is_new: boolean
}>(default_data)

const notation = computed(() => (data.value.count >= 0 ? String(data.value.count) : ''))
</script>

<template>
  <CatchBox :info="data.info" :is_new="data.is_new" :notation="notation" :notation2="data.stats" />
</template>
