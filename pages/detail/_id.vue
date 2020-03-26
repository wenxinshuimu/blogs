<template>
  <div class="container">
    <div class="detail-left-wrap">
      <detail-list></detail-list>
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
export default {
  components: {
    DetailList,
    TagBlock,
    TagList
  },
  mounted () {
    this.getDetailList()
  },
  methods: {
    async getDetailList () {
      console.log(this.$route.params.id);
      let {status, data} = await this.$axios.post('/article/getArticleDetailList', {
        id: this.$route.params.id
      });
      // if (status === 200) {
      //     console.log(data.data.data)
      //   return {
      //     indexList: data.data.data
      //   }
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: row;
    .detail-left-wrap {
      width: 900px;
      background-color: #fff;
    }
    .detail-right-wrap {
      width: 300px;
      margin-left: 20px;
      // background-color: #fff;
    }
  }
</style>
