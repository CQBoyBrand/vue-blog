<template>
  <div class="cq-header">
    <div class="cq-container clearFix">
      <div class="cq-logo">
        <a href="/"><img src="../assets/logo.png" class="cq-logo-image" alt="重庆崽儿Brand">
        </a>
      </div>
      <ul class="cq-nav clearFix">
        <li v-for="nav in navs">
          <router-link  :to="nav.path">{{ nav.name }}</router-link>
        </li>
      </ul>
      <div class="motto">
       <i>Write less, Do more！</i>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navs: [
        {path: '/Home',name: 'Home'},
        {path: '/Code',name: 'Code'},
        {path: '/Note',name: 'Note'},
        {path: '/About',name: 'About'},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cq-header {
    background: rgb(234, 234, 234);
    height: 60px;
    position: fixed;
    top: 0;
    width: 100%;
  }
  .cq-header .cq-logo{
    float: left;
    width: 30%;
    font-size: 0;
  }
  .cq-logo>a {display: inline-block;}
  .cq-logo span {
    font-size: 24px;
    color: #333;
    padding-left: 10px;
    float: left;
  }
  .cq-logo-image {
    height: 60px;
    float: left;
  }
  .cq-nav {
    float: left;
    width: 40%;
  }
  .cq-nav li {
    float: left;
  }
  .cq-nav li a {
    display: inline-block;
    padding: 0rem 15px;
    font-size: 16px;
    color: #333;
    line-height: 60px;
  }
  .motto {
    float: left;
    width: 30%;
    font-size: 16px;
    line-height: 60px;
    color: #333;
  }
  .cq-nav li a.currentTab {color: #0062cc;}
</style>
