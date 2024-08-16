<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="big_box">
    <RouterView />
  </div>
</template>

<style>
body {
  font-family: var(--font-fallback);
}

#big_box {
  width: fit-content;
  /* border: 1px solid black; */
}
</style>
