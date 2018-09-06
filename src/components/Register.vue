<template>
    <div>
        <div class="null"></div>
        <div class="invite">
            邀请注册
        </div>
        <div class="logo-all"><img class="logo" src="../assets/logo_default_01@2x.png"></div>
        <input class="ipt" style="margin-top:40px;" maxlength="11" v-model="mobile" type="text" placeholder="请输入手机号码">
        <div class="border"></div>
        <div style="position:relative;">
            <input class="ipt" style="margin-top:14px;" v-model="code" type="number" placeholder="请输入手机验证码">
            <div class="hqcode" @click="sendCodeAction">{{counter === 0 ? '发送验证码' : `${counter} S`}}</div>
        </div>

        <div class="border"></div>
        <div class="registered" @click="getShareContent">注册</div>
        <img class="bottom-pic" src="../assets/dl_img_pressed_01 @2x.png">
    </div>
</template>
<script type="text/javascript">
import { Rater, Swiper, SwiperItem, Flexbox, FlexboxItem, Divider } from "vux";
import weui from "weui.js";
import Detect from "mobile-detect";
import axios from "axios";
let detector = require("detector");
const uuidv4 = require("uuid/v4");
console.log("uuidv4", uuidv4);
export default {
    name: "Login",
    data() {
        return {
            incode: "",
            serviceid: this.$route.query.serid,
            services: [],
            item: {},
            tags: {},
            itemsku: {},
            url: "",
            itemAttr: [],
            skuValue: {},
            nickname: "",
            mobile: "",
            code: "",
            counter: 0,
            incode: ""
        };
    },
    mounted: function() {
        this.incode = this.$route.query.incode;
        this.getSystem();
        console.log("设备版本", detector.device);
    },
    methods: {
        getSystem() {
            let ua = window.navigator.userAgent;
            console.log("ua", ua);
            console.log("Detect", Detect);
            let name = detector.device.name;
            let instance = new Detect(ua);
            let os = instance.os();
            console.log("系统", os);
            let version = "";
            let model = "";
            let id = uuidv4();
            if (os == "iOS") {
                //ios系统的处理
                version = instance.version("iPhone");
                model = instance.mobile();
            } else if (os == "AndroidOS") {
                //Android系统的处理
                version = instance.version("Android");
                var sss = ua.split(";");
                var i = this.contains(sss, "Build/");
                if (i > -1) {
                    model = sss[i].substring(0, sss[i].indexOf("Build/"));
                }
            }
            console.log(
                "brand=",
                model,
                "os=",
                os,
                "model=",
                name,
                "version=",
                version
            );
            return {
                brand: model,
                osname: os,
                osversion: version,
                brandmodel: name,
                version: "H5",
                uuid: id
            };
        },

        contains(arr, str) {
            for (let i in arr) {
                if (arr[i].indexOf(str) > -1) {
                    return i;
                }
            }
            return -1;
        },
        getShareContent() {
            let that = this;
            let headers = this.getSystem();

            const { mobile, code } = this.$data;
            if (mobile === "") {
                weui.topTips("请输入手机号码");
            } else if (code === "") {
                weui.topTips("请输入手机验证码");
            } else {
                this.$http
                    .post(
                        "/memberh5/register",
                        {
                            incode: this.incode,
                            mobile: this.mobile,
                            code: this.code
                        },
                        { headers }
                    )
                    .then(res => {
                        console.log(res);
                        if (res.data.result == "1") {
                            this.$router.push("/download");
                        } else {
                            weui.topTips(res.data.msg);
                        }
                    })
                    .catch(e => {
                        weui.topTips("网络请求失败！");
                    });
            }
        },
        getCode(data) {
            return this.$http.post("/sms/h5checkcode", data);
        },
        async sendCodeAction() {
            console.log("点击验证码");
            if (this.counter === 0) {
                try {
                    const mobile = this.mobile;
                    if (mobile === "") {
                        weui.topTips("请输入手机号码");
                    } else {
                        const regexp = /(^1[2|3|4|5|6|7|8]\d{9}$)|(^09\d{8}$)/;
                        if (regexp.test(mobile)) {
                            const result = await this.getCode({
                                mobile: this.mobile
                            });
                            if (result.data.result === "1") {
                                this.errorText = "";
                                this.counter = 60;
                                let timer = setInterval(() => {
                                    if (this.counter === 0) {
                                        clearInterval(timer);
                                    } else {
                                        this.counter--;
                                    }
                                }, 1000);
                            } else {
                                weui.topTips(result.data.msg);
                            }
                        } else {
                            console.log("weui 提示");
                            weui.topTips("手机号码格式不正确");
                        }
                    }
                } catch (e) {
                    throw e;
                }
            }
        }
    }
};
</script>
<style lang="less" scoped>
html {
    background-color: #fff;
    overflow-x: hidden;
}
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
    padding-top: 15px;
}
.logo {
    width: 76px;
    height: 76px;
}
.ipt {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: black;
    letter-spacing: 0;
    line-height: 14px;
    margin-left: 12.3%;
    margin-top: 42px;
    border: 0px;
    width: 300px;
    height: 20px;
}
input:focus {
    outline: none !important;
    border: 0px;
}
:placeholder {
    color: #999999;
}

.border {
    border: 1px solid #f0f0f0;
    margin-left: 10.4%;
    margin-top: 16px;
    width: 80%;
}
.hqcode {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #20b7b4;
    letter-spacing: 0;
    line-height: 14px;
    width: 70px;
    height: 14px;
    position: absolute;
    right: 11.7%;
    top: 16px;
}
.registered {
    background: #20b7b4;
    border-radius: 8px;
    width: 80%;
    height: 44px;
    margin-left: 10%;
    text-align: center;
    line-height: 44px;
    margin-top: 8.4%;
    color: white;
}
.weui-toptips {
    position: absolute;
    top: 60%;
    left: 50%;
}
.bottom-pic {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>