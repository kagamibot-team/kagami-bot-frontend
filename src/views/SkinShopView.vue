<script setup lang="ts">
import { load } from '../common/get_data'
import image_map from '../pre_data/image_map';
import { SkinShop } from '../types/skin_shop'
import { computed } from 'vue';

const data = load<SkinShop>({
    user: {
        name: "大家好啊我",
    },
    biscuits: 10,
    chips: 1000,
    skin_pack_price: 160,
    skins: [
        {
            do_user_have: false,
            image: "./resource/shit.png",
            level: 1,
            is_drawable: true,
            name: "粑粑小皮",
            price: 2
        },
        {
            do_user_have: false,
            image: "./resource/shit.png",
            level: 2,
            is_drawable: false,
            name: "粑粑中皮",
            price: 4
        },
        {
            do_user_have: false,
            image: "./resource/shit.png",
            level: 3,
            is_drawable: false,
            name: "粑粑大皮",
            price: 8
        },
        {
            do_user_have: false,
            image: "./resource/shit.png",
            level: 4,
            is_drawable: true,
            name: "粑粑超大皮",
            price: 16
        },
        {
            do_user_have: true,
            image: "./resource/shit.png",
            level: 4,
            is_drawable: true,
            name: "粑粑超大皮2",
            price: 16
        },
    ],
    dialog: {
        // speaker: "服装店主塩",
        // speaker: "服装学徒驹草",
        speaker: "大驹草",
        // face: "通常",
        face: "正常",
        text: "师傅已经走了十五年了……我想她了。"
    }
})

const face_img = computed(() => {
    return image_map[data.value.dialog.speaker][data.value.dialog.face]
})
</script>

<template>
    <div class="skin-shop" :class="{
        'skin-shop-jx': data.dialog.speaker == '服装学徒驹草',
        'skin-shop-jx-big': data.dialog.speaker == '大驹草',
    }">
        <div class="products-box-container">
            <div class="products-frame">
                <div class="products-frame-bg-deco1"></div>
                <div class="products-frame-bg-deco2"></div>
                <div class="products">
                    <div class="products-left">
                        <div class="product-img">
                            <img src="../assets/皮肤盲盒350.png" alt="皮肤盲盒">
                        </div>
                        <div class="product-text">
                            <div class="product-name">
                                <span>促销</span> 皮肤盲盒
                            </div>
                            <div class="product-price">
                                {{ data.skin_pack_price }}<span>薯片</span>
                                <div class="price-notation">价格每周刷新</div>
                            </div>
                        </div>
                    </div>
                    <div class="products-right">
                        <div v-for="(item, index) in data.skins" v-bind="item" :key="index" class="product">
                            <div class="product-img" :class="'product-img-' + item.level">
                                <img :src="item.image" alt="皮肤盲盒">
                                <div v-if="item.do_user_have" class="sold-out-mark"><span>售罄</span></div>
                            </div>
                            <div class="product-text">
                                <div class="product-name">
                                    {{ item.name }}<span v-if="!item.is_drawable">✿</span>
                                </div>
                                <div class="product-price">
                                    {{ item.price }}<span>饼干</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dialog-container">
            <div class="dialog">
                {{ data.dialog.text }}
            </div>
        </div>
        <div class="figure-container">
            <div class="figure">
                <img :src="face_img" :width="data.dialog.speaker == '服装学徒驹草' ? 1100 : 1000" />
            </div>
        </div>
        <div class="ui-container">
            <div class="ui-upper">
                {{ data.user.name }} 在皮肤商店
            </div>
            <svg class="ui-lower">
                <text class="text" alignment-baseline="text-before-edge" text-anchor="start" x="4">
                    你现在有 {{ data.chips }} 薯片 | {{ data.biscuits }} 饼干。

                    输入 <tspan alignment-baseline="text-before-edge" text-anchor="start" class="text-inner">皮肤商店 购买 商品名
                    </tspan> 就可以购买了哦！
                </text>
            </svg>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$shop-bg1-light: rgb(233, 237, 241);
$shop-bg1-dark: rgb(45, 49, 54);
$shop-bg2-light: rgb(226, 232, 238);
$shop-bg2-dark: rgb(43, 45, 50);
$shop-bg2-shadow-ul-light: #bbc4d048;
$shop-bg2-shadow-ul-dark: #0f0f1048;
$shop-bg2-shadow-br-light: rgba(255, 255, 255, 0.304);
$shop-bg2-shadow-br-dark: rgba(22, 25, 27, 0.304);

$shop-shadow-product-light: #414b572b;
$shop-shadow-product-dark: #00000051;
$shop-background-product-light: white;
$shop-background-product-dark: rgb(45, 47, 49);

$shop-title-light: rgb(58, 69, 78);
$shop-title-dark: rgb(196, 203, 220);

$shop-dialog-border-light: rgb(51, 51, 54);
$shop-dialog-border-dark: rgba(77, 77, 86, 0);
$shop-dialog-background-light: white;
$shop-dialog-background-dark: rgb(66, 73, 80);
$shop-dialog-text-light: black;
$shop-dialog-text-dark: white;
$shop-price-notation-light: #d0d0d0;
$shop-price-notation-dark: #696969;

