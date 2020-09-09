<template>
  <div class="register">
        <div class="title">账号注册</div>
        <form action="">
          <ul>
            <li>
              <input type="text" placeholder="账户名">
            </li>
            <li>
              <input type="text" placeholder="请输入手机号码">
            </li>
            <li>
              <input type="text" placeholder="请输入手机验证码"> <span>获取验证码</span>
            </li>
            <li>
              <input type="password" placeholder="设置密码">
            </li>
            <li>
              <input type="text" placeholder="验证密码">
            </li>
          </ul>
          <button>注册</button>
        </form>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
  .register{
    width:100%;
    height:100%;
    background-image: url('../assets/theme-bg.webp');
    background-size: 100%;
    overflow: hidden;
    .title{
      font-size: 36px;
      color:white;
      width:144px;
      margin:0 auto;
      margin-bottom:56px;
      margin-top:180px;
    }
    form{
      width:400px;
      margin:0 auto;
      li{
        border-bottom: 1px solid white;
        padding-bottom: 10px;
        margin-bottom:52px;
        display: flex;
        justify-content: space-between;
      }
      span{
        font-size: 14px;
        color:white;
        cursor: pointer;
        margin-right: 12px;
      }
      input{
        flex:1;
        outline:none;
        border:none;
        background-color: transparent;
        font-size: 18px;
        text-indent: 3px;
        color:rgba($color: white, $alpha:.4)
      }
      button{
        width:400px;
        height:50px;
        text-align: center;
        line-height: 50px;
        border-radius: 40px;
        background-color: rgba($color: #fff, $alpha: .5);
        border:none;
        color:white;
        font-size: 14px;
      }
    }
  }
</style>
