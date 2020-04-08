<template>
  <div class="nav-bar">
    <h2 class="logo">文心水木<span class="text">个人博客</span></h2>
    <div class="nav-menu">
      <menu-list :menuList="programList"></menu-list>
    </div>
    <div class="nav-search">
      <input type="text" class="from-search" placeholder="请输入搜索关键字" v-model="keyword">
      <button class="search-btn" @click="handleKeywordSearch">搜索</button>
    </div>
  </div>
</template>
<script>
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
      keyword: '',
      programList: [{
        path: '/',
        name: '首页'
      },{
        path: '/type/front',
        name: '前端'
      },{
        path: '/type/PHP',
        name: 'PHP'
      },{
        path: '/type/MySQL',
        name: '数据库'
      },{
        path: '/type/other',
        name: '其他'
      },{
        path: '/aboutme',
        name: '关于'
      }],
      navItem: ''
    }
  },
  methods: {
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
    },
    handleKeywordSearch () {
      // console.log(this.keyword);
      this.$router.push('/type/key-'+ this.keyword);
      this.keyword = '';
    }
  }
}
</script>
<style lang="scss">
  @import '@/assets/css/header/index.scss'
</style>