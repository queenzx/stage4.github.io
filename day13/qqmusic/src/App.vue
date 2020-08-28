<template>
    <div>
        <m-header></m-header>
        <tab></tab>
        <!-- 路由渲染出口 -->
        <router-view></router-view>
    </div>
</template>

<script>
import MHeader from './components/m-header/m-header'
import Tab from './components/tab/tab'
export default {
    // 注册组件
    components:{
        MHeader,
        Tab
    }
}
</script>

<style scoped>

</style>