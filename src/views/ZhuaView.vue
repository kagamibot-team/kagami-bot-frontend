<script setup lang="ts">
import CatchBox from '../components/CatchBox.vue'
import defaultData from '../pre_data/zhua.json'
import { load } from '../common/get_data'
import { ZhuaData } from '../types/zhua'

const data = load<ZhuaData>(defaultData)
</script>

<template>
  <div v-if="data" class="wrapper">
    <div class="top-title">
      <!--<Avatar :qqid="data.user.qqid" style="margin-right: 20px;" />-->{{ data.user.name }}
      的一抓
    </div>
    <div class="side-title">
      本次获得
      {{ data.meta.get_chip }} 薯片，目前共有 {{ data.meta.own_chip }} 薯片。<br />剩余次数：{{
        data.meta.remain_time
      }}/{{ data.meta.max_time }}，距下次次数恢复还要{{ data.meta.need_time }}。
    </div>
    <CatchBox
      v-for="(item, index) in data.catchs"
      :key="index"
      color_on_notation
      :info="item.info"
      :notation="`+${item.count}`"
      :is_new="item.is_new"
      style="margin-top: 25px"
    />
    <div v-if="data.meta.field_from != 1" class="field-notation">
      {{ data.meta.field_from }}号猎场
    </div>
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
