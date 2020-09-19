<template>
  <div class="login">
      <div class="login-box">
            <p class="login-form-title">无人机综合管控平台</p>
            <div class="login-form-container">
                <el-form :model="LoginruleForm" status-icon :rules="Loginrules" ref="LoginruleForm" class="demo-LoginruleForm">
                    <el-form-item prop="username">
                        <el-input placeholder="用户名" type="text" v-model="LoginruleForm.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="pwd">
                        <el-input placeholder="密码" type="password" v-model="LoginruleForm.pwd" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="yzm">
                        <el-input placeholder="验证码" v-model="LoginruleForm.yzm"></el-input>
                    </el-form-item>
                    <!-- <el-form-item>
                        <el-button type="primary" @click='login'>登录</el-button>
                    </el-form-item> -->
                </el-form>
                <button @click="login">登录</button>
                <!-- <input id="username" type="text" placeholder="账号" v-model="username">
                <input id="pwd" type="password" placeholder="密码" v-model="password">
                <input id="yzm" type="text" placeholder="验证码" >
                <button @click="login">登录</button> -->
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
        var validatorUsename = (rule, value, callback)=>{
            // 用户名正则表达式
            var str1 = /^(?![0-9]*$)[a-zA-Z0-9]{6,20}$/
            // 手机号码正则表达式
            var str2 = /^1[3456789]\d{9}$/
            if(!value){
                return callback(new Error('账号不能为空！'))
            }else if(str2.exec(value)||str1.exec(value))
                {
                    callback()
                }else{
                    return callback(new Error('账号格式不正确！'))
                }
        };
        var validatorPwd = (rule, value, callback)=>{
            if(value===''){
                return callback(new Error('密码不能为空！'))
                console.log(value)
            }else if(value.length<8){
                return callback(new Error('密码长度过短'))
            }else{
                callback()
            }
        };
        var validatorYZM = (rule, value, callback)=>{
            if(!value){
                return callback(new Error('请输入验证码'))
            }else{
                callback()
            }
        };
        return {
            LoginruleForm:{
                // 用户名
                username:'',
                // 密码
                pwd:'',
                // 验证码
                yzm:''
            },
            Loginrules:{
                username:[
                    {validator: validatorUsename, trigger: 'blur'}
                ],
                pwd:[
                    {validator: validatorPwd, trigger: 'blur'}
                ],
                yzm:[
                    {validator: validatorYZM, trigger: 'blur'}
                ]
            },
        }
    },
    methods:{
        login(){
            // 用户名正则表达式
            var str1 = /^(?![0-9]*$)[a-zA-Z0-9]{6,20}$/
            // 手机号码正则表达式
            var str2 = /^1[3456789]\d{9}$/
            if(str2.exec(this.LoginruleForm.username)||str1.exec(this.LoginruleForm.username)){
                // 用户名满足要求
                if(this.LoginruleForm.password.length>=8){
                    this.$axios.post('http://rap2.taobao.org:38080/app/mock/265153/example/1599650769658',
                    {
                        username:this.LoginruleForm.username,
                        password:this.LoginruleForm.password
                    }
                    ).then(resp=>{
                        var data = resp.data
                        if(data.code===20000){
                            // 登录成功保存username和token值
                            var username = data.username
                            var token = data.token
                            this.$store.commit('login',{
                                username,
                                token
                            })
                            // 将token的值保存一份到sessionStorage
                            window.sessionStorage.setItem('token',token)
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
                }else{
                    this.$message.error("密码错误")
                }
            }else{
                this.$message.error('用户名格式有误')
            }
        }
    },
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
            /deep/ .el-form-item__content{
                margin-left: 0!important;
                margin-bottom: 40px;
            }
            /deep/ input{
                width: 100%;
                height: 30px;
                border: none;
                border-radius: 0;
                border-bottom: 1px solid #FFFFFF;
                background: transparent;
                outline: none;
                color: #FFFFFF;
                line-height: 30px;
                font-size: 18px;
                // margin-bottom: 20px;
                &::placeholder{
                    color: #fff;
                    opacity: .6;
                }
            }
            button{
                width: 400px;
                height: 50px;
                background: rgba(255,255,255,.5);
                color: #FFFFFF;
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
