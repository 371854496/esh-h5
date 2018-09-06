<template>
  <div>
    <div class="null"></div>
    <div class="invite">
      下载安装
    </div>
    <div class="logo-all"><img class="logo" src="../assets/dfdd_icon_default_01@2x.png"></div>
    <div style="height:12px;"></div>
    <div class="msg">恭喜注册成功</div>
    <div style="height:12px;"></div>
    <!-- <div @click="download"></div> -->
    <!-- <a href="https://www.baidu.com"> -->
      <div class="download" @click="download">下载安装</div>
    <!-- </a> -->
    <img class="bottom-pic" src="../assets/dl_img_pressed_01 @2x.png">
  </div>
</template>
<script type="text/javascript">
import { Rater, Swiper, SwiperItem, Flexbox, FlexboxItem, Divider } from "vux";
export default {
    name: "download",
   mounted: function() {
    
    },
  methods: {
   download(e) {
            var u = navigator.userAgent;
            if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)
            {
                console.log("安卓手机");                                              //安卓手机
                window.location.href = "https://www.pgyer.com/aJUK";
            }
            else if (u.indexOf('iPhone') > -1)
            {
                console.log("苹果手机");                                             //苹果手机
                window.location.href = "https://www.pgyer.com/02dd889e561a9b1355424e7531dee997";
            }
            else if (u.indexOf('Windows Phone') > -1)
            {
                console.log("winphone手机");                                         //winphone手机
                // window.location.href = "mobile/index.html";
            }
        }
    },
};
</script>
<style lang="less" scoped>
.null {
    height: 28px;
}
.invite {
    font-family: PingFangSC-Regular;
    font-size: 19px;
    color: #333333;
    letter-spacing: -0.41px;
    text-align: center;
}
.logo-all {
    text-align: center;
    padding-top: 206px;
}
.logo {
    width: 26px;
    height: 26px;
}
.msg {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
    line-height: 16px;
}
.long-msg {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    text-align: center;
    line-height: 14px;
}
.ewm {
    border: 1px solid black;
    width: 150px;
    height: 150px;
    margin-left: 30%;
    margin-top: 40px;
}
.download {
    background: #20b7b4;
    border-radius: 8px;
    width: 80%;
    height: 44px;
    margin-left: 10%;
    text-align: center;
    line-height: 44px;
    margin-top: 70px;
    color: white;
}
.bottom-pic {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>