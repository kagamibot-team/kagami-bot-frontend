<script setup lang="ts">
import { computed, ref } from 'vue'
import { load } from '../../common/get_data'
import QRCode from '../../components/QRCode.vue'
import { BuyData } from '../../types/xjshop'
import { onMounted } from 'vue'

const data = load<BuyData>({
  remain_chips: 2024,
  date: '2024-09-01',
  time: '20:10:12',
  records: [
    {
      title: '粑粑小哥',
      price: 10000
    },
    {
      title: '一个名字稍微长一些的测试商品',
      price: 314159
    }
  ],
  user: {
    name: '小明',
    uid: 1001
  }
})

const formatter = new Intl.NumberFormat()
const cost = computed(() =>
  formatter.format(data.value.records.map((d) => d.price).reduce((a, b) => a + b))
)

const qrcode_data = ref()
onMounted(() => {
  qrcode_data.value = document.getElementById('shop_main')?.textContent
})
</script>

<template>
  <div id="shop_main" class="main">
    <div>小镜的 Shop 销售小票</div>
    <hr />
    <div>日期：{{ data.date }}</div>
    <div>时间：{{ data.time }}</div>
    <div>客户：{{ data.user.name }}</div>
    <div>编号：UID_{{ data.user.uid }}</div>
    <hr />
    <div>&nbsp;</div>
    <div v-for="(item, index) of data.records" :key="index">
      -&ensp;{{ item.title }}
      <div class="right">{{ formatter.format(item.price) }}&ensp;薯片</div>
      <div>&ensp;</div>
    </div>
    <hr />
    <div>&ensp;</div>
    <div>
      应付
      <div class="right">{{ cost }} 薯片</div>
    </div>
    <div>
      实付
      <div class="right">{{ cost }} 薯片</div>
    </div>
    <div>
      余额
      <div class="right">{{ formatter.format(data.remain_chips) }} 薯片</div>
    </div>
    <div class="qrcode">
      <QRCode :data="qrcode_data" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  background-color: white;
  padding: 60px 36px;
  font-family: '凤凰点阵体 12px', var(--font-fallback);
  font-size: 24px;
  width: 16em;

  hr {
    border-top: solid 2px;
  }

  > div {
    margin: 0;
    line-height: 1.25em;

    .right {
      float: right;
    }
  }

  .qrcode {
    text-align: center;
    margin-top: 2em;

    img {
      width: 80%;
    }
  }
}
</style>
