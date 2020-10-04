<template>
  <div id="message">
    <div class="title">
      <span>用户个人信息</span>
    </div>
    <ul>
      <li>
        <span>姓名</span>
        :{{user.rel_name}}
      </li>
      <li>
        <span>身份证号</span>:{{user.card_id}}
      </li>
      <li>
        <span>联系人</span>
        :{{contacts}}
      </li>
      <li>
        <span>联系人电话</span>
        :{{contactsPhone}}
      </li>
      <li>
        <router-link :to="{name:'Fix'}" tag="button">修改信息</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
        user:{
          rel_name:'张攀',
          card_id:"145455444455",
          age:"null",
          sex:null,
          eamil:null,
          tel:'18484848848484'
        }
    }
  }
}
</script>
<style lang="scss" scoped>
#message {
  width: 100%;
  height: 100%;
  .title {
    text-align: center;
    padding-top: 20px;
    font-weight: bold;
    margin-bottom: 50px;
  }
  ul {
    width: 270px;
    margin: 0 auto;
    list-style: none;
    li {
      margin-bottom: 50px;
      button {
        background-color: #06218a;
        color: white;
        width: 212px;
        height: 54px;
        width: 150px;
        margin: 0 auto;
        display: block;
        line-height: 13px;
        cursor: pointer;
        height: 35px;
        background: #06218a;
        outline: none;
        border-radius: 27px;
        border: 1px solid #979797;
      }
    }
  }
}
</style>