import Vue from 'vue'
import Vuex from 'vuex'
// import Emp from './entity/Emp.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    emps:[]
  },
  mutations: {
    setAllEmps(state,payload){
      state.emps = payload.emps;
    },
    addEmp(state,payload){
      state.emps.push(payload.emp);
    },
    removeEmp(state,payload){
      state.emps.splice(payload.idx,1);
    },
    modifyEmp(state,payload){
      // filter =>{empId:xxx}
      let  filter = payload.filter;
      // filter =>{xx:xx,xx:xx,xx:xx,...}
      let data = payload.data;
      for(let i=0;i<state.emps.length;i++){
        let emp = state.emps[i];
        if(emp.empId == filter.empId){
          // 方法1:在数据传递过来之前加上id
          // state.emps[i] = data;
          // 方法2:使用扩展运算符,进行拼接
          state.emps[i] = {...filter,...data};
          break;
        }
      }

    }
  },
  actions: {
  },
  modules: {
  }
})
