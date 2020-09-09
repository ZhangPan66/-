import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
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
    path: '/login',
    name:Login,
    component: Login
  },
  {
    path: '/register',
    name:Register,
    component: Register
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
  if(to.path === '/login' || to.path === '/register') return next()
  // 表示未登录去访问其它页面
  const tokenStr = window.sessionStorage.getItem('token')
  // 已经登录
  if(tokenStr) return next()
  next('/login')
})
export default router
