<template>
    <div>
        <h1>我的购物车</h1>
        <!-- {{cartPro}} -->
        <table cellspacing=0>
            <tr>
                <th>商品名称</th>
                <th>商品单价</th>
                <th>商品数量</th>
                <th>金额</th>
                <th>操作</th>
            </tr>
            <tr v-for="(p,i) in cartPro" :key="i">
                <td>{{p.name}}</td>
                <td>{{p.price}}</td>
                <td>{{p.count}}</td>
                <td>{{p.price*p.count}}</td>
                <td>
                    <span @click="del(i)">删除该商品</span>
                </td>
            </tr>
            <tr v-if="cartPro.length!=0">
                <td>合计</td>
                <td colspan=4>{{total}}</td>
            </tr>
            <tr v-else>
                <td colspan="5" class="empty">
                    <i>购物车空空如也~~~~</i>
                </td>
            </tr>
        </table>
        <p>
            <button @click="buy">结算</button>
        </p>
    </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex';
export default {
    computed: {
        ...mapGetters(['cartPro']),
        // cartPro(){return cartPro}
        total(){
            // 总金额
            let sum = 0;
            let cart = this.cartPro;
            for(let i=0;i<cart.length;i++){
                sum += cart[i].price * cart[i].count;  
            }
            return sum;
        },
    },
    methods: {
        ...mapMutations(["removePro","removeAll"]),
        del(i){
            this.removePro({idx:i});
        },
        buy(){
            this.removeAll();
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
    th,td{
        line-height: 40px;
        border: 1px solid black;
    }
    span{
        text-decoration:underline;
    }
    span:hover{
        cursor: pointer;
        color: salmon;
    }
    p{
        width: 60%;
        float: right;
    }
</style>