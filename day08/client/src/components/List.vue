<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-1">编号</div>
                <div class="col-sm-1">姓名</div>
                <div class="col-sm-1">性别</div>
                <div class="col-sm-1">年龄</div>
                <div class="col-sm-1">职业</div>
                <div class="col-sm-2">联系电话</div>
                <div class="col-sm-2">地址</div>
                <div class="col-sm-1">学历</div>
                <div class="col-sm-2">操作</div>
            </div>
        </div>
        <div class="container">
            <div class="row" v-for="(emp,i) in emps" :key="i">
                <div class="col-sm-1">
                    {{emp.empId}}
                </div>
                <div class="col-sm-1">
                    {{emp.empName}}
                </div>
                <div class="col-sm-1">
                    {{emp.gender=='M'?'男':'女'}}
                </div>
                <div class="col-sm-1">
                    {{emp.age}}
                </div>
                <div class="col-sm-1">
                    {{emp.position}}
                </div>
                <div class="col-sm-2">
                    {{emp.telephone}}
                </div>
                <div class="col-sm-2">
                    {{emp.address}}
                </div>
                <div class="col-sm-1">
                    {{emp.edu}}
                </div>
                <div class="col-sm-2">
                    <span>管理</span>&nbsp;
                    <span @click="del(emp,i)">删除</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import util from '../api';
export default {
    computed: {
        ...mapState(['emps'])
    },
    beforeRouteEnter(to,from,next){
        // console.log('beforeRouteUpdate');
        next(vm=>{
            vm._getAllEmps();
        })
    },
    
    methods: {
        ...mapMutations(["setAllEmps","removeEmp"]),
        _getAllEmps(){
            util.getAllEmps().then(res=>{
                this.setAllEmps({
                    emps: res
                })
            })
        },
        del(emp,i){
            let f = confirm('确认删除这个员工吗');
            if(!f){
                alert('');
            }else{
                util.removeEmp(emp).then(data => {
                    console.log(data);
                    this.removeEmp({idx:i});
                })
            }
            
        }

    }
}
</script>

<style scoped>
    .row>div{
        border:1px solid black;
    }
    span{
        color:darkgray;
        text-decoration:underline;
    }
    span:hover{
        cursor: pointer;
        color:#ccc;
    }
</style>