<template>
    <div class="page">
        <div class="header">
            <div class="all">
                <!-- 循环数据在点击调用changeli方法时将当前索引和本条数据传进去,并使用当前数据show的bool值添加或移除样式 -->
                <div class="li-frist" @click="changeli(index,item)" v-for="(item,index) in headerData">
                    <!-- 在这里打印出boll值方便查看 -->
                    <div class="title">
                        <img class="icon-left" src="../assets/stop.png">{{item.name}}
                        <div class="icon-right" v-if='item.show'>
                            <x-icon type="ios-arrow-up"></x-icon>
                        </div>
                        <div class="icon-right" v-else>
                            <x-icon type="ios-arrow-down"></x-icon>
                        </div>
                    </div>
                    <!-- 判断当前这条数据的bool值如果是true就打开二级菜单,如果是false就关闭二级菜单 -->
                    <div class='text' v-show='item.show'>
                        <div class="text-detil">{{item.text}}</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import { Rater, Swiper, SwiperItem, Flexbox, FlexboxItem, Divider } from "vux";

export default {
    name: "Money",
    data() {
        return {
            headerData: [
                {
                    name: "账户余额",
                    text:
                        "账户的所有可用余额可对意生活商城的所有商品进行购买，参与商城推广或活动所获的现金奖励也会提拨在账户余额中。账户余额可进行提现（需绑定微信支付钱包），但不可对商城其他好友进行转汇。",
                    show: false
                },
                {
                    name: "资金暂冻结",
                    text:
                        "当提交一笔交易或余额提现时（含推荐奖励），在交易整个未全部完成时，支出都会先放置于”暂冻结”中，当交易确认结束后，被冻结的金额才会进行结冻拨给。交易失败或取消时，系统会主动对被冻结的支出或提现金额，进行退还。",
                    show: false
                }
            ]
        };
    },
    methods: {
        changeli: function(ind, item) {
            // 先循环数据中的show将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
            this.headerData.forEach(i => {
                // 判断如果数据中的headerData[i]的show属性不等于当前数据的show属性那么headerData[i]等于false
                if (i.show !== this.headerData[ind].show) {
                    i.show = false;
                }
            });
            // 取反(true或false)
            item.show = !item.show;
            console.log(item.name);
        },
        doThis: function(e) {
            alert(e);
        }
    }
};
</script>
<style lang="less" scoped>
html {
    background-color: #f0f0f0;
    overflow-x: hidden;
}
.page {
    height: 100%;
    position: fixed;
    width: 100%;
    background-color: #f0f0f0;
}
.border {
    border: 1px solid #f0f0f0;
    width: 338px;
    position: absolute;
    top: 42px;
    left: 10px;
}
.header {
    position: relative;
    background-color: white;
    width: 93.9%;
    margin-left: 12px;
    margin-top: 10px;
    border-radius: 12px;
}

.li-frist {
    padding-left: 46px;

    border-bottom: 1px solid #f0f0f0;
    padding-top: 4px;
}
.title {
    position: relative;
    height: 40px;
    line-height: 40px;
    font-family: PingFangSC-Regular;
}
.all {
    width: 100%;
    background-color: white;
    border-radius: 12px;
}
.icon-left {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    left: -36px;
}
.icon-right {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
}
.left {
    width: 30px;
    height: 30px;
}
.about-title {
    position: absolute;
    top: 10px;
    left: 158px;
}
.ul-two {
    background-color: #eee;
    margin-left: -46px;
}

.text {
    background-color: #f2f2f2;
    color: #333;
    margin-left: -46px;
}
.text-detil {
    color: #666;
    background-color: white;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 14px;
    padding-bottom: 14px;
    font-size: 16px;
    line-height: 24px;
    border-top: 1px solid #f0f0f0;
    font-family: PingFangSC-Regular;
}
</style>