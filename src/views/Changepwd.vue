<template>
  <div class="changePwd">
    <el-form
      :model="LoginruleForm"
      status-icon
      :rules="changePwdrules"
      ref="changePwdruleForm"
      class="demo-changePwdruleForm"
    >
      <el-form-item prop="username">
        <el-input
          placeholder="用户名"
          type="text"
          v-model="changePwdruleForm.old_password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          placeholder="密码"
          type="password"
          v-model="changePwdruleForm.new_password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      changePwdruleForm:{
        old_password:'',
        new_password:'',
        new_password_confirm:''
      },
      changePwdrules:{
        
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.changePwd {
  width: 100%;
  height: 100%;
  background: url("../assets/theme-bg.webp") no-repeat;
  background-size: cover;
}
</style>
