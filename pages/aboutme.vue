<template>
  <div class="wrap">
    <div class="user-box">
      <div class="img-box">
        <img src="@/assets/img/img.png" alt="">
      </div>
      <div class="info-box">
        <h3>文心水木</h3>
        <p>故不积跬步，无以至千里；不积小流，无以成江海。</p>
      </div>
    </div>
    <div class="msg-box">
      <h4>项目代码地址</h4>
      <p>Gitee: </p>
      <p><a href="https://gitee.com/wenxinshuimu" target="view_frame">https://gitee.com/wenxinshuimu</a></p>
      <p>Github: </p>
      <p><a href="https://gitee.com/wenxinshuimu" target="view_frame">https://gitee.com/wenxinshuimu</a></p>
    </div>
    <div class="msg-box">
      <h4>项目地址</h4>
      <p><a href="https://gitee.com/wenxinshuimu" target="view_frame">H5聚生活</a></p>
      <p><a href="https://gitee.com/wenxinshuimu" target="view_frame">PC聚生活</a></p>
      <p><a href="https://gitee.com/wenxinshuimu" target="view_frame">购物车</a></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrap {
    display: flex;
    flex-direction: column;
    width: 800px;
    min-height: calc(100vh - 131px);
    padding: 50px;
    margin: 0 auto;
    background-color: #fff;
    margin-top: -30px;
    box-sizing: border-box;
    .user-box {
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #aaa;
      margin-top: 50px;
      .img-box {
        width: 100px;
        height: 100px;
        padding: 3px;
        border: 1px solid #aaa;
        border-radius: 50%;
        box-sizing: border-box;
        text-align: center;
        padding-top: 15px;
        img {
          height: 85%;
        }
      }
      .info-box {
        padding: 10px;
        line-height: 45px;
      }
    }
    .msg-box {
      padding: 10px;
      line-height: 30px;
      >p a{
        color: #703333;
        text-indent: 32px;
        display: block;
      }
      >p a:hover{
        color: #666;
      }
    }
  }
</style>