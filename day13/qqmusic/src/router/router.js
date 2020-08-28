import Vue from 'vue'
import VueRouter from 'vue-router'
import Rank from '@comp/rank/rank.vue'
import Recommend from '@comp/recommend/recommend.vue'
import Search from '@comp/search/search.vue'
import Singer from '@comp/singer/singer.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/',
            redirect:'/recommend'
        },
        {
            path:'/recommend',
            component:Recommend
        },
        {
            path:'/rank',
            component:Rank
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/singer',
            component:Singer
        }
    ]
})