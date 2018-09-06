import Vue from 'vue'
import Router from 'vue-router'
import Itemdetails from '@/components/Itemdetails'
import Aboutyib from '@/components/Aboutyib'
import Minyib from '@/components/Minyib'
import Money from '@/components/Money'
import Security from '@/components/Security'
import Reward from '@/components/Reward'
import Introduce from '@/components/Introduce'
import Vipintroduce from '@/components/Vipintroduce'
import Register from '@/components/Register'
import Protocal from '@/components/Protocal'
import Login from '@/components/Login'
import Download from '@/components/Download'
Vue.use(Router)


export default new Router({
  routes: [
   {
      path: '/itemdetailspage',
      name: 'Itemdetails',
      component: Itemdetails,
      alias:'/itemdetails'
    },
   {
      path: '/Aboutyibpage',
      name: 'Aboutyib',
      component:Aboutyib,
      alias:'/aboutyib'
    },
    {
      path: '/Minyibpage',
      name: 'Minyib',
      component: Minyib,
      alias:'/minyib'
    },
    {
      path: '/Moneypage',
      name: 'Money',
      component: Money,
      alias:'/monery'
    },
    {
      path: '/Securitypage',
      name: 'Security',
      component: Security,
      alias:'/security'
    },
    {
      path: '/Rewardpage',
      name: 'Reward',
      component: Reward,
      alias:'/reward'
    },
    {
      path: '/Protocalpage',
      name: 'Protocal',
      component: Protocal,
     alias:'/protocal'
    },
      {
      path: '/Introducepage',
      name: 'Introduce',
      component: Introduce,
      alias:'/introduce'
    },
      {
      path: '/Vipintroducepage',
      name: 'Vipintroduce',
      component: Vipintroduce,
      alias:'/vipintroduce'
    },   
    
    {
      path: '/Registerpage',
      name: 'Register',
      component: Register,
      alias:'/register'
    },
    {
      path: '/Loginpage',
      name: 'Login',
      component: Login,
      alias:'/login'
    },
    {
      path: '/Downloadpage',
      name: 'Download',
      component: Download,
      alias:'/download'
    },
  ]
})
