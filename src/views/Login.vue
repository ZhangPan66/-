<template>
  <div class="login">
      <div class="login-box">
            <p class="login-form-title">无人机综合管控平台</p>
            <div class="login-form-container">
                <input id="username" type="text" placeholder="账号">
                <input id="pwd" type="password" placeholder="密码">
                <button>登录</button>
                <p class="register">
                    <router-link to="/registerv">注册</router-link>
                    <router-link to="">忘记密码?</router-link>
                </p>
            </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.login{
    width: 100%;
    height: 100%;
    background: url('../assets/theme-bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .login-box{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        .login-form-title{
            font-size: 36px;
            color: #ffffff;
            text-align: center;
        }
        .login-form-container{
            margin-top: 85px;
            display: flex;
            flex-direction: column;
            width: 400px;
            input{
                width: 100%;
                height: 30px;
                border: none;
                border-bottom: 1px solid #FFFFFF;
                background: transparent;
                outline: none;
                color: #FFFFFF;
                line-height: 30px;
                font-size: 18px;
                margin-bottom: 40px;
            }
            button{
                width: 400px;
                height: 50px;
                background: #FFFFFF;
                opacity: 0.5;
                border-radius: 40px;
                font-size: 18px;
                outline: none;
                border: none;
            }
            .register{
                margin-top: 10px;
                height: 25px;
                line-height: 25px;
                display: flex;
                justify-content: space-between;
                a{
                    color: #FFFFFF;
                    font-size: 18px;
                }
            }
        }
    }
}
</style>
