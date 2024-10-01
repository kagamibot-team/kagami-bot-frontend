<script setup lang="ts">
import LiechangFrame from '../components/LiechangFrame.vue'
import LiechangBox from '../components/LiechangBox.vue'
import default_data from '../pre_data/liechang.json'
import { load } from '../common/get_data'
import { LiechangData } from '../types/liechang'

const data = load<LiechangData>(default_data)
</script>

<template>
  <LiechangFrame :data="data">
    <div class="container">
      <LiechangBox
        v-for="(item, index) in data?.packs"
        :key="index"
        :data="item"
        :selecting="item.pack_id == data?.selecting"
      />
    </div>
  </LiechangFrame>
</template>

<style scoped lang="scss">
.container {
  display: flex;
}
</style>
