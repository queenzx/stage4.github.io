<template>
    <div>
        <h1>歌手列表</h1>
        <ul>
            <li v-for="(s,k) in singers" :key="k" @click="choose(s.url)">
                {{ s.name }}
            </li>
        </ul>
        <!-- 渲染出口 -->
    <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            singers:[
                {name:'刘德华',url:'ldx'},
                {name:'张学友',url:'zxy'},
                {name:'郭富城',url:'gfc'},
                {name:'黎明',url:'lm'}
            ]
        }
    },
    methods: {
        choose(url){
            // 使用编程式导航进行路由的切换
            // this.$router.push(url);//相对路径,不能显示
            this.$router.push('/singer/'+url);//绝对路径
        }
    },
}
</script>

<style scoped>
    div{
        width:60%;
        margin:0 auto;
    }
    ul{
        list-style:none;
        display:flex;
        justify-content: space-around;
    }
    li{
        color:darkblue;
    }
    li:hover{
        cursor: pointer;
        color:skyblue;
        text-decoration:underline;
    }
</style>