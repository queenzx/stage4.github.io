import Vue from 'vue'
import VueRouter from 'vue-router'
import DemoState from './components/DemoState.vue'
import DemoGetters from './components/DemoGetters.vue'
import DemoMutation from './components/DemoMutation.vue'
import DemoAction from './components/DemoAction.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,//配置、接口代理以及其他配置
  routes:[
    {
      path:'/',
      component:DemoState
    },
    {
      path:'/getter',
      component:DemoGetters
    },
    {
      path:'/mutation',
      component:DemoMutation
    },
    {
      path:'/action',
      component:DemoAction
    }
  ]
})

export default router
