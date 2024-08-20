<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import CatchBox from '../components/CatchBox.vue'

const default_data: GetAward = {
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
}
const data = ref<GetAward>(default_data)
const route = useRoute()

const notation = computed(() => data.value.count >= 0 ? String(data.value.count) : "");

axios
  .get(`../data/${route.query.uuid}/`)
  .then((response) => {
    if (response.status == 200) {
      data.value = response.data
    } else {
      data.value = default_data
    }
  })
  .catch((_) => {
    data.value = default_data
  })
</script>

<template>
  <CatchBox :info="data.info" :is_new="data.is_new" :notation="notation" />
</template>
