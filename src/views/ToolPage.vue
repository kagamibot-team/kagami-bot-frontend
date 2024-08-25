<script async setup lang="ts">
import { ref } from 'vue'
import { rep_str_to_ids } from '../script/trans_ids';
import FormattedTexts from '../components/FormattedTexts.vue';

const text = ref();
const title = ref();

const data = ref('试着向你述说，⿺辶⿳宀珎⿲隹貝招 的 ⿰字见⿰aa。');
</script>

<template>
  <main>
    <div class="test-area">
      <input v-model="title" placeholder="在此输入标题以预览输出效果。" />
      <textarea v-model="text" placeholder="在此输入文本以预览输出效果。" />
      <h2>{{ title }}</h2>
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
      <p>
        <b>{{ text }}</b>
      </p>
      <div>
        <FormattedTexts :invert_color="false" :text="data" />
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
</style>
