<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
console.log()
</script>

<template>
  <div class="router">
    <nav>
      <RouterLink
        v-for="(route, index) in router.options.routes"
        :key="index"
        class="link"
        :class="{
          'link-active': route.name == router.currentRoute.value.name
        }"
        :to="route.path"
      >
        {{ route.name }}
        <div class="link-target">
          {{ route.path }}
        </div>
      </RouterLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.router {
    margin: 20px;

    .link {
        display: inline-block;
        text-decoration: none;
        color: white;
        background-color: rgb(38, 74, 193);
        margin: 6px 2px;
        padding: 6px 20px;
        border-radius: 4px 18px;
        box-shadow: 0 3px 8px #0003;
        transform: translate(0, 0);

        &.link-active {
            background-color: rgb(12, 140, 70);
            cursor: default;
        }

        .link-target {
            font-size: x-small;
            opacity: 0.5;
        }

        &:hover:not(.link-active) {
            background-color: rgb(70, 121, 249);
            transition: all ease 0.1s;
            box-shadow: 0 6px 16px #0003;
            transform: translate(0, -1px);
        }
    }
}
</style>
