<template>
    <div class="show">
        <h1>
            <!-- {{lists}} -->
            <!-- 当前激活的路由对象的id -->
            <!-- {{$route.params.id}} -->
            <!-- {{`http://www.biquge.info/list/${$route.params.id}_1.html`}} -->
        </h1>
        <ul>
            <li v-for="(item,k) in lists" :key="k">
                <img :src="item.img" alt="" @click="choose(item)">
                <p>
                    <span class="name" @click="choose(item)">{{item.name}}</span>
                    <span class="author">{{item.author}}</span>
                </p>
                <p class="desc">{{item.desc}}</p>
            </li>
        </ul>
        <!-- 渲染出口 -->
        <router-view></router-view>
    </div>
</template>

<script>
import util from '../api/getData.js'

export default {
    data() {
        return {
            lists:[]
        }
    },
    created() {
        // 获取id
        let id = this.$route.params.id;
        // 只负责调用
        this._getNovelList(id);
    },
    beforeRouteUpdate (to, from, next) {
        this._getNovelList(to.params.id);
        next();
    },
    methods: {
        // 真正做事情
        _getNovelList(id){
            util.getNovelList(id).then(data=>{
                // console.log(data);
                this.lists = data;
            }).catch(err=>{
                console.log(err);
            });
        },
        choose(item){
            // 切换路由到某小说列表组件
            // console.log(item);
            // 使用编程式导航切换路由
            // let id = this.$route.params.id;
            this.$router.push({
                /* path:`/${id}/${item.name}`,
                query:{//使用path时不能使用params
                    url:item.path,
                    name:item.name
                } */
                name:`chapter`,
                params:{
                    url:item.path,
                    name:item.name
                }
            });
        }
    },
}
</script>

<style scoped>
    .show{
        position: relative;
    }
    ul{
        list-style:none;
        font-size:16px;
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
    }
    li{
        width:500px;
        height:200px;
        /* border:1px solid red; */
        background:#E9FAFF;
        float: left;
        margin: 10px;
    }
    img{
        width:120px;
        height:150px;
        float: left;
        margin-right: 10px;
        margin-top: 20px;

    }
    p .name{
        font-weight:bold;
        font-size:20px;
        color:steelblue;
        float: left;
        margin-left:5px;
    }
    p .name:hover{
        color: red;
        text-decoration: underline;
    }
    p .author{
        float: right;
        margin-right:10px;
        font-weight: bold;
    }
    .desc{
        float: right;
        width:350px;
        margin-left:15px;
        margin-top:5px;
        text-align: left;
        text-indent:2em;
    }
</style>