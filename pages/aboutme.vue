<template>
  <div class="wrap">
    <div class="user-box">
      <div class="img-box">
        <img src="@/assets/img/img.png" alt="">
      </div>
      <div class="info-box">
        <h3>文心水木</h3>
        <p>一个90后Web前端程序员</p>
        <p>欢迎您来到我的博客</p>
      </div>
    </div>
    <div class="msg-box">
      <h4>个人资料</h4>
      <p>qq: 1091027148</p>
      <p>Github: 1091027148</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 800px;
    height: 100%;
    padding: 20px;
    padding-left: 50px;
    // background-color: #eee;
    .user-box {
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #aaa;
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
        line-height: 30px;
      }
    }
    .msg-box {
      padding: 10px;
      line-height: 30px;
    }
  }
</style>