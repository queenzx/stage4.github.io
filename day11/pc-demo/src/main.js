import Vue from 'vue'
import store from './store.js'
import router from './router'
import App from './App.vue'

new Vue({
    router,
    store,
    render: h=>h(App)
}).$mount('#app')
