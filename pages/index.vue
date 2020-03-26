<template>
  <div>
    <my-index :list="indexList"></my-index>
  </div>
</template>

<script>
import MyIndex from '../components/public/mainPage'
export default {
  name: 'IndexPage',
  components: {
    MyIndex
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
