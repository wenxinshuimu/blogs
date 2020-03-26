<template>
    <my-page :title="title" :list="indexList"></my-page>
</template>

<script>
import MyPage from '../../components/public/mainPage'
export default {
  name: 'MyFrontPage',
  components: {
    MyPage
  },
  data () {
    return {
      navName: [{
        id: 'front',
        name: '前端'
      },{
        id: 'php',
        name: 'PHP'
      },{
        id: 'MySQL',
        name: 'MySQL'
      },{
        id: 'other',
        name: '其他'
      }],
    }
  },
  computed: {
    title () {
      return this.navName.filter(item => item.id == this.$route.params.id)[0].name;
    }
  },
  async asyncData(ctx) {
		let {status, data} = await ctx.$axios.post('/article/getArticleList');
		if (status === 200) {
				console.log(data.data.data)
			return {
        indexList: data.data.data
			}
		}
	}
}
</script>

<style lang="scss">
</style>