<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="super-big-box">
    <div class="out-line">
      <div id="big_box">
        <RouterView />
      </div>
    </div>
    <div class="out-hint-text">虚线框内代表可视区域，最终输出不会包含虚线框。</div>
  </div>
</template>

<style>
.inline-svg {
  height: 1.1em;
  width: 1.1em;
  display: inline-block;
  vertical-align: text-bottom;
}
body {
  font-family: var(--font-fallback);
}

#big_box {
  width: fit-content;
  /* border: 1px solid black; */
}

.out-line {
  border: 2px rgba(0, 0, 0, 0.5) dashed;
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
}

.out-hint-text {
  color: rgba(0, 0, 0, 0.5);
}

.super-big-box {
  min-width: 5000px;
}
</style>
