<script setup lang="ts">
import { computed } from 'vue'
import { load } from '../common/get_data'
import default_data from '../pre_data/zhuahelp.json'
import { HelpData } from '../types/zhuahelp'

const data = load<HelpData>(default_data)
const description = computed(() => {
  return '　　' + data.value.description.replace('\n', '\n　　')
})
</script>

<template>
  <main>
    <h2>指令详情</h2>
    <h3>{{ data.command }}</h3>
    <p>{{ description }}</p>
    <div v-if="data.required_parameters">
      <h3>必填参数{{ data.required_parameters?.note }}</h3>
      <ul>
        <div v-for="(item, index) of data.required_parameters.content" :key="index">
          <bli
            ><bcom
              ><par>{{ item.key }}</par></bcom
            >{{ item.value }}</bli
          >
        </div>
      </ul>
    </div>
    <div v-if="data.optional_parameters != null">
      <h3>选填参数{{ data.optional_parameters.note }}</h3>
      <ul>
        <div v-for="(item, index) of data.optional_parameters.content" :key="index">
          <bli
            ><bcom
              ><par>{{ item.key }}</par></bcom
            >{{ item.value }}</bli
          >
        </div>
      </ul>
    </div>
    <div v-if="data.related_commands">
      <h3>相关指令{{ data.related_commands.note }}</h3>
      <ul>
        <div v-for="(item, index) of data.related_commands?.content" :key="index">
          <li>
            <com>{{ item.key }}</com
            >{{ item.value }}
          </li>
        </div>
      </ul>
    </div>
  </main>
</template>