$shop-decorator-wall-shio: #bfd8e4;
$shop-hint-shio: rgb(173, 248, 252);

$shop-decorator-wall-jx: #bac2d8;
$shop-hint-jx: rgb(193, 210, 244);

$shop-decorator-wall-jx-big: #383b46;
$shop-hint-jx-big: rgb(148, 152, 238);

.skin-shop {
    --shop-decorator-wall: #{$shop-decorator-wall-shio};
    --shop-hint: #{$shop-hint-shio};
    --shop-bg1: #{$shop-bg1-light};
    --shop-bg2: #{$shop-bg2-light};
    --shop-bg2-shadow-ul: #{$shop-bg2-shadow-ul-light};
    --shop-bg2-shadow-br: #{$shop-bg2-shadow-br-light};
    --shop-title: #{$shop-title-light};
    --shop-dialog-border: #{$shop-dialog-border-light};
    --shop-dialog-background: #{$shop-dialog-background-light};
    --shop-dialog-text: #{$shop-dialog-text-light};
    --shop-shadow-product: #{$shop-shadow-product-light};
    --shop-background-product: #{$shop-background-product-light};
    --shop-price-notation: #{$shop-price-notation-light};
}

.skin-shop.skin-shop-jx {
    --shop-decorator-wall: #{$shop-decorator-wall-jx};
    --shop-hint: #{$shop-hint-jx};
    --shop-bg1: #{$shop-bg1-light};
    --shop-bg2: #{$shop-bg2-light};
    --shop-bg2-shadow-ul: #{$shop-bg2-shadow-ul-light};
    --shop-bg2-shadow-br: #{$shop-bg2-shadow-br-light};
    --shop-title: #{$shop-title-light};
    --shop-dialog-border: #{$shop-dialog-border-light};
    --shop-dialog-background: #{$shop-dialog-background-light};
    --shop-dialog-text: #{$shop-dialog-text-light};
    --shop-shadow-product: #{$shop-shadow-product-light};
    --shop-background-product: #{$shop-background-product-light};
    --shop-price-notation: #{$shop-price-notation-light};
}

.skin-shop.skin-shop-jx-big {
    --shop-decorator-wall: #{$shop-decorator-wall-jx-big};
    --shop-hint: #{$shop-hint-jx-big};
    --shop-bg1: #{$shop-bg1-dark};
    --shop-bg2: #{$shop-bg2-dark};
    --shop-bg2-shadow-ul: #{$shop-bg2-shadow-ul-dark};
    --shop-bg2-shadow-br: #{$shop-bg2-shadow-br-dark};
    --shop-title: #{$shop-title-dark};
    --shop-dialog-border: #{$shop-dialog-border-dark};
    --shop-dialog-background: #{$shop-dialog-background-dark};
    --shop-dialog-text: #{$shop-dialog-text-dark};
    --shop-shadow-product: #{$shop-shadow-product-dark};
    --shop-background-product: #{$shop-background-product-dark};
    --shop-price-notation: #{$shop-price-notation-dark};
}

.skin-shop {
    min-width: 1300px;
    min-height: 940px;
    background-color: var(--shop-bg1);
    position: relative;
}

.products-box-container {
    // min-width: 100%;
    // width: max-content;
    height: 940px;
    // position: absolute;
    top: 0;
    left: 0;
    padding-left: 100px;
    padding-top: 260px;
    padding-bottom: 100px;
    padding-right: 300px;
    box-sizing: border-box;
}

.products-frame {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background-color: var(--shop-bg2);
    box-sizing: border-box;
    box-shadow:
        20px 20px 30px var(--shop-bg2-shadow-ul) inset,
        -12px -12px 12px var(--shop-bg2-shadow-br) inset;
    position: relative;
    overflow: hidden;
}

.products-frame-bg-deco1 {
    width: 100%;
    height: 90px;
    position: absolute;
    left: 0;
    bottom: 40px;
    background-color: var(--shop-decorator-wall);
    transform: matrix(1, -0.05, 0, 1, 0, 0);
    transform-origin: 0 100%;
}

.products-frame-bg-deco2 {
    width: 100%;
    height: 30px;
    position: absolute;
    left: 0;
    bottom: 150px;
    background-color: var(--shop-decorator-wall);
    transform: matrix(1, -0.05, 0, 1, 0, 0);
    transform-origin: 0 100%;
}

.figure-container {
    position: absolute;
    right: -280px;
    bottom: -10px;
    pointer-events: none;
    z-index: 4;

    .skin-shop-jx & {
        right: -350px;
    }

    .skin-shop-jx-big & {
        transform: scale(1.2);
        bottom: 60px;
        right: -300px;
    }
}

