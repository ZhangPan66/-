<template>
  <div class="addUav">
    <h3 class="addUav-title">添加无人机</h3>
    <div class="addUav-container">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="top"
      >
        <el-form-item label="品牌名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="型号" prop="xinhao">
          <el-input v-model="ruleForm.xinhao"></el-input>
        </el-form-item>
        <el-form-item label="无人机注册号/生产序列号" prop="number">
          <el-input v-model="ruleForm.number"></el-input>
        </el-form-item>
        <el-form-item label="购买日期" prop="buyDate">
          <el-input v-model="ruleForm.buyDate"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >确认添加</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        xinhao: "",
        number: "",
        buyDate: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        xinhao: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        number: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        buyDate: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.addUav {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-title {
    width: 100%;
    text-align: center;
    margin: 30px 0;
    font-size: 20px;
    height: 20px;
    font-weight: 500;
    color: #333333;
  }
  &-container{
    width: 385px;
    .el-form{
      display: flex;
      flex-direction: column;
      align-items: center;
      .el-form-item{
        width: 100%;
        /deep/.el-form-item__label{
          height: 20px;
          font-size: 12px;
          line-height: 20px;
          margin-bottom: 15px;
          font-weight: 500;
          color: #333333;
        }
        .el-form-item__content{
          .el-input{
            /deep/input{
              height: 30px;
              width: 90%;
            }
          }
          .el-button{
            width: 150px;
            height: 30px;
            line-height: 30px;
            padding: 0;
            background: #06218A;
            border-radius:27px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -60px
          }
        }
      }
    }
  }
}
</style>
