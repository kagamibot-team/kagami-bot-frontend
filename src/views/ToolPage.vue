<script async setup lang="ts">
import { ref } from 'vue'
import FormattedTexts from '../components/FormattedTexts.vue'

const text = ref()
const title = ref()

const data = ref('试着向你述说，⿺辶⿳宀珎⿲隹貝招的⿰字见⿰aa。')

// setInterval(() => {
//   console.log()
// }, 100)
</script>

<template>
  <main>
    <div class="test-area">
      <input
        v-model="title"
        placeholder="在此输入标题以预览输出效果。"
      >
      <textarea
        v-model="text"
        placeholder="在此输入文本以预览输出效果。"
      />
      <input
        v-model="data"
        placeholder="在此输入需要转换的IDS文字以预览输出效果。"
      >
      <h2>{{ title }}</h2>
      <h3>{{ title }}</h3>
      <h4>{{ title }}</h4>
      <p>{{ text }}</p>
      <p>
        <b>{{ text }}</b>
      </p>
      <div>
        <FormattedTexts
          :invert_color="false"
          :text="data"
          :offset="'-0.1em'"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.test-area {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

h4 {
  font-size: 32px;
}
</style>
