<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
console.log()
</script>
<template>
  <nav>
    <RouterLink v-for="(route, index) in router.options.routes" :key="index" :to="route.path">{{
      route.name
    }}</RouterLink>
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 20px;
}
nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: 1rem;
  text-decoration: none;
  background-color: hsla(0, 100%, 60%, 1);
  border-radius: 4px;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: 0.2s;

  &:hover {
    background-color: hsla(0, 100%, 65%, 1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: hsla(0, 100%, 55%, 1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
