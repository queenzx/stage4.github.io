<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名:</span>
        <div class="g-form-input">
          <input type="text" placeholder="请输入用户名">
        </div>
        <span class="g-form-error"></span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码:</span>
        <div class="g-form-input">
          <input type="password" placeholder="请输入密码">
        </div>
        <span class="g-form-error"></span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="login">登录</a>
          <a class="button" @click="close">取消</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapMutations} from 'vuex'
export default {
  methods: {
    // ...mapMutations(['close']),
    login(){
      alert('密码错误!!!');
    },
    close(){
      this.$emit('close')
    }
  },
}
</script>

<style scoped>

</style>