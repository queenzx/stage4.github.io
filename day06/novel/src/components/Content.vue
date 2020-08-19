<template>
    <div class="content">
        <h1>{{$route.params.title}}</h1>
        <p v-html="content"></p>
    </div>
</template>

<script>
import util from '../api/getData.js'
export default {
    data() {
        return {
            content:''
        }
    },
    methods: {
        _getContent(){
            let url = this.$route.params.url;
            util.getContent(url).then(data=>{
                this.content = data;
            });
        },

    },
    created() {
        this._getContent();
    },
}
</script>

<style scoped>
    .content{
        position: absolute;
        top:0;left:0;
        right:0;bottom:0;
        background:#E9FAFF;
        z-index:6;
        width:100%;
        height:750px;
        margin:0 auto;
        overflow-y:scroll;
    }
    p{
        /* height:600px; */
        width:50%;
        margin:0 auto;
        text-align: left;
        text-indent:2em;
        
    }
</style>