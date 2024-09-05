<!-- 
    注意力1111
    当前界面只是为了暂时将小镜商店迁移到前端而设计
    这个界面会在未来的什么时候弃用的
-->

<script setup lang="ts">
import { load } from '../../common/get_data'
import { ShopDisplay } from '../../types/xjshop'
import default_data from '../../pre_data/xjshop.json'
import BookBox from '../../components/BookBox.vue'

const shop = load<ShopDisplay>(default_data)
</script>

<template>
    <div class="page">
        <img src="../../assets/kagami_shop.png" />
        <div class="content">
            <div class="head">
                欢迎来到小镜商店，<u>{{ shop.user.name }}</u>！
                <br />
                你现在有 <u>{{ shop.chips }}</u> 薯片，输入 <code>小镜商店 购买 商品名</code> 就可以购买商品了哦！
            </div>
            <div class="product-groups">
                <div v-for="(group, index) in shop.products" :key="index" class="product-group">
                    <div class="title">{{ group.group_name }}</div>
                    <div class="products">
                        <!-- eslint-disable-next-line vue/first-attribute-linebreak -->
                        <BookBox v-for="(product, index2) in group.products" :key="index2"
                            :display_box="product.display_box" :title1="product.title1" :title2="product.title2"
                            class="product" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page {
    background-color: #9B9690;
    color: white;
    padding-bottom: 60px;

    /*
     * 这里可以这么搞，主要是因为有一个 img 在这里撑着页面宽度不溢出
     */
    max-width: min-content;
    overflow: hidden;

    .content {
        padding: 0 40px;

        .head {
            font-size: 24px;
            font-family: 'HarmonyOS Sans SC', var(--font-fallback);
            font-weight: 700;
            margin-top: 30px;

            code {
                background-color: #0003;
                font-family: 'HarmonyOS Sans SC', var(--font-fallback);
                color: rgb(237, 198, 130);
                padding: 4px 12px;
                border-radius: 8px;
                border: solid 2px #0002;
            }
        }

        .product-groups {
            .product-group {
                .title {
                    font-size: 45px;
                    font-family: '荆南俊俊体', '阿里妈妈数黑体', 'Maple UI', var(--font-fallback);
                    margin-top: 30px;
                }

                .products {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    margin: 0 40px;
                }
            }
        }
    }
}
</style>
