<template>
  <div id="vip">
    <div class="title">企业会员申请</div>
    <el-form :model="company" ref="company" class="demo-ruleForm">
      <div class="contianer">
        <div>
          <el-form-item
            label="公司名称"
            prop="com_name"
            :rules="[
      { required: true, message: '请输入信息'},
    ]"
          >
            <el-input type="com_name" v-model="company.com_name" placeholder="请输入公司名称"></el-input>
          </el-form-item>
          <el-form-item
            label="公司地址"
            prop="com_address"
            :rules="[
      { required: true, message: '请输入信息'},
    ]"
          >
            <el-input type="com_address" v-model="company.com_address" placeholder="请输入公司地址"></el-input>
          </el-form-item>
          <el-form-item
            label="统一社会信用代码"
            prop="credit_code"
            :rules="[
      { required: true, message: '请输入信息'},
    ]"
          >
            <el-input type="credit_code" v-model="company.credit_code" placeholder="请输入公司统一社会信用代码"></el-input>
          </el-form-item>
          <el-form-item
            label="企业类型"
            prop="com_type"
            :rules="[
      { required: true, message: '请输入信息'},
    ]"
          >
            <el-input type="com_type" v-model="company.com_type" placeholder="请输入企业类型"></el-input>
          </el-form-item>
          <el-form-item
            label="法人"
            prop="legal_person"
            :rules="[
      { required: true, message: '请输入信息'},
    ]"
          >
            <el-input type="legal_person" v-model="company.legal_person" placeholder="请输入企业法人"></el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item
            label="注册资本"
            prop="reg_capital"
            :rules="[
      { required: true, message: '请输入信息'},
    ]"
          >
            <el-input type="reg_capital" v-model="company.reg_capital" placeholder="请输入公司注册资本"></el-input>
          </el-form-item>
          <el-form-item
            label="公司介绍"
            prop="com_intro"
            :rules="[
      { required: true, message: '请输入信息'},
    ]"
          >
            <el-input type="com_intro" v-model="company.com_intro" placeholder="请输入公司介绍" ></el-input>
          </el-form-item>
          <el-form-item
            label="联系人"
            prop="contacter"
            :rules="[
      { required: true, message: '请输入信息'},
    ]"
          >
            <el-input type="contacter" v-model="company.contacter" placeholder="请输入联系人电话"></el-input>
          </el-form-item>
          <el-form-item
            label="联系电话"
            prop="contacter_tel"
            :rules="[
      { required: true, message: '请输入信息'},
    ]"
          >
            <el-input type="contacter_tel" v-model="company.contacter_tel" placeholder="请输入联系电话"></el-input>
          </el-form-item>
        </div>
      </div>
      <el-form-item class="button">
        <el-button type="primary" @click="submitForm('company')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      company: {
        com_name:"",
        com_address:"",
        credit_code:'',
        com_type:'',
        legal_person:'',
        reg_capital:"",
        com_intro:"",
        contacter:'',
        contacter_tel:'',
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  }
};
</script>
<style lang="scss" scoped>
#vip {
  width: 100%;
  height: 100%;
}
.title {
  padding-top: 10px;
  text-align: center;
}
.contianer{
      display: flex;
      justify-content: space-between;
  }
.el-form {
  width: 700px;
  margin: 0 auto;
  /deep/.el-input__inner {
    height: 30px;
  }
  .button {
    margin: 0 auto;
  }
  .el-button {
    background-color: #06218a;
    color: white;
    width: 212px;
    height: 54px;
    width: 150px;

    display: block;
    margin: 0 auto;
    line-height: 13px;
    height: 35px;
    background: #06218a;
    border-radius: 27px;
    border: 1px solid #979797;
  }
  .el-form-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;
    width: 300px;
    justify-content: flex-start;
    /deep/.el-form-item__label {
      text-align: left;
      height: 34px;
    }
  }
}
</style>