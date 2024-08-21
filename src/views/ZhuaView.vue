<script setup lang="ts">
import { ref } from 'vue';
import CatchBox from '../components/CatchBox.vue';
import Avatar from '../components/Avatar.vue';

import axios from 'axios';
import { useRoute } from 'vue-router';
import defaultData from '../pre_data/zhua.json';
const data = ref<ZhuaData>();
const route = useRoute();

axios.get(`../data/${route.query.uuid}/`).then((response) => {
  if (response.status == 200) {
    data.value = response.data;
  } else {
    data.value = defaultData;
  }
}).catch(_ => {
  data.value = defaultData;
});

</script>

<template>
  <div class="wrapper" v-if="data">
    <div class="top-title"><Avatar :qqid="data.user.qqid" style="margin-right: 20px;" />{{ data.user.name }} 的一抓</div>
    <div class="side-title">
      本次获得
      {{ data.meta.get_chip }} 薯片，目前共有 {{ data.meta.own_chip }} 薯片。<br />剩余次数：{{
        data.meta.remain_time
      }}/{{ data.meta.max_time }}，距下次次数恢复还要{{ data.meta.need_time }}。
    </div>
    <CatchBox color_on_notation v-for="(item, index) in data.catchs" :info="item.info" :notation="`+${item.count}`"
      :is_new="item.is_new" :key="index" style="margin-top: 25px" />
    <div class="field-notation" v-if="data.meta.field_from != 1">{{ data.meta.field_from
      }}号猎场</div>
  </div>
</template>

<style scoped>
.wrapper {
  width: fit-content;
  padding: 60px 80px 80px 80px;
  background-color: #eeebe3;
  position: relative;
}

.top-title {
  color: #63605c;
  /* '荆南波波黑' */
  font-family: '阿里妈妈数黑体', 'HarmonyOS Sans SC', var(--font-fallback);
  font-size: 72px;
  font-weight: bold;
  width: 800px;
  word-break: break-all;
  margin-bottom: 30px;
}

.side-title {
  color: #9b9690;
  font-family: '阿里妈妈数黑体', var(--font-fallback);
  font-size: 28px;
  font-weight: bold;
  width: 800px;
}

.field-notation {
  font-family: '阿里妈妈数黑体', 'HarmonyOS Sans SC', var(--font-fallback);
  font-size: 36px;
  color: #a19b94;
  position: absolute;
  right: 40px;
  top: 20px;
}
</style>
