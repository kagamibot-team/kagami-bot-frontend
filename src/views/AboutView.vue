<script setup lang="ts">
import { load } from '../common/get_data';

const data = load<{
    app_name: string,
    app_version: string,
    kagami_version: string,
    python_version: string,
    platform: string,
}>({
    app_name: "Unknown",
    app_version: "Unknown",
    kagami_version: "Unknown",
    python_version: "Unknown",
    platform: "Unknown",
});

const vite_version = __VITE_VERSION__;
const vue_version = __VUE_VERSION__;
const frontend_version = __APP_VERSION__;
const node_version = __NODE_VERSION__;
</script>

<template>
    <div class="main">
        <div class="h2">About Kagami Bot</div>
        <ul>
            <li>
                <com>KAGAMI-BACKEND</com>{{ data.kagami_version }}
            </li>
            <li>
                <com>KAGAMI-FRONTEND</com>{{ frontend_version }}
            </li>
            <li>
                <com>Python</com>{{ data.python_version }}
            </li>
            <li>
                <com>Platform</com>{{ data.platform }}
            </li>
            <li>
                <com>Protocol</com>{{ data.app_name }}
            </li>
            <li>
                <com>Protocol Version</com>{{ data.app_version }}
            </li>
            <li>
                <com>Vite</com>{{ vite_version }}
            </li>
            <li>
                <com>Vue</com>{{ vue_version }}
            </li>
            <li>
                <com>Node</com>{{ node_version }}
            </li>
            <li>
                <com>Github</com>kagamibot-team
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.main {
    padding: 20px 0px;
    background-color: #16151a;
    color: #eae8de;
    width: 480px;
    font-family: 'x12y16pxMaruMonica', 'Maple UI', var(--font-fallback);
    text-shadow: 3px 3px 0 #000;

    div.h2 {
        font-size: 60px;
        text-align: center;
        margin-bottom: 30px;
        margin-top: 40px;
    }

    ul {
        padding-inline-start: 0;

        >li {
            list-style-type: none;
            font-size: 32px;
            padding-bottom: 9px;
            padding-top: 9px;
            color: rgb(174, 175, 206);

            >com {
                width: 250px;
                display: inline-block;
                text-align: right;
                padding-right: 20px;
                box-sizing: border-box;
                color: rgb(214, 204, 168);
            }
        }

        >li:nth-child(odd) {
            background-color: #222028;
        }
    }
}
</style>