<template>
    <div class="chapter">
        <h1>{{$route.params.name}}</h1>
        <div class="close" @click="close">X</div>
        <div class="row">
            <div v-for="(c,i) in chapters" :key="i" class="col-sm-4" @click="choose(c)">
                {{ c.title }}
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import util from '../api/getData.js'

export default {
    data() {
        return {
            chapters:[]
        }
    },
    methods: {
        _getChapter(){
            let url = this.$route.params.url;
            util.getChapter(url).then(data=>{
                this.chapters = data;
            });
        },
        close(){
            // this.$router.go(-1);
            this.$router.back();
        },
        choose(chapter){
            // 切换路由到某个章节组件
            console.log(chapter);
            this.$router.push({
                name:`content`,
                params:{
                    url:chapter.url,
                    title:chapter.title
                }
            });
        }
    },
    created() {
        this._getChapter();
    },
}
</script>
<style scoped>
    .chapter{
        position: absolute;
        top:0;left:0;
        right:0;bottom:0;
        background:#E9FAFF;
        z-index:5;
        width:90%;
        height:700px;
        margin:0 auto;
    }
    .close{
        height: 20px;
        width: 20px;
        position: absolute;
        top: 15px;
        right: 25px;
        cursor: pointer;
    }
    .row{
        text-align: left;
        width:100%;
        margin:0 1px;
        height:650px;
        overflow-y:scroll;
    }
    .row>div{
        border-bottom: 1px dashed #CCCCCC;
        height: 25px;
        line-height: 200%;
        margin-bottom: 5px;
        text-indent: 10px;
        vertical-align: middle;
        cursor: pointer;
    }
    .row>div:hover{
        color:#6F78A7;
    }
</style>