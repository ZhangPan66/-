<template>
  <div class="addUav">
    <h3 class="addUav-title">添加无人机</h3>
    <div class="addUav-container">
      <el-form
        :model="addUavRuleForm"
        :rules="rules"
        ref="addUavRuleForm"
        label-width="100px"
        class="demo-addUavRuleForm"
        label-position="top"
      >
        <el-form-item label="品牌名称" prop="brand">
          <el-input v-model="addUavRuleForm.brand"></el-input>
        </el-form-item>
        <el-form-item label="型号" prop="model">
          <el-input v-model="addUavRuleForm.model"></el-input>
        </el-form-item>
        <el-form-item label="无人机注册号/生产序列号" prop="serial_no">
          <el-input v-model="addUavRuleForm.serial_no"></el-input>
        </el-form-item>
        <el-form-item label="购买日期（格式：20xx-xx-xx）" prop="buy_date">
          <el-input v-model="addUavRuleForm.buy_date"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(addUavRuleForm)"
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
      addUavRuleForm: {
        brand: "",
        model: "",
        serial_no: "",
        buy_date: ""
      },
      rules: {
        brand: [{ required: true, message: "请输入品牌", trigger: "blur" }],
        model: [{ required: true, message: "请输入型号", trigger: "blur" }],
        serial_no: [
          { required: true, message: "请输入无人机注册号", trigger: "blur" }
        ],
        buy_date: [
          { required: true, message: "请输入购买日期", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(fromData) {
      this.$refs.addUavRuleForm.validate(valid => {
        // 表单还有未填完的信息
        if (!valid) return this.$message.error("请完成无人机信息的填写！");
        const { brand, model, serial_no, buy_date } = fromData;
        this.$axios
          .post("api/add_uav/", {
            brand,
            model,
            serial_no,
            buy_date
          })
          .then(resp => {
            if (resp.data.code === 40000) {
              this.$message.success(resp.data.message);
              this.$refs.addUavRuleForm.resetFields();
            } else {
              this.$message.error(resp.data.message);
            }
          });
      });
    }
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
  &-container {
    width: 385px;
    .el-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      .el-form-item {
        width: 100%;
        /deep/.el-form-item__label {
          height: 20px;
          font-size: 12px;
          line-height: 20px;
          margin-bottom: 15px;
          font-weight: 500;
          color: #333333;
        }
        .el-form-item__content {
          .el-input {
            /deep/input {
              height: 30px;
              width: 90%;
            }
          }
          .el-button {
            width: 150px;
            height: 30px;
            line-height: 30px;
            padding: 0;
            background: #06218a;
            border-radius: 27px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -60px;
          }
        }
      }
    }
  }
}
</style>
