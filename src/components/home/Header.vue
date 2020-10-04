<template>
  <div id="header">
    <div class="headerLeft">
      <a href>
        <img src="../../assets/home.png" alt />
      </a>
      <span>{{date}}</span>
      <span>{{time}}</span>
      <span>{{day}}</span>
    </div>
    <div class="headerRight">
        <span>{{city}}</span>
        <span>{{fl}}</span>
        <span>{{wendu}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: "",
      time: "",
      day: "",
      city:"",
      fl:'',
      wendu:"",
    };
  },
  created() {
    setInterval(() => {
      var date = new Date();
      this.date = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,"0")}-${String(date.getDate()).padStart(2, "0")}`;
      this.time = `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
      switch (date.getDay()) {
        case 0:
          this.day = `星期日`;
          break;
        case 1:
          this.day = `星期一`;
          break;
        case 2:
          this.day = `星期二`;
          break;
        case 3:
          this.day = `星期三`;
          break;
        case 4:
          this.day = `星期四`;
          break;
        case 2:
          this.day = `星期二`;
          break;
        case 5:
          this.day = `星期五`;
          break;
        case 6:
          this.day = `星期六`;
          break;
      }
    }, 1000);
    this.$axios.get("http://wthrcdn.etouch.cn/weather_mini?city=温州").then(res=>{
        this.city=res.data.data.city
        this.fl=res.data.data.forecast[0].fengxiang+res.data.data.forecast[0].fengli
        this.wendu=res.data.data.wendu+"度"
        console.log(res)
    })
  }
};
</script>
<style lang="scss" scoped>
#header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #2aa7d3;
  overflow: hidden;
  background: url("../../assets/header.jpg");
  background-size:90%;
  .headerLeft {
    display: flex;
    height: 20px;
    width:200px;
    align-content: center;
    justify-content: space-between;
    margin-top: 12px;
    margin-left: 52px;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
  
  }
  .headerRight{
      height:20px;
      width:200px;
      display: flex;
      justify-content: space-between;
      margin-top: 14px;
      margin-right: 10px;
  }
}
</style>