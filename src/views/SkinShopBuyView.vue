<script setup lang="ts">
import { load } from '../common/get_data';
import { SkinShopBought } from '../types/skin_shop';

const data = load<SkinShopBought>({
  cost: 1600,
  current_count: 5,
  name: "皮肤盲盒",
  rest_money: 1200,
  unit: "薯片",
  user: {
    name: "大家好啊我",
    qqid: "1234567890"
  },
});
</script>

<template>
  <div class="body">
    <div class="skin-shop-bought">
      <div class="top">
        <div class="buttons">
          <span class="button button-1"></span>
          <span class="button button-2"></span>
          <span class="button button-3"></span>
        </div>
        <div class="texts">交易成功</div>
      </div>
      <div class="content">
        <div class="image" :class="data.level ? 'image-' + data.level : ''">
          <img v-if="data.image" :src="data.image" />
          <img v-else src="../assets/皮肤盲盒350.png" />
          <div v-if="data.current_count" class="count-notation">
            {{ data.current_count }}
          </div>
        </div>
        <div class="title">{{ data.name }} 已经进入您的背包</div>
        <p>
          {{ data.user.name }} ({{ data.user.qqid }}) 在<b>服装店</b>购买了一件 <b>{{ data.name }}</b>，花费了 {{ data.cost }} {{
            data.unit }}。您目前还剩余
          {{ data.rest_money }} {{ data.unit }}。
        </p>
        <p v-if="data.from_award_name">
          该皮肤是 {{ data.from_award_name }} 的皮肤。你可以输入 <u>切换皮肤 {{ data.name }}</u> 以切换至当前皮肤
        </p>
        <p v-else>
          你可以输入 <u>使用 皮肤盲盒</u> 抽取一个随机皮肤。
        </p>
        <div class="button-confirm">了解</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  padding: 40px;
  background-color: rgb(133, 188, 205);
  overflow: hidden;
}

.skin-shop-bought {
  background-color: white;
  font-family: 'HarmonyOS Sans SC', var(--font-fallback);
  width: 320px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 36px 100px #00000066, 0 0 3px #00000040;
}

.top {
  margin-bottom: 10px;
  height: 34px;
  text-align: center;
  position: relative;
  background: #EAEAEA;
  box-shadow: 0 1px 0 #0000001A, 0 .5px 0 #0000001A;
  display: grid;
  align-items: center;

  & .buttons {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: max-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 8px;
    margin-left: 8px;

    & .button {
      width: 12px;
      height: 12px;
      background-color: #999;
      border-radius: 10px;
      display: inline-block;
      border: solid .5px #00000033;

      &.button-1 {
        background-color: #FF5F57;
      }

      &.button-2 {
        background-color: #FEBC2E;
      }

      &.button-3 {
        background-color: #28C840;
      }
    }
  }

  & .texts {
    font-weight: 500;
    font-size: 15px;
  }
}

.content {
  margin: 20px;
}

.image {
  overflow: hidden;
  border-radius: 20px;
  background: linear-gradient(40deg, rgb(239, 136, 26), rgb(255, 247, 161));
  width: 140px;
  height: 112px;
  margin: 0 auto;
  box-shadow: 0px 5px 10px #00000022;
  border: solid 5px #fff;
  position: relative;

  & img {
    width: 140px;
  }

  &.image-1 {
    background: linear-gradient(40deg, #75C16D, #a3e89b);
  }

  &.image-2 {
    background: linear-gradient(40deg, #6F93E7, #94b0f0);
  }

  &.image-3 {
    background: linear-gradient(40deg, #996FE0, #b99af0);
  }

  &.image-4 {
    background: linear-gradient(40deg, #E8BD5A, #f4d58d);
  }

  & .count-notation {
    position: absolute;
    right: 10px;
    bottom: 4px;
    font-size: 24px;
    font-weight: 800;
    color: rgb(255, 255, 255);
    text-shadow: 2px 2px 0 #0000005c;
  }
}

.title {
  margin: 20px 0;
  text-align: center;
  font-weight: 600;
}

p {
  text-align: center;
}

.button-confirm {
  margin: 0 auto;
  height: 22px;
  width: 44px;
  padding: 3px 7px;
  background-color: #007AFF;
  text-align: center;
  border-radius: 5px;
  color: white;
  position: relative;
  box-shadow: 0 1px 2.5px #007AFF3D;
  border: solid .5px #007AFF1E;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, #FFFFFF, #FFFFFF00);
    opacity: .17;
  }
}
</style>
