<template>
  <div class="tag-block">
    <nuxt-link to="/" class="block" v-for="item in tagList" :key="item.id">{{item.name}}</nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'Block',
  props: {
    tagList: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="scss" scoped>
  .tag-block {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    .block {
      padding: 2px 5px;
      margin: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      height: 22px;
      line-height: 22px;
      font-size: 14px;
      color: #666;
    }
      >a:hover {
        border: 1px solid rgb(87, 168, 87);
        color: rgb(87, 168, 87);
      }
  }
</style>