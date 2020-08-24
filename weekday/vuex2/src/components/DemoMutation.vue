<template>
    <div>
        <h1>Mutation</h1>
        <!-- <button @click="addNum">数字增加</button> -->
        <button @click="add">数字增加</button><br>
        <input type="text" v-model="fruit">
        <button @click="buyFruit">添加水果</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    data() {
        return {
            fruit:'' 
        }
    },
    // 方式1: 使用定义好的方法名,不能扩展
            // 要保持方法名与定义好的一致
    // methods: mapMutations(['addNum'])

    // 方式2:
    /* methods:mapMutations({
        add:'addNum'
    }), */

    // 方式3:
    /* methods: {
        add(){
            // 方式1: 写起来麻烦
            // 修改修改状态,通过mutation提交事件
            // this.$store.commit('addNum');
        }
    }, */

    // 混入
    methods: {
        ...mapMutations(['addNum','addFruit']),
        add(){
            // 方式1: 写起来麻烦
            // 修改修改状态,通过mutation提交事件
            // this.$store.commit('addNum');
            // 调用辅助函数的方法
            this.addNum();
        },
        buyFruit(){
            this.addFruit({
                fruit:this.fruit
            })
            this.fruit = '';
        }
    },
    
}
</script>