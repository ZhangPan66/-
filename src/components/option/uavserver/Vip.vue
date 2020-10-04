<template>
  <div id="vip">
    <div class="title">个人会员申请</div>
    <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm">
      <el-form-item
        label="姓名"
        prop="age"
        :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
      >
        <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="年龄"
        prop="age"
        :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
      >
        <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="性别"
        prop="age"
        :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
      >
        <el-select type="age" v-model.number="numberValidateForm.age">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="邮箱"
        prop="age"
        :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
      >
        <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="电话"
        prop="age"
        :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
      >
        <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numberValidateForm: {
        age: ""
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
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
.el-form {
  width: 385px;
  margin: 0 auto;
  /deep/.el-input__inner {
    height: 30px;
  }
  .el-button {
    background-color: #06218a;
    color: white;
    width: 212px;
    height: 54px;
    width: 150px;
    margin: 0 auto;
    display: block;
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
    justify-content: flex-start;
    /deep/.el-form-item__label {
      width: 51px;
      height: 34px;
    }
  }
  .el-select{
    width:100%;
  }
}
</style>