<template>
    <div>
        <h1>商品列表</h1>
        <table cellspacing=0>
            <tr>
                <td>商品编号</td>
                <td>商品名称</td>
                <td>商品单价</td>
                <td>操作</td>
            </tr>
            <tr v-for="(p,i) in props" :key="i">
                <td>{{p.id}}</td>
                <td>{{p.name}}</td>
                <td>{{p.price}}</td>
                <td>
                    <button @click="reduce(p)">-</button>&nbsp;
                    <button @click="add(p)">+</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import {mapGetters, mapState,mapMutations} from 'vuex'
export default {
    data() {
        return {
            props:[
                {id:1,name:'海尔',price:3000,count:1},
                {id:2,name:'华为',price:4000,count:1},
                {id:3,name:'小米',price:2000,count:1},
                {id:4,name:'联想',price:4500,count:1},
                {id:5,name:'戴尔',price:3200,count:1},
            ]
        }
    },
    computed: {
        ...mapState(["products"]),
        ...mapGetters(["cartPro"])
    },
    methods: {
        ...mapMutations(["addPro","addCount","reduceCount"]),
        add(p){0
            let cart = this.cartPro;
            let f = false;// 假设没有
            for(let i=0;i<cart.length;i++){
                if(p.name==cart[i].name){
                    f = true;
                    // 重复的商品,数量增加1
                    // cart[i].count++;//状态不会变化
                    this.addCount({idx:i});
                    break;
                }
            }
            if(!f){ // 没有,添加
                this.addPro({
                    pro:p
                })
            }else{//已存在,增加里面的count
                
            }
        },
        reduce(p){
            this.reduceCount({name:p.name});
        }
    },
}
</script>

<style scoped>
    table{
        width: 60%;
        margin: 0 auto;
        border:1px solid black;
    }    
    td{
        line-height: 40px;
        border: 1px solid black;
    }
    button{
        width:30%;
    }
</style>