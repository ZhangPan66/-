<template>
  <div class="manage">
    <ul>
      <li>
        <router-link to="/">会员管理</router-link>
      </li>
      <li>
        <router-link to="/">无人机管理</router-link>
      </li>
      <li>
        <router-link to="/">批复飞行计划</router-link>
      </li>
      <li>
        <router-link to="/">退出登录</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  created() {
    this.$axios
      .get("http://wthrcdn.etouch.cn/weather_mini?city=成都")
      .then(res => {
        console.log(res);
      });
  }
};
</script>
<style lang="scss" scoped>
.manage{
    background-color:#051628;
}
.manage ul {
  width: 130px;
  padding: 0px 11px;
  box-sizing: border-box;
  background: rgba(11, 77, 160, 0.33);
  li {
    height: 38px;
    line-height: 38px;
    border-bottom: 1px solid #0b4da0;
    &:last-child{
        border:none;
    }
    a {
      color: white;
      font-size: 18px;
    }
  }
}
</style>