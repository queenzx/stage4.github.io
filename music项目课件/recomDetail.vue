<template>
  <transition name="slide">
    <music-list></music-list>
  </transition>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.slide-enter-active, .slide-leave-active
  transition all 0.3s
.slide-enter, .slide-leave-to
  transform translate3d(100%, 0, 0)
</style>