<template>
    <div class="modify">
        <h1>modify</h1>
        <div v-if="emp==null">
            <h3>数据加载中</h3>
        </div>
        <div v-else class="container">
            <div class="row">
                <div class="col-sm-5">empId:</div>
                <div class="col-sm-5">
                    <p align="center">{{emp.empId}}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">empName:</div>
                <div class="col-sm-5">
                    <input type="text" v-model="empName" class="form-control" :placeholder="emp.empName" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">gender:</div>
                <div class="col-sm-5 center">
                    <select v-model="gender" class="form-control">
                        <option value="M">男</option>
                        <option value="F">女</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">age:</div>
                <div class="col-sm-5">
                    <input type="text" v-model="age" class="form-control" :placeholder="emp.age" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">position:</div>
                <div class="col-sm-5">
                    <select v-model="position" class="form-control">
                        <option value="销售">销售</option>
                        <option value="人事">人事</option>
                        <option value="技术">技术</option>
                        <option value="财务">财务</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">telephone:</div>
                <div class="col-sm-5">
                    <input type="text" v-model="telephone" class="form-control" :placeholder="emp.telephone" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">address:</div>
                <div class="col-sm-5">
                    <input type="text" v-model="address" class="form-control" :placeholder="emp.address"/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">edu:</div>
                <div class="col-sm-5">
                    <select v-model="edu" class="form-control">
                        <option value="高中以下">高中以下</option>
                        <option value="本科">本科</option>
                        <option value="大专">大专</option>
                        <option value="研究生以上">研究生以上</option>
                    </select>
                </div>
            </div>
            <button class="btn btn-info" >修改</button>
        </div>
    </div>
</template>

<script>
import util from '../api/index.js';
export default {
    data() {
        return {
            emp:null,
            empId:null,
			empName:'',
			gender:'M',
			age:null,
			position:'销售',
			telephone:'',
			address:'',
			edu:'高中以下'
        }
    },
    /* beforeRouteUpdate (to, from, next) {
        let {empId,empName} = to.query;
        this._getEmpInfo(empId,empName);
    }, */
    beforeRouteEnter (to, from, next) {
        // 根据路由参数获取某个员工的数据
        /* console.log('to:',to);
        console.log('from:',from); */
        let {empId,empName} = to.query;
        next(vm=>{
            vm._getEmpInfo(empId,empName);

        });
    },
    methods: {
        _getEmpInfo(empId,empName){
            // 获取某个员工的数据
            util.getEmpInfo(empId,empName).then(data=>{
                this.emp = data;
            }).catch(err=>{
                console.log(err);
            });
        }
    },
}
</script>

<style scoped>
    .modify{
        position: absolute;
        top:0;left:0;
        right:0;bottom:0;
        z-index:10;
        background:white;
    }
    .row {
        margin-top: 5px;
    }
    .col-sm-5 {
        text-align: right;
    }
    .center {
        text-align: center;
    }
</style>