<template>
  <div class="container">
    <div class="left-wrap">
      <div class="left-list">
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
import MainPage from '../components/public/mainPage'
import Pagination from '../components/public/Pagination'
import List from '../components/public/mainPage/List'
import TagBlock from '../components/public/Tag/TagBlock'
import TagList from '../components/public/Tag/TagList'
import ArticleModel from '../models/Article'

const articleModel = new ArticleModel();
export default {
  name: 'IndexPage',
  data () {
    return {
      currentPage: 1,
      pageSize: 5,
      indexList: [],
    }
  },
  components: {
    List,
    TagBlock,
    TagList,
    Pagination
  },
  async asyncData(ctx) {
		let {status, data: {data}} = await articleModel.getArticleList(); 
    let {status: statusTag, data: tagData} = await articleModel.getTagList();
		if (status === 200  && statusTag == 200) {
				//console.log(data.data.data)
			return {
        indexList: data.data,
        total: data.total,
        tagList: tagData.data.data.filter((item) => item._id !== null)
			}
		}
  },
  watch: {
    async currentPage () {
      let types = this.$route.params.type ? this.$route.params.type : '',
          keyword = '',
          type = '',
          pageSize = 5;
      if (types.indexOf('key') !== -1) {
        keyword = types.slice(4);
      }else {
        type = types;
      } 
      let {status, data: {data}} = await articleModel.getArticleList(type, keyword, this.currentPage, this.pageSize); 
      if (status === 200) {
          //console.log(data.data.data)
          this.indexList = data.data
      }
      window.scrollTo(0, 0);
    }
  },
  methods: {
    changePage (currentPage) {
      
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/public/index.scss";
</style>
