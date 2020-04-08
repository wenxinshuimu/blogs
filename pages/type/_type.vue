<template>
  <div class="container">
    <div class="left-wrap">
      <div class="left-list">
        <h2 :class="[title ? 'left-title' : '']">{{title}}</h2>
        <list v-for="(item,index) in indexList" :key="index" :dataInfo="item"></list>
      </div>
      <pagination 
        :total="total"
        :pageSize="pageSize"
        v-model="currentPage">
      </pagination>
    </div>
    <div class="right-wrap">
      <tag-block :tagList="tagList"></tag-block>
      <!-- <tag-list></tag-list> -->
    </div>
  </div>
</template>

<script>
import MainPage from '../../components/public/mainPage'
import Pagination from '../../components/public/Pagination'
import List from '../../components/public/mainPage/List'
import TagBlock from '../../components/public/Tag/TagBlock'
import TagList from '../../components/public/Tag/TagList'
import ArticleModel from '../../models/Article'

const articleModel = new ArticleModel();
export default {
  name: 'MyFrontPage',
  components: {
    List,
    TagBlock,
    TagList,
    Pagination
  },
  data () {
    return {
      currentPage: 1,
      pageSize: 5,
      navName: [{
        id: 'front',
        name: '前端'
      },{
        id: 'PHP',
        name: 'PHP'
      },{
        id: 'MySQL',
        name: '数据库'
      },{
        id: 'other',
        name: '其他'
      }],
    }
  },
  computed: {
    title () {
      let type = this.$route.params.type;
      // console.log('type',type)
      if (type.indexOf('tag') !== -1) {
        return type.slice(4);
      }else if (type.indexOf('key') !== -1) {
        return '搜索： ' + type.slice(4) ;
      }else{
        return this.navName.filter(item => item.id == type)[0].name;
      }
    }
  },
  async asyncData(ctx) {
    let types = ctx.params.type,
        keyword = '',
        type = '',
        currentPage = 1,
        pageSize = 5;
    if (types.indexOf('tag') !== -1) {
      type = types.slice(4);
    }else if (types.indexOf('key') !== -1) {
      keyword = types.slice(4);
    }else {
      type = types;
    }
		let {status, data: {data}} = await articleModel.getArticleList(type, keyword, currentPage, pageSize);
    let {status: statusTag, data: tagData} = await articleModel.getTagList();
		if (status === 200  && statusTag == 200) {
			return {
        indexList: data.data,
        total: data.total,
        tagList: tagData.data.data.filter((item) => item._id !== null)
			}
		}
	},
  watch: {
    async currentPage () {
      let types = this.$route.params.type,
          keyword = '',
          type = '',
          currentPage = 1,
          pageSize = 5;
      if (types.indexOf('tag') !== -1) {
        type = types.slice(4);
      }else if (types.indexOf('key') !== -1) {
        keyword = types.slice(4);
      }else {
        type = types;
      } 
      let {status, data: {data}} = await articleModel.getArticleList(type, keyword, this.currentPage, this.pageSize); 
      if (status === 200) {
          this.indexList = data.data
      }
      window.scrollTo(0, 0);
    }
  },
}
</script>

<style lang="scss">
  @import "@/assets/css/public/index.scss";
</style>