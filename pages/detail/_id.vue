<template>
  <div class="container">
    <div class="detail-left-wrap">
      <detail-list :detailInfo="detailInfo"></detail-list>
    </div>
    <div class="detail-right-wrap">
      <tag-block></tag-block>
      <tag-list></tag-list>
      <tag-block></tag-block>
      <tag-block></tag-block>
      <tag-block></tag-block>
    </div>
  </div>
</template>

<script>
import DetailList from '@/components/public/mainPage/DetailList'
import TagBlock from '@/components/public/Tag/TagBlock'
import TagList from '@/components/public/Tag/TagList'
import ArticleModel from '../../models/Article'

const articleModel = new ArticleModel();
export default {
  components: {
    DetailList,
    TagBlock,
    TagList
  },
  data () {
    return {
      
    }
  },
  async asyncData(ctx) {
		let {status, data} = await articleModel.getArticleDetailList(ctx.params.id);
        _id: ctx.params.id
		if (status === 200) {
			return {
        detailInfo: data.data.document
			}
		}
	}
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: row;
    width: 70%;
    .detail-left-wrap {
      width: 70%;
      margin: 0 auto;
      background-color: #fff;
    }
    .detail-right-wrap {
      width: 300px;
      margin-left: 20px;
      // background-color: #fff;
    }
  }
</style>
