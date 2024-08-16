<script setup>
import { ref } from 'vue'
import CatchBox from '../components/CatchBox.vue'

const data = ref({
  name: '隬碼面',
  meta: {
    get_chip: 2,
    own_chip: 2,
    remain_time: '2/2',
    need_time: '2年'
  },
  details: '',
  catchs: [
    {
      info: {
        description:
          '小哥是小哥，大哥是大哥，大哥不是小哥，小哥不是大哥，小哥爱吃𰻝𰻝面。最重要的是，两个李白后，\n速度与激情九。\n\n\n\n速度与激情九。哇哈哈哈哈吓得我手抖1:ͤ̀҉̷̸͍̺̟̳͔̞̙̳̳͕͖̬̮̳͂̿͆ͯ̋̒̇ͨ́͋̄̃͌̉̈ͮ̿͟͠  ̷͇͚̝̘̞̯̦̾ͬ̋̌̂͑ͤ̓ͭ̀͒̌̑̒̎͊͆ͬͬ҉̶̴̩̥͎͖̻̜̰̪̙̝̺͕͓̹̱͚̪ͦͣ͐́͆̀̀ͪ̍ͫ͂̇ͬ̑̉̓̍̋ͦ͗̌̌̊͊̚͞.̢͔̮̖̠͇̝̳̪̩̩̥͎͔̞̳̣̻͓̐̊̔́̀͛̎̑͌̓͑̿́̏ͭͫ̀͋͋̐̍ͦͦ̀̕̚ͅͅ0ͤ̀2҉̷̸͍̺̟̳͔̞̙̳͂̿͆ͯ̋̒̇ͨ́͟͠212 ̷͇͚̝̘̞̯̦̾ͬ̋̌̂͑ͤ̓ͭ̀͒̌̑̒̎͊͆ͬͬ҉̶̴̩̥͎͖̻̜̰̪̙̝̺͕͓̹̱͚̪̱ͦͣ͐́͆̀̀ͪ̍ͫ͂̇ͬ̑̉̓̍̋ͦ͗̌̌̊͊̊́̚͞.̢͔̮̖̠͇̝̳̪̩̩̥͎͔̞̳̣̻͓̜͍͍̐̊̔́̀͛̎̑͌̓͑̿́̏ͭͫ̀͋͋̐̍ͦͦ̀̄̕̚ͅͅ ̷̦̖̘̤̇ͣ̿͗͆̓123.̵̥͈̝͚̘̣̘͍̘͎̟̳̺̗̬̰̤̪̮̞̝̯̣̖̂̿ͫͣ̊̔ͯ́̋̍͞͠҉̴̧̲̗̭̼̩͊ͤ͋͐́̋͡ ̡̛̫͈̺̗̗̭̮͎̗̫̫͉͉͇͚͎͓̦̃͛̔͒̒ͥ̇͂̽̌̈̎̀͆͑͆ͨͬ̽͌̍̚͘͘͡ͅ',
        display_name: '小鿔',
        color: 'rgb(198, 193, 191)',
        image: './resource/blank_placeholder.png',
        level: {
          display_name: '★★★★★',
          color: 'rgb(192, 232, 174)'
        }
      }
    },
    {
      info: {
        description:
          '小哥是小哥，大哥是大哥，大哥不是小哥，小哥不是大哥。小哥是小哥，大哥是大哥，大哥不是小哥，小哥不是大哥。小哥是小哥，大哥是大哥，大哥不是小哥，小哥不是大哥。小哥是小哥，大哥是大哥，大哥不是小哥，小哥不是大哥。小哥是小哥，大哥是大哥，大哥不是小哥，小哥不是大哥。小哥是小哥，大哥是大哥，大哥不是小哥，小哥不是大哥。小哥是小哥，大哥是大哥，大哥不是小哥，小哥不是大哥。小哥是小哥，大哥是大哥，大哥不是小哥，小哥不是大哥。小哥是小哥，大哥是大哥，大哥不是小哥，小哥不是大哥。小哥是小哥，大哥是大哥，大哥不是小哥，小哥不是大哥。',
        display_name: '小小小小小小小小小小小小哥',
        color: 'rgb(198, 193, 191)',
        image: './resource/blank_placeholder.png',
        level: {
          display_name: '★★★★★',
          color: 'rgb(192, 232, 174)'
        }
      }
    }
  ]
})
</script>

<template>
  <div class="wrapper">
    <div class="top-title">{{ data.name }} 的一抓</div>
    <div class="side-title">
      本次获得
      {{ data.meta.get_chip }} 薯片，目前共有 {{ data.meta.own_chip }} 薯片。<br />剩余次数：{{
        data.meta.remain_time
      }}，距下次次数恢复还要{{ data.meta.need_time }}。
    </div>
    <CatchBox v-for="(item, index) in data.catchs" :data="item" :key="index" />
  </div>
</template>

<style scoped>
.wrapper {
  width: fit-content;
  padding: 60px 80px 80px 80px;
  background-color: #eeebe3;
}
.top-title {
  color: #63605c;
  /* '荆南波波黑' */
  font-family: '阿里妈妈数黑体', 'HarmonyOS Sans SC', var(--font-fallback);
  font-size: 96px;
  font-weight: bolder;
  width: 800px;
}
.side-title {
  color: #9b9690;
  font-family: '阿里妈妈数黑体', var(--font-fallback);
  font-size: 28px;
  font-weight: bold;
  width: 800px;
}
</style>
