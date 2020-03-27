// 文章页面接口
const Router = require('koa-router')// 路由
const axios = require('./utils/axios') // 请求

//路由前缀
let router = new Router({
  prefix: '/article'
})

// 获取文章列表
router.post('/getArticleList', async (ctx) => {
  let {status, data} = await axios.post(`http://eu.weixiaolu.cn/service/?c=WebApi-getArticleList`);
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
  let {status, data} = await axios.post(`http://eu.weixiaolu.cn/service/?c=WebApi-getArticleDetailList`, {
    id: ctx.request.body.username
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

module.exports = router;