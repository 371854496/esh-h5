<template>
  <div class="page">
    <img class="itempic" :src="item.picurl">
    <div class="detil-all">
      <div class="rmbfh">¥{{item.price}}</div>
      <img class="yb-pic" src="../assets/yb_default_01@3x.png">
      <div class="yb-price">{{item.yibprice}}</div>
      <div class="item-detil">{{item.title}}</div>
      <div class="from" v-if='tags.length'>来自{{tags[0].name}}</div>
      <div class="money-pay">现金支付赠{{item.returnyib}}意币</div>
      <div class="time" v-if='item.isonsale'>特价截止：{{item.onsaletime}}</div>
      <div class="border"></div>
    </div>
    <div class="sp-all">
      <div class="item-all">
        <div class="shu"></div>
        <div class="sp">商品详情图</div>
        <div class="no-introduction" v-if='!item.description'> 暂无介绍</div>
      </div>
      <img class="detil-pic" :src="item.description">
    </div>
    <div class="downloadapp" @click="jump">我要购买</div>

  </div>
</template>
<script type="text/javascript">
import { Rater, Swiper, SwiperItem, Flexbox, FlexboxItem, Divider } from "vux";
export default {
    name: "Itemdetails",
    data() {
        return {
            itemid: "",
            serviceid: this.$route.query.serid,
            services: [],
            item: {},
            tags: {},
            itemsku: {},
            url: "",
            itemAttr: [],
            skuValue: {},
            incode: ""
        };
    },
    created() {},
    mounted: function() {
        //获取url中的参数
        this.itemid = this.$route.query.itemid;
        this.incode = this.$route.query.incode || "";
        this.getShareContent();
    },
    methods: {
        getShareContent() {
            let that = this;
            this.$http
                .post("/share/get", {
                    itemid: this.itemid,
                    incode: this.incode
                })
                .then(res => {
                    if (res.data.result == "1") {
                        this.item = res.data.data.item || {};
                        this.tags = res.data.data.tags || {};
                        console.log("this.tags", this.tags);
                        this.url = res.data.data.url;
                        this.formatSku(res.data.data.itemsku);
                    }
                });
        },
        jump() {
            let that = this;
            //跳转路由并传参数
            this.$router.push(
                "/login" + (this.incode ? "?incode=" + this.incode : "")
            );
        },
        formatSku(itemsku) {
            if (!itemsku.length) {
                this.itemAttr = [];
                this.skuValue = {};
                console.log(this.itemAttr, this.skuValue);
                return;
            }
            let temp1 = itemsku[0].attrvalue || "{}";
            let skuObj = JSON.parse(temp1);
            let arr = (this.itemAttr = Object.keys(skuObj));
            let skuValue = {};
            arr.forEach(it => {
                skuValue[it] = [];
            });
            itemsku.forEach(it => {
                let obj = JSON.parse(it.attrvalue);
                Object.keys(obj).forEach(key => {
                    let val = skuValue[key];
                    if (val.indexOf(obj[key]) == -1) {
                        val.push(obj[key]);
                    }
                });
            });
            this.skuValue = skuValue;
            console.log(this.itemAttr, this.skuValue);
        },
        download(e) {
            console.log(this.item);
            window.location.href = e;
        }
    }
};
</script>
<style lang="less" scoped>
/*新*/
html {
    background-color: #f0f0f0;
}
body {
    margin-bottom: 0px;
}
.page {
    width: 100%;
    height: 100%;
}
.itempic {
    width: 100%;
    height: 375px;
}
.detil-all {
    width: 100%;
    height: 160px;
    position: relative;
    background-color: white;
}
.rmbfh {
    font-family: PingFangSC-Regular;
    font-size: 20px;
    color: #990114;
    letter-spacing: 0;
    line-height: 20px;
    position: absolute;
    top: 16px;
    left: 3.2%;
}
.yb-pic {
    width: 16px;
    height: 16px;

    position: absolute;
    top: 21px;
    left: 28.8%;
}
.yb-price {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #20b7b4;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    top: 21px;
    left: 34.4%;
}
.item-detil {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    line-height: 20px;
    position: absolute;
    top: 58px;
    left: 3.2%;
    width: 90.1%;
    height: 40px;
}
.from {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    line-height: 14px;
    width: 31.2%;
    height: 14px;
    position: absolute;
    top: 104px;
    left: 3.2%;
}
.money-pay {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #ffffff;
    background: #20b7b4;
    border-radius: 4px;
    letter-spacing: 0;
    line-height: 17px;
    text-align: center;
    width: 28.3%;
    height: 18px;
    position: absolute;
    top: 128px;
    left: 3.2%;
}
.time {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    text-align: right;
    line-height: 14px;
    position: absolute;
    top: 130px;
    right: 4.2%;
    width: 160px;
    height: 14px;
}
.downloadapp {
    background-image: linear-gradient(90deg, #44d6cd 0%, #5ae6ae 100%);
    height: 50px;
    width: 100%;
    color: #ffffff;
    text-align: center;
    line-height: 50px;
}
.border {
    width: 96.5%;
    border: 1px solid #f0f0f0;
    position: absolute;
    top: 160px;
    left: 3.2%;
}
.sp-all {
    width: 100%;
    background-color: white;
    margin-top: 10px;
}
.item-all {
    width: 100%;
    height: 100%;
    position: relative;
}
.shu {
    background: #20b7b4;
    border-radius: 100px;
    width: 4px;
    height: 20px;
    position: absolute;
    top: 13px;
    left: 3.2%;
}
.sp {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    line-height: 14px;
    width: 100px;
    height: 14px;
    position: absolute;
    top: 16px;
    left: 6.9%;
}
.no-introduction {
    height: 200px;
    line-height: 200px;
    text-align: center;
}

.detil-pic {
    padding-top: 40px;
    width: 100%;
}
</style>