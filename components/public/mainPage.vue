<template>
  <div class="container">
    <div class="left-wrap">
      <h2 :class="[title ? 'left-title' : '']">{{title}}</h2>
      <list v-for="(item,index) in list" :key="index" :dataInfo="item"></list>
      <pagination></pagination>
    </div>
    <div class="right-wrap">
      <tag-block></tag-block>
      <tag-list></tag-list>
      <tag-block></tag-block>
      <tag-block></tag-block>
      <tag-block></tag-block>
    </div>
  </div>
</template>

<script>
import List from '../public/mainPage/List'
import TagBlock from './Tag/TagBlock'
import TagList from './Tag/TagList'
import Pagination from '../public/Pagination'
export default {
  name: 'Front',
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: []
    }
  },
  components: {
    List,
    TagBlock,
    TagList,
    Pagination
  }
}
</script>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .left-wrap {
      width: 900px;
      background-color: #fff;
      .left-title {
        padding: 10px 0 0 20px;
        color: #444;
        margin-bottom: -25px;
      }
    }
    .right-wrap {
      width: 300px;
      margin-left: 20px;
      // background-color: #fff;
    }
  }
</style>
