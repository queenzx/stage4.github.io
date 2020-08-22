<template>
    <div>
        <h1>State</h1>
        <div>
            <!-- 方法一 :视图中使用-->
            <h3>直接使用$store.state.num</h3>
            {{$store.state.num}}

            <!-- 方法二: 在脚本中使用 -->
            <h3>在脚本中使用this.$store</h3>

            showNum: {{showNum}}<br>
            num: {{num}}<br>
            showNum2: {{showNum2}}
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    // mapState方法的返回值就是一个对象
    // 1) 使用自动生成的key,与state属性形同的key
    // 最简单写法,灵活性不是太好
    // computed: mapState(['num'])

    // 2)使用自定义的key
    /* computed:mapState({
        showNum:state=>state.num
    }), */

    computed: {
        // 使用辅助函数mapState
        ...mapState(['num']),
        ...mapState({
            showNum: state=>state.num,
            // 普通函数写法
            /* showNum: function(state){
                return state.num
            }, */
            showNum2: state=>state.num
        }),
        // 在computed中使用$store对象
        /* showNum(){
            return this.$store.state.num;
        } */
    },

    // computed只能写一次
}
</script>