<template>
  <div class="register">
    <div class="title">账号注册</div>
    <el-form :model="user" :rules="rules" ref="userMessage">
      <el-form-item prop="usernmae">
        <el-input placeholder="账户名" v-model="user.usernmae"></el-input>
      </el-form-item>
      <el-form-item prop="tel">
        <el-input placeholder="请输入手机号" v-model="user.tel"></el-input>
      </el-form-item>
      <el-form-item>
        <el-col :span="19">
          <el-input placeholder="请输入手机验证码" v-model="user.code"></el-input>
        </el-col>
        <el-col :span="5">
          <span>获取验证码</span>
        </el-col>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="设置密码" v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item prop="checkpassword">
        <el-input placeholder="验证密码" v-model="user.checkpassword"></el-input>
      </el-form-item>
      <el-button @click="handleClick">注册</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    //验证用户名格式是否正确
     var validatename = (rule, value, callback) => {
      var reg = /^(?![0-9]*$)[a-zA-Z0-9]{6,20}$/;
     if (!value.match(reg)) {
        callback(new Error("用户名由字母数字构成最少六位"));
      } else {
        callback();
      }
    };
    // 验证密码格式是否正确
    var validatepass = (rule, value, callback) => {
      var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!value.match(reg)) {
        callback(
          new Error("请输入8到16位且必须包含大写字母与小写字母数字组成的密码")
        );
      } else {
        if (this.user.checkpassword !== "") {
          this.$refs.userMessage.validateField("validatecheck");
        }
        callback();
      }
    };
    // 二次验证密码
    var validatecheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.user.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    //验证手机格式是否正确
    var validatephone = (rule, value, callback) => {
      var reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;

      if (!value) {
        callback(new Error("请输入手机号"));
      } else if (!value.match(reg)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    return {
      user: {
        usernmae: "",
        password: "",
        checkpassword: "",
        tel: "",
        code: ""
      },
      rules: {
        usernmae: [{ validator: validatename, trigger: "blur" }],
        password: [{ validator: validatepass, trigger: "blur" }],
        checkpassword: [{ validator: validatecheck, trigger: "blur" }],
        tel: [{ validator: validatephone, trigger: "blur" }],
        
      }
    };
  },
  methods: {
    //处理注册点击事件
    handleClick(){
      this.$refs.userMessage.validate(bollean=>{
        console.log(this.user.usernmae)
          if(bollean){
              this.$axios.get('https://www.baidu.com',{
                  username:this.user.username,
                  password:this.user.password,
                  tel:this.user.tel,
              }).then(res=>{
                if(true){
                  this.$message.error("注册成功")
                }
              }).catch(res=>{
                this.$message.error('注册失败')
              })
          }
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100%;
  background-image: url("../assets/theme-bg.webp");
  background-size: 100%;
  overflow: hidden;
  .title {
    font-size: 36px;
    color: white;
    width: 144px;
    margin: 0 auto;
    margin-bottom: 3%;
    margin-top: 6%;
  }
  form {
    width: 400px;
    margin: 0 auto;
    /deep/.el-form-item {
      margin-bottom: 12%;
    }
    /deep/.el-form-item__content {
      border-bottom: 1px solid white;
      span {
        display: inline-block;
        width: 70px;
        height: 40px;
        color: white;
        // opacity: none;
      }
    }
    /deep/input {
      flex: 1;
      outline: none;
      border: none;
      background-color: transparent;
      font-size: 18px;
      padding-left: 3px;
      color: #ffff;
      &::placeholder {
        color: #fff;
        opacity: 0.4;
      }
    }
    button {
      width: 400px;
      height: 50px;
      text-align: center;
      border-radius: 40px;
      background-color: rgba($color: #fff, $alpha: 0.5);
      border: none;
      color: white;
      font-size: 14px;
    }
  }
}
</style>
