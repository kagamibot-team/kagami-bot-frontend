<script setup></script>
<template>
  <main>
    <h2>指令列表</h2>
    <h3>游戏方式</h3>
    <ul>
      <li><com>抓小哥 (zhua)</com>进行一次抓</li>
      <li><com>狂抓 (kz)</com>一次抓完所有可用次数</li>
      <li><com>库存 (kc)</com>展示个人仓库中的存量</li>
      <li><com>抓小哥进度 (zhuajd)</com>展示目前收集的进度</li>
      <si>（可加参数"-l <par>{等级名}</par>"以限定等级）</si>
      <si>（可加参数"-p <par>{猎场序号}</par>"以限定猎场）</si>
      <li>
        <com>合成 <par>{小哥名} {小哥名} {小哥名}</par></com
        >消耗小哥和薯片进行合成
      </li>
      <li><com>我的成就 (mycj)</com>成就列表</li>
    </ul>
    <h3>商店与皮肤</h3>
    <ul>
      <li><com>小镜的shop (xjshop)</com>进入小镜的商店</li>
      <li><com>我有多少薯片 (mysp)</com>告诉你你有多少薯片</li>
      <li><com>皮肤收集进度 (pfjd)</com>展示目前收集小哥皮肤的进度</li>
      <li>
        <com>切换皮肤 <par>{小哥名字}</par></com
        >切换一个小哥的皮肤
      </li>
    </ul>
    <h3>日常信息</h3>
    <li><com>喜报 (xb)</com>最近 24 小时内群里有谁抓到了四/五星</li>
    <!-- <li><com>复读镜</com>叫小镜读一段话</li> -->
    <!-- <li><com>小镜今日人品 (xjjrrp)</com>今日人品……</li> -->
    <li><com>小镜签到 (xjqd)</com>就是签个到而已</li>
    <li><com>小镜晚安</com>禁言到明天早上</li>
    <si>（可以指定禁言到什么时候，要打空格，例如：小镜晚安 明早九点）</si>
    <h3>其他信息</h3>
    <li><com>抓小哥帮助 (zhuahelp)</com>显示这条帮助信息</li>
    <li><com>抓小哥更新 (zhuagx)</com>显示抓小哥的更新信息</li>
    <li><com>关于抓小哥 (zhuaabout)</com>显示抓小哥的介绍</li>
  </main>
</template>
