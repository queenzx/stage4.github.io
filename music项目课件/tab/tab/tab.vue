<template>
  <div class="tab"></div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus" >
@import '~@common/stylus/variable'
.tab
  display flex
  height 44px
  line-height 44px
  font-size $font-size-medium-x
  .tab-item
    flex 1
    text-align center
    .tab-link
      padding-bottom 5px
      color $color-text-l
    &.router-link-active
      .tab-link
        color $color-theme
        border-bottom 2px solid $color-theme
</style>