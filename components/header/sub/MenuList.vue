<template>
  <div class="menu-list">
    <ul>
      <li v-for="item in menuList" :key="item"><nuxt-link :to="'/' + item">{{item}}</nuxt-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'MenuList',
  props: {
    menuList: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="scss" scoped>
  .menu-list {
    display: none;
    z-index: 999;
    color: #fff;
    background-color: #09c6ec;
    >ul li a {
      color: #fff;
      width: 100%;
      display: block;
    }
    >ul li a:hover {
     color: #eee;
     background-color: #70dcf1;
    }
  }
</style>