<template>
  <div class="register">
    <div class="title">账号注册</div>
    <el-form :model="user" :rules="rules" ref="userMessage">
      <el-form-item prop="username">
        <el-input placeholder="账户名" v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input placeholder="邮箱账号" v-model="user.email"></el-input>
      </el-form-item>
      <el-form-item prop="emaiclcode">
        <el-col :span="18">
          <el-input placeholder="请输入验证码" v-model="user.emailcode"></el-input>
        </el-col>
        <el-col :span="6">
          <span @click="getCode($event)">获取验证码</span>
        </el-col>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="设置密码" v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item prop="checkpassword">
        <el-input placeholder="验证密码" v-model="user.checkpassword"></el-input>
      </el-form-item>
      <el-button @click="handleClick($event)">注册</el-button>
      <el-checkbox v-model="agree">阅读并接受协议</el-checkbox>
      <div v-if="!agree&&isShow" style="color:white">请勾选“阅读并接受百度用户协议</div>
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
      }else {
          this.$axios.get(`http://10.7.182.97:8000/check/?username=${value}`).then(res=>{
               if(res.data.code==30001){
                this.$message.error(res.data.message)
                this.user.username=''
              }
          })
        callback();
      }
    };
    // 验证验证码
    var validateCode = (rule, value, callback) => {
      var reg = /[0-9][6]$/;
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (!value.match(reg)) {
        callback(new Error("请输入六位验证码"));
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
      // console.log(value)
      var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

      if (!value) {
        callback(new Error("请输入邮箱"));
      } else if (!value.match(reg)) {
        callback(new Error("请输入正确的邮箱账号"));
      } else {
        callback();
      }
    };
    return {
      user: {
        username: "",
        password: "",
        checkpassword: "",
        email: "",
        emailcode: ""
      },
      agree: false,
      isShow: false,
      // 是否已经发送验证码
      isSend: true,
      rules: {
        username: [{ validator: validatename, trigger: "blur" }],
        password: [{ validator: validatepass, trigger: "blur" }],
        checkpassword: [{ validator: validatecheck, trigger: "blur" }],
        email: [{ validator: validatephone, trigger: "blur" }],
        emailcode: [{ validator: validateCode, trigger: "blur" }]
      }
    };
  },
  methods: {
    //处理注册点击事件
    handleClick() {
      if (this.agree) {
        this.$refs.userMessage.validate(bollean => {
          // console.log(`${!(!this.agree&&this.isShow)}`)
          if (bollean) {
            this.$axios
              .post("api/register/", {
                  username: this.user.username,
                  password: this.user.password,
                  email: this.user.email,
                  emailcode: `${this.user.emailcode}`,
                  agreement: `${!(!this.agree&&this.isShow)}`
              })
              .then(res => {
                // console.log(res)
                if(res.status==200){
                  if (res.data.code==30000) {
                  this.$message.success(res.data.message);
                }
                }
              })
              .catch(res => {
                this.$message({
                  showClose: true,
                  message: "注册失败，请重试",
                  type: "error"
                });
              });
          }
        });
      } else {
        this.isShow = true;
      }
    },
    //获取验证码
    // 1055671200@qq.com
    getCode(e) {
      // console.log(this.user.email=='')
      if (this.isSend&&this.user.email!='') {
        this.$axios.get(
          `api/email/?email=${this.user.email}`,
          // {
          //   method: "get",
          //   params: {
          //     email: this.user.email
          //   }
          // }
        ).then(res => {
          if (res.data.code == 20000) {
            this.$message.success(res.data.message);
          }
        });
        this.isSend = false;
        var count = 60;
        e.target.innerText = "重新发送(60s)";
        var clear = setInterval(() => {
          count--;
          e.target.innerText = `重新发送(${count}s)`;
          if (count === 0) {
            clearInterval(clear);
            this.isSend = true;
            e.target.innerText = "获取验证码";
          }
        }, 1000);
      }else{
        this.$message.error("请输入邮箱")
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100%;
  background-image: url("../assets/theme-bg.webp");
  background-repeat: no-repeat;
  background-size: 100%;
  overflow: hidden;
  .title {
    font-size: 36px;
    color: white;
    width: 144px;
    margin: 0 auto;
    margin-bottom: 2%;
    margin-top: 4%;
  }
  form {
    width: 400px;
    margin: 0 auto;
    /deep/.el-form-item {
      margin-bottom: 8%;
    }
    /deep/.el-form-item__content {
      border-bottom: 1px solid white;
      span {
        color: white;
        cursor: pointer;
        user-select: none;
        //   background-image: url("../assets/theme-bg.webp");

        // background-size: 100%;
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
    .el-checkbox {
      margin: 10px;
    }
  }
}
</style>
