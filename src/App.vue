<script setup>
import { RouterView, useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
    <div class="router">
        <nav>
            <RouterLink
v-for="(route, index) in router.options.routes" :key="index" class="link" :class="{
                'link-active': route.name == router.currentRoute.value.name
            }" :to="route.path">
                {{ route.name }}
                <div class="link-target">
                    {{ route.path }}
                </div>
            </RouterLink>
        </nav>
    </div>
    <div class="out-line">
        <div id="big_box">
            <RouterView />
        </div>
    </div>
    <div class="out-hint-text">
        虚线框内代表可视区域，最终输出不会包含虚线框。
    </div>
</template>

<style lang="scss" scoped>
#big_box {
    width: fit-content;
    /* border: 1px solid black; */
}

.out-line {
    border: 2px rgba(0, 0, 0, 0.5) dashed;
    box-sizing: border-box;
    width: fit-content;
    height: fit-content;
    margin-left: 12px;
}

.out-hint-text {
    color: rgba(0, 0, 0, 0.5);
    margin-left: 12px;
    margin-top: 5px;
}

nav {
    position: fixed;
    left: 0;
    z-index: 1000;
    pointer-events: none;

    .link {
        display: block;
        text-decoration: none;
        color: white;
        overflow: hidden;
        box-sizing: border-box;
        padding: 8px 20px;
        background-color: rgb(83, 109, 128);
        border-right: solid 3px rgb(101, 129, 149);
        margin-bottom: 3px;
        transform: translateX(calc(-100% + 4px));
        font-size: 16px;

        border-end-end-radius: 6px;
        border-start-end-radius: 6px;

        transition: all cubic-bezier(0.29, 0.96, 0.58, 1) 0.15s;
        pointer-events: fill;

        &.link-active {
            background-color: rgb(60, 145, 86);
            border-right: solid 3px rgb(92, 168, 107);
            transform: translateX(calc(-100% + 15px));
            cursor: default;
        }

        &:hover,
        &:focus-visible {
            opacity: 1;
            transform: translateX(0);
        }

        &:focus-visible {
            outline-style: dashed;
            outline-width: 2px;
            outline-color: rgb(97, 97, 97);
            outline-offset: 1px;
        }

        .link-target {
            color: white;
            font-family: monospace;
            font-size: 12px;
            opacity: 0.5;
        }
    }
}
</style>
