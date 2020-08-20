<template>
  <div class="hello">
    {{ $store.state.num }} | {{showNum}} | {{showNum2}} | {{num2}} | {{num}} | {{stus[0].name }}
    <h1>{{ msg }}</h1>
    <!-- <p>{{ getNames }} | {{getStu}}</p> -->
    <p>{{ getNames }}</p>
    <button @click="show">显示num的值</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // 组件中获取state的几种方式
  // 方式一
  /* computed: {
    showNum(){
      // 通过$store对象获取状态
      return this.$store.state.num;
    }
  }, */
  // 方式二:通过辅助函数 mapState
  // mapState方法的返回值就是一个对象
  /* computed: 
    mapState({
      showNum:state => state.num
  }),  */
  // 合并写法:将方式一和方式二合并
  // 使用扩展符号将对象打散合并到另一个对象里面
  computed: {
    ...mapState({showNum:state => state.num}),
    // 方式三:参数映射状态
    // 数组的字符串元素对应着store中的state里面定义的状态属性,必须保持一致,使用时,在模板中就是使用num
    // 返回的{{num2:state.num2,num:state.num}}
    // ...mapState([num]),//这个num和store的index.js中的num对应
    ...mapState(['num2','num','stus']),
    // 使用mapGetters辅助函数
    ...mapGetters({
      getNames:'getStuNames'
    }),
    // {getStuNames:this.$store.getters.getStuNames}
    ...mapGetters(['getStuNames']),
    showNum2(){
      return this.$store.state.num
    },
    /* getNames(){
      return this.$store.getters.getStuNames;
    },
    getStu(){
      return this.$store.getters.getStuById(2);
    } */

  },
  methods: {
    show(){
      console.log(1,this.$store.state);
      // 通过当前组件实例调用计算属性
      console.log(2,this.showNum);
      console.log(2,this.showNum2);
      console.log(2,this.num);
      console.log(2,this.num2);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
