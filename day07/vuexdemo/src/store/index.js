import Vue from 'vue'
import Vuex from 'vuex'
import {ADD,REDUCE} from './event.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    num: 7,
    stus:[
      {id:1,name:'zhangsan'},
      {id:2,name:'lisi'},
      {id:3,name:'wangwu'}
    ]
  },
  getters: {
    cartPro(state){
      let arr = [];
      state.products.forEach((val)=>{
        let name = val.name;
        let price = val.price;
        let count = 0;
        arr.push({
          name,price,count
        })
      })
      return arr;
    },
    getStuNames(state){
      // 使用for循环进行过滤
      /* let names = [];
      for(let i=0;i<state.stus.length;i++){
        names.push(state.stus[i].name);
      }
      return names; */

      // 使用filter过滤
      return state.stus.filter(stu=>stu.name.indexOf('a')!=-1);
    },
    getStuById(state){
      /* return function(id){
        return state.stus.filter(val=>{
          return val.id == id;
        });
      } */
      return id=>state.stus.filter(val=>val.id == id);   
    }
  },
  mutations: {
    addPro(state,payload){
      state.products.push(payload.pro);
    },
    increase(state){
      console.log('mutation-actAdd');
      state.num++;
    },
    // 有载荷的事件
    increase2(state,payload){
      state.num += payload.a;
    },
    [ADD](state){
      state.num++;
    },
    [REDUCE](state){
      state.num--;
    },
    testAsync(state){
      setTimeout(()=>{
        state.num++;
      },2000);
    }
  },
  actions: {
    // 参数不是state,因为actions不能修改state
    actAdd(context){
      console.log('action-actAdd');
      // action提交事件给mutation
      // 提交一个increase事件给mutation
      // context.commit('increase');//提交的事件必须是mutation里定义过的
      // 异步事件
      setTimeout(()=>{
        context.commit('increase');
      },2000)
    }
  }
})
