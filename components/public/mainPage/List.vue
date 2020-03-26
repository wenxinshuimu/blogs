<template>
  <div class="list-wrap">
    <div class="list-title">
      <i class="iconfont icon-arrow"></i>
      <h2 class="title"><a href="">{{dataInfo.title}}</a></h2>
    </div>
    <div class="list-info">
      {{dataInfo.abstract}}
    </div>
    <div class="list-more">
      <nuxt-link :to="'/detail/'+ id">阅读更多>></nuxt-link>
    </div>
    <div class="list-tip">
      <span  class="iconfont icon-user"><a href="">文心水木</a></span>
      <span class="iconfont icon-time"><a href="">{{dataInfo.time}}</a></span>
      <span class="iconfont icon-tag-line"><a href="">{{dataInfo.type}}</a></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
  props: {
    dataInfo: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      id: 1
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/css/public/list.scss'
</style>