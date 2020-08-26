import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './components/Main.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/',
            component:Main
        }
    ]
})