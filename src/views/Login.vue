<template>
  <div class="login">
      <div class="login-box">
            <p class="login-form-title">无人机综合管控平台</p>
            <div class="login-form-container">
                <input id="username" type="text" placeholder="账号" v-model="username">
                <input id="pwd" type="password" placeholder="密码" v-model="password">
                <button @click="login">登录</button>
                <p class="register">
                    <router-link to="/register">注册</router-link>
                    <router-link to="">忘记密码?</router-link>
                </p>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // 用户名
            username:'',
            // 密码
            password:''
        }
    },
    methods:{
        login(){
            // 用户名正则表达式
            var str1 = /^(?![0-9]*$)[a-zA-Z0-9]{6,20}$/
            // 手机号码正则表达式
            var str2 = /^1[3456789]\d{9}$/
            if(str2.exec(this.username)||str1.exec(this.username)){
                // 用户名满足要求
                if(this.password.length>=8){
                    this.$axios.post('http://rap2.taobao.org:38080/app/mock/265153/example/1599650769658',
                    {
                        username:this.username,
                        password:this.password
                    }
                    ).then(resp=>{
                        var data = resp.data
                        if(data.code===20000){
                            // 登录成功将token值保存在sessionStorage
                            window.sessionStorage.setItem('token',data.token)
                            window.sessionStorage.setItem('username',data.username)
                            // 提示用户    
                           this.$message.success(data.message)
                            // 跳转到首页
                            this.$router.push('/home')
                        }
                        if(data.code===20001){
                            // 登录失败
                            this.$message.error(data.message)
                            this.username = ''
                            this.password = ''
                        }
                    })
                }
            }
        }
    }
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
