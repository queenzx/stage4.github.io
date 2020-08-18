<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 不建议这样使用,写法太复杂 -->
    <!-- {{ $route.query.aaa }},{{ str }} -->
    {{ getA }},{{ str }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      str:'区分一下'
    }
  },
  computed: {
    getA(){
      return this.$route.query.aaa;
    }
  },
  created() {
    console.log(this.$route.query.aaa);
  },
}
</script>

<style scoped>
  .about{
    width: 100%;
    height: 400px;
    background-color:red;
  }
</style>