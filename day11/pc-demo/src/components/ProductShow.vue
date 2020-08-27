<template>
    <div>
        <div :class="['index-board-item',`index-board-${idx}`]" v-for="(list,idx) in products" :key="idx">
            <div class="index-board-item-inner">
                <h2>{{list.title}}</h2>
                <p class="line-last">{{list.description}}</p>
                <el-button type="primary" class="index-board-button" :disabled="list.saleout">立即购买</el-button>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    props:{
        products:{
            type:Array,
            default(){
                return [];
            }
        }
    }
}
</script>