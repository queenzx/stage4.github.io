<template>
    <div class="list">
        <button @click="toggle" class="btn btn-warning">{{toggleShow}}</button>
        <div class="container">
            <div class="row">
                <div class="col-sm-1">编号</div>
                <div class="col-sm-1">姓名</div>
                <div class="col-sm-1">性别</div>
                <div class="col-sm-1">年龄</div>
                <div class="col-sm-1">职业</div>
                <div class="col-sm-2">联系电话</div>
                <div class="col-sm-2">地址</div>
                <div class="col-sm-1">状态</div>
                <div class="col-sm-1">学历</div>
                <div class="col-sm-1">操作</div>
            </div>
        </div>
        <div class="container">
            <div class="row" v-for="(emp,i) in filterEmps" :key="i">
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
                    {{emp.status?"离职":"在职"}}
                </div>
                <div class="col-sm-1">
                    {{emp.edu}}
                </div>
                <div class="col-sm-1">
                    <span @click="modify(emp)">管理</span>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import util from '../api';
export default {
    data() {
        return {
            status:1
        }
    },
    computed: {
        ...mapState(['emps']),
        toggleShow(){
            return this.status==1?'所有信息':this.status==2?'所有在职':'所有离职';
        },
        filterEmps(){
            let onEmps = [];//所有在职
            let offEmps = [];//所有离职
            let emps = this.emps;//所有的
            for(let i=0;i<emps.length;i++){
                if(emps[i].status){
                    // 值为true,表示离职
                    offEmps.push(emps[i]);
                }else{//在职的
                    onEmps.push(emps[i]);
                }
            }
            // 1 显示所有 2 显示在职 3 显示离职
            return this.status==1?this.emps:this.status==2?onEmps:offEmps;

        }
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
        modify(emp){
            this.$router.push({
                path:'/list/modify',
                query:{
                    empId:emp.empId,
                    empName:emp.empName
                }
            })
        },
        toggle(){
            // this.status==1?this.status=2:this.status==2?this.status=3:this.status=1;
            this.status = this.status==1?2:this.status==2?3:1;
            /* if(this.status==1){
                this.status=2
            }else if(this.status==2){
                this.status=3
            }else{
                this.status=1
            } */
        }

    }
}
</script>

<style scoped>
    .list{
        position: relative;
    }
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
    button{
        margin-bottom:5px;
    }
</style>