.figure img {
    filter: drop-shadow(10px 10px 20px #414b5774);
    // opacity: 0;
}

.dialog-container {
    position: absolute;
    right: 280px;
    top: 150px;
    z-index: 3;
}

.dialog {
    font-family: "霞鹜文楷", var(--font-fallback);
    font-size: 32px;
    padding: 20px 40px;
    background-color: var(--shop-dialog-background);
    max-width: 22.2em;
    border: solid 3px var(--shop-dialog-border);
    color: var(--shop-dialog-text);
    filter: drop-shadow(10px 10px 20px #414b5746);
    border-radius: 40px 40px 0 40px;
}

.ui-container {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    pointer-events: none;
}

.ui-upper {
    font-family: '阿里妈妈数黑体', 'HarmonyOS Sans SC', var(--font-fallback);
    font-size: 64px;
    margin-top: 50px;
    margin-left: 35px;
    color: var(--shop-title);
}

.ui-lower {
    grid-row: 3;
    margin-left: 31px;
    margin-bottom: 35px;
    color: white;
    width: 1200px;
    height: 36px;

    & text.text {
        font-family: "HarmonyOS Sans SC", var(--font-fallback);
        font-size: 28px;
        font-weight: 800;
        stroke: black;
        stroke-width: 4px;
        fill: white;
        paint-order: stroke;

        tspan.text-inner {
            fill: var(--shop-hint);
        }
    }
}

.products {
    width: max-content;
    height: 100%;
    position: relative;
    left: 0;
    top: 0;
    padding: 50px;
    // padding-top: 90px;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 350px 1fr;
    gap: 20px;
    z-index: 2;
}

.products-left {
    background-color: var(--shop-background-product);
    color: var(--shop-dialog-text);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 10px 10px 30px var(--shop-shadow-product);
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100%;
}

.products-left .product-img {
    aspect-ratio: 5 / 4;
    width: 350px;
    background-color: rgb(255, 250, 202);
    background: linear-gradient(40deg, rgb(239, 136, 26), rgb(255, 247, 161));
}

.products-left .product-text {
    padding: 20px;
    display: grid;
    grid-template-rows: auto 1fr auto;

    & .product-name {
        font-size: 28px;
        font-weight: 500;
        font-family: "HarmonyOS Sans SC", var(--font-fallback);
        margin-bottom: 10px;

        span {
            font-family: '阿里妈妈数黑体', 'HarmonyOS Sans SC', var(--font-fallback);
            color: rgb(243, 70, 137);
        }
    }

    & .product-price {
        font-size: 28px;
        color: rgb(237, 91, 0);
        font-family: "HarmonyOS Sans SC", var(--font-fallback);
        font-weight: 800;
        grid-row: 3;

        & span {
            font-size: smaller;
            font-weight: 400;
            margin-left: 3px;
        }

        & .price-notation {
            float: right;
            font-weight: 300;
            color: var(--shop-price-notation);
        }
    }
}

.products-right {
    writing-mode: vertical-lr;
    inline-size: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    & .product {
        writing-mode: horizontal-tb;
        width: 175px;
        background-color: var(--shop-background-product);
        color: var(--shop-dialog-text);
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 5px 5px 15px var(--shop-shadow-product);
        display: grid;
        grid-template-rows: auto 1fr;

        & .product-img {
            width: 175px;
            height: 140px;
            background-color: red;
            position: relative;
            overflow: hidden;

            &.product-img-1 {
                background: linear-gradient(40deg, #75C16D, #a3e89b);
            }

            &.product-img-2 {
                background: linear-gradient(40deg, #6F93E7, #94b0f0);
            }

            &.product-img-3 {
                background: linear-gradient(40deg, #996FE0, #b99af0);
            }

            &.product-img-4 {
                background: linear-gradient(40deg, #E8BD5A, #f4d58d);
            }

            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            & .sold-out-mark {
                position: absolute;
                top: 0;
                left: 0;
                color: white;
                width: 175px;
                height: 140px;
                background-color: rgba(0, 0, 0, 0.334);
                backdrop-filter: blur(5px);
                display: flex;
                align-items: center;
                justify-content: center;

                & span {
                    font-size: 36px;
                    font-family: 'HarmonyOS Sans SC', var(--font-fallback);
                    font-weight: 800;
                    transform: rotate(-24deg);
                }
            }
        }

        &:has(.sold-out-mark) {
            opacity: .5;
        }

        & .product-text {
            padding: 12px 15px;
            font-family: 'HarmonyOS Sans SC', var(--font-fallback);
            font-weight: 500;
            display: grid;
            grid-template-rows: auto 1fr auto;

            & .product-name {
                font-size: 20px;

                span {
                    font-family: 'HarmonyOS Sans SC', var(--font-fallback);
                    color: rgb(243, 70, 137);
                    margin-left: 4px;
                    font-size: 16px;
                    position: relative;
                    top: -5px;
                }
            }

            & .product-price {
                font-size: 20px;
                color: rgb(237, 91, 0);
                font-family: "HarmonyOS Sans SC", var(--font-fallback);
                font-weight: 800;
                grid-row: 3;

                & span {
                    font-size: smaller;
                    font-weight: 400;
                    margin-left: 3px;
                }
            }
        }
    }
}
</style>