<template>
  <div>
    <div class="aboutme">
      <h2>关于我</h2>
      <div class="content" v-html="userInfo.introduce"></div>
      <h2>联系我</h2>
      <div class="contactMe">
          <p>邮箱：<a :href="'mailto:'+userInfo.email" style="color: #0062cc;">{{ userInfo.email }}</a></p>
          <p>新浪微博：<a target="_blank" :href="userInfo.weibo" style="color: #0062cc;">重庆崽儿Brand</a></p>
          <p>Github：<a target="_blank" :href="userInfo.github" style="color: #0062cc;">Brand</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  import {getUserInfo} from '../api/api'
  export default {
    data () {
      return {
        userInfo: ''
      }
    },
    created(){
      this.$http.post(getUserInfo,{userName: 'admin'}).then((res) => {
        // success
        this.userInfo = res.data.userInfo[0];
      }, (error) => {
        // error
        console.log(error)
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ol, ul {list-style: none;}
.aboutme{background: #fff;padding: 20px;}
  .aboutme h2{text-align: center;}
  .content{text-indent: 2em;font-size: 15px;line-height: 24px;padding-top: 20px;}
.contactMe p{line-height: 30px;font-size: 16px;}
.contactMe p a{color: #000;}
.contactMe p a:hover{text-decoration: underline;color: #1d90e6;}
</style>
