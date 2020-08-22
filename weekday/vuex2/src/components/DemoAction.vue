<template>
    <div>
        <h1>Action</h1>
        <button @click="add">增加</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    // 方式1: 写法太复杂
    /* methods: {
        add(){
            // getters派发事件给mutation执行的
            // 派发的是getters中定义的方法名
            // 在该方法中再提交给mutation
            this.$store.dispatch('increase');
        }
    }, */
    // 方式2: 使用自定义的key
    // methods: mapActions(['increase']),

    // 方式3: 混入式 使用辅助函数
    methods: {
        ...mapActions(['increase']),
        add(){
            // getters派发事件给mutation执行的
            // 派发的是getters中定义的方法名
            // 在该方法中再提交给mutation
            // this.$store.dispatch('increase');
            this.increase();
        }
    },
}
</script>