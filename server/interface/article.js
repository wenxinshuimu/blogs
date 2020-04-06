// 文章页面接口
import Router from 'koa-router'// 路由
import axios from './utils/axios' // 请求

//路由前缀
let router = new Router({
  prefix: '/article'
})

// 获取文章列表
router.post('/getArticleList', async (ctx) => {
  // console.log('123',ctx.request.body.type)
  // console.log('222',ctx.request.body.currentPage)
  // console.log('333',ctx.request.body.pageSize)
  let {status, data} = await axios.post(`http://eu.weixiaolu.cn/service/?c=Knowledge-getKeywordList`, {
    type: ctx.request.body.type,
    currentPage: ctx.request.body.currentPage,
    pageSize: ctx.request.body.pageSize,
  });
  if (status === 200) {
    ctx.body = {
      data
    }
  }else {
    ctx.body = {
     data: []
    }
  }
})
// 获取文章详情列表
router.post('/getArticleDetailList', async (ctx) => {
  //console.log(ctx.request.body)
  let {status, data} = await axios.post(`http://eu.weixiaolu.cn/service/?c=Knowledge-getDocumentById`, {
    _id: ctx.request.body._id
  });
  if (status === 200) {
    ctx.body = {
      data
    }
  }else {
    ctx.body = {
     data: []
    }
  }
})

export default router;