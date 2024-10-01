<script setup lang="ts">
defineProps<{ qqid: string | number }>()
</script>

<template>
  <div class="avatar">
    <img :src="`../file/avatar/qq/${qqid}/`" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  width: 1.3em;
  height: 1.3em;
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  border-radius: 50%;
  // border: 2px solid #63605c;
  box-sizing: border-box;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.114);
  background-color: white;

  img {
    width: 1.3em;
    height: 1.3em;
    object-fit: cover;
  }
}
</style>
