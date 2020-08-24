<template>
    <div class="modify" ref="modify">
        <h1>modify</h1>
        <div class="close" @click="back">X</div>
       <span class="glyphicon glyphicon-remove-circle"></span>
        <div v-if="emp==null">
            <h3>数据加载中</h3>
        </div>
        <div v-else class="container" ref="container">
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
            <div class="row">
                <div class="col-sm-5">status:</div>
                <div class="col-sm-5">
                    <select v-model="status" class="form-control">
                        <option value="false">在职</option>
                        <option value="true">离职</option> 
                    </select>
                </div>
            </div>
            <button class="btn btn-info" @click="mod">修改</button>
        </div>
    </div>
</template>

<script>
import util from '../api/index.js';
import $ from 'jquery';
import {mapMutations} from 'vuex';
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
            edu:'高中以下',
            status:false
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
    updated() {
        // 获取两个标签，并转换成jQuery对象，跟id一样
        let $con = $(this.$refs.container);
        let $mod = $(this.$refs.modify);
        let con_h = parseInt($con.css('height'));
        let mod_h = parseInt  ($mod.css('height'));
        // console.log(con_h,mod_h);
        if(con_h > mod_h){ //'100px'字符串转成num
            $mod.css("height",con_h+70)
        }
        
    },
    methods: {
        ...mapMutations(["modifyEmp"]),
        _getEmpInfo(empId,empName){
            // 获取某个员工的数据
            util.getEmpInfo(empId,empName).then(data=>{
                // 取data赋值给this.emp
                this.emp = data;
                // 给每一个属性重新赋值
                this.empId = this.emp.empId;
                this.empName = this.emp.empName;
                this.gender = this.emp.gender;
                this.age = this.emp.age;
                this.position = this.emp.position;
                this.telephone = this.emp.telephone;
                this.address = this.emp.address;
                this.edu = this.emp.edu;
                this.status = this.emp.status;
            }).catch(err=>{
                console.log(err);
            });
        },
        back(){
            this.$router.go(-1);
            // this.$router.back(1);
        },
        mod(){
            // 提交
            // 修改的条件
            let filter = {empId:this.empId};
            let data = {
                // ...filter,
                // empId : this.empId,
                empName : this.empName,
                gender : this.gender,
                age : this.age,
                position : this.position,
                telephone : this.telephone,
                address : this.address,
                edu : this.edu,
                status : this.status,
            }
            util.modify(filter,data).then(res=>{
                alert(res);
                // 修改状态管理里面的数据
                // this.$route.commit('modifyEmp');//太麻烦
                this.modifyEmp({
                    filter,data
                })
            }).catch(err=>{
                alert(err);
            }).finally(()=>{
                this.$router.push('/');
            })
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
        background:skyblue;
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
    .close{
        position: absolute;
        top:20px;right:50px;
        width:30px;
        height:30px;
        border-radius:50%;
        background: slategrey;
        line-height:30px;
        cursor: pointer;
    }
    button{
        margin-top:10px;
    }
</style>