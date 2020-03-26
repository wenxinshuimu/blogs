<template>
  <div class="nav-bar">
    <h1 class="logo">文心水木</h1>
    <ul class="nav" @click="handleClickNav" ref="navItem">
      <li class="nav-list current-nav-item"><nuxt-link class="link" to="/"> 首页</nuxt-link></li>
      <li class="nav-list"><nuxt-link class="link" to="/type/front"> 前端</nuxt-link></li>
      <li class="nav-list"><nuxt-link class="link" to="/type/php"> PHP</nuxt-link>
        <!-- <template>
          <menu-list :menuList="programList"></menu-list>
        </template> -->
      </li>
      <li class="nav-list"><nuxt-link class="link" to="/type/MySQL"> MySQL</nuxt-link></li>
      <li class="nav-list"><nuxt-link class="link" to="/type/other"> 其他</nuxt-link></li>
      <li class="nav-list"><nuxt-link class="link" to="/aboutme"> 关于我</nuxt-link></li>
    </ul>
    <div class="nav-search">
      <input type="text" class="from-search" placeholder="请输入搜索关键字">
      <button class="search-btn">搜索</button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import MenuList from './sub/MenuList'
export default {
  name: 'MyHeader',
  components: {
    MenuList
  },
  computed: {

  },
  data() {
    return {
      programList: ['PHP', 'MySQL', 'Redis'],
      navItem: ''
    }
  },
  methods: {
    ...mapMutations(['setNavName']),
    // 切换导航栏菜单
    handleClickNav (e) {
      this.navItem = this.$refs.navItem.children; //document.getElementsByClassName('nav-list');
      let tar = e.target.parentNode,
          tarIndex = Array.prototype.indexOf.call(this.navItem, tar);
      if (tar.className === 'nav-list') {
        for (let index = 0; index < this.navItem.length; index++) {
          const elem = this.navItem[index];
          elem.className = 'nav-list';
        }
        tar.className += ' current-nav-item';
      }
    }
  }
}
</script>
<style lang="scss">
  @import '@/assets/css/header/index.scss'
</style>