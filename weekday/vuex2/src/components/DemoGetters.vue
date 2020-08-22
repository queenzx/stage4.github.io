<template>
    <div>
        <h1>Getters</h1>
        <h3>使用$store</h3>
        {{$store.getters.square}} =====
        {{$store.getters.getPs}} =====
        {{$store.getters.getNames}}
        
        <h3>使用mapGetters</h3>
        {{square}} == {{getPs}} == {{getNames}} === {{pingfang}}
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    // 方式1:简洁不灵活
    // computed: mapGetters(['square','getPs','getNames']),

    // 方式2: 可以自定义key,但是不方便
    /* computed: mapGetters({
        pingfang:'square'
    }), */

    // 方式3: 混入式
    computed: {
        ...mapGetters(["square","getPs","getNames"]),
        ...mapGetters({
            pingfang:'square'
        })
    },
}
</script>