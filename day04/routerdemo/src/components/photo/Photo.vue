<template>
    <div>
        <!-- <router-link to="/photo/mkdir">新建相册</router-link> |
        <router-link to="/photo/upload">上传照片</router-link> -->
        <!-- 编程式导航 -->
        <span @click="mkdir">新建相册</span> |
        <span @click="upload">上传图片</span>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        mkdir(){
            // this.$router.push('/photo/mkdir');//绝对路径
            this.$router.push('mkdir');//相对路径,相对于/photo
        },
        upload(){
            let route = this.$route;
            if(route.path=='/photo/upload'){
                // alert('相同路右');
                return ;
            }
            // 字符串
            // this.$router.push('upload');
            // 命名的路由
            // 跳转到名字为home的组件Home
            /* this.$router.push({
                name:"home",
                params:{a:1,b:2,c:3}
            }); */
            this.$router.push({
                path:"/",
                query:{a:1,b:2,c:3}
            });
        }
    },
    // 组件内的守卫
    /* beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        console.log('=====Enter====');
        console.log(this); // undefined
        // next();
        next(vm=>{
            // 使用回调的方式获取当前组件
            console.log(vm);
        });
    },
    beforeRouteUpdate (to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        console.log('=====Update====');
        console.log(this); // 当前组件
        next();
    },
    beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        console.log('=====Leave====');
        console.log(this); // 当前组件
        next();
    } */
}
</script>

<style scoped>
    span:hover{
        cursor: pointer;
        color:blue;
        text-decoration:underline;
    }
</style>