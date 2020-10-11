import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/index'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import Header from '@/components/home/Header'
import Register from '@/views/Register.vue'
import Option from '@/views/Option.vue'
import AddUav from '@/components/option/uavserver/AddUav.vue'
import LookUav from '@/components/option/uavserver/LookUav.vue'
import BuySafe from '@/components/option/uavserver/BuySafe'
import Vip from '@/components/option/uavserver/Vip'
import Message from '@/components/option/uavserver/Message'
import Fix from '@/components/option/uavserver/Fix'
import Vipcn from '@/components/option/uavserver/Vipcn'
import Police from '@/components/option/uavserver/Police'
import Personal from '@/components/option/uavserver/Personal'
import Changepwd from '@/views/Changepwd'
Vue.use(VueRouter)

const routes = [
  // 路由重定向
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name:Home,
    component: Home
  },
  {
    path:"/header",
    component:Header,
  },
  {
    path: '/login',
    name:Login,
    component: Login
  },
  {
    path: '/changepwd',
    name: Changepwd,
    component:Changepwd
  },
  {
    path: '/register',
    name:Register,
    component: Register
  },
  {
    path:'/option',
    name:Option,
    component:Option,
    children:[
      {
        path:'/adduav',
        name:'AddUav',
        component:AddUav
      },
      {
        path:'/lookuav',
        name:'LookUav',
        component:LookUav
      },
      {
        path:'/buysafe',
        name:'BuySafe',
        component:BuySafe
      },
      {
        path:'/vip',
        name:'Vip',
        component:Vip
      },
      {
        path:'/message',
        component:Message
      },
      {
        path:'/fix',
        name:"Fix",
        component:Fix
      },
      {
        path:"/vipcn",
        component:Vipcn,
      },
      {
        path:'/police',
        component:Police
      },
      {
        path:'/personal',
        component:Personal,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to,from,next)=>{
  // 判断跳转的页面是否存在
  if(to.name==null){
    next('/')
  }
  // 表示去登录页面和注册页面
  if(to.path === '/login' || to.path === '/register' || to.path === '/changepwd') return next()
  // 已经登录
  const tokenStr = window.sessionStorage.getItem('token')
  if(tokenStr) return next()
  // 未登录去访问其它页面
  next('/login')
})
export default router
