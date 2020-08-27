<template>
    <div>
        <div v-for="(item,index) in list" :key="index">
            <h3>{{item.title}}</h3>
            <ul>
                <li v-for="(val,idx) in item.list" :key="idx">
                    <a :href="val.url" :class="{'hot-tag':val.hot}">{{val.name}}</a>
                </li>
            </ul>
            <hr v-if="!item.last" class="hr">
        </div>
    </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Object,
            default(){
                return {};
            }
        }
    }
}
</script>