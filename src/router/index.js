import { createRouter, createWebHistory } from "vue-router";


let routes= [
  {
    path: '/',
    name: 'login',
    //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
    component: () => import('@/views/logIn.vue')

  },
  {
    path:'/homeIndex',
    name:'home',
    component:() => import('@/views/homeIndex.vue')
  },
  {
    path:'/learnData',
    name:'learnData',
    component:() => import('@/views/learn/learnData.vue')
  },
  {
    path: '/myClass',
    name:'myClass',
    component:()=>import('@/views/learn/myClass.vue')
  }
  // {
  //     // 配置404页面
  //     path: '/:catchAll(.*)',
  //     name: '404',
  //     component: () => import(''),
  // }
]
// 路由
const router = createRouter({
  history: createWebHistory(),
  routes
})
// 导出
export default router
