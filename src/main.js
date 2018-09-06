// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'weui'
import { WechatPlugin } from 'vux'
import qs from 'qs'

Vue.config.productionTip = false;
//http://192.168.199.174:8083/admin小航本地
//https://api.handaogroup.com/admin正式服
let testapi='http://eaapi.lormi.net/admin'//测试服
let api = 'https://api.handaogroup.com/admin'; //配置接口地址
//http://192.168.199.230 阿旺本地
axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
axios.defaults.baseURL = api;

Vue.prototype.$http = axios;
axios.interceptors.request.use(config=>{
	config.data = qs.stringify(config.data);
	return config;
})
Vue.use(WechatPlugin)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
