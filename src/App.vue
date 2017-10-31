<template>
  <div id="cq-blog">
    <topNav></topNav>

    <div class="cq-container cq-content-body clearFix">


        <div class="cq-left">
          <transition  name="component-fade" mode="out-in">
            <router-view ></router-view>
          </transition>
        </div>
        <div class="cq-right">
          <rightSide></rightSide>
        </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import topNav from './components/header.vue'
import Foot from './components/footer.vue'
import rightSide from './pages/rightSide.vue'
export default {
  components: {topNav, rightSide, Foot},
  data () {
    return {
      transitionName: 'component-fade'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
    }
  }
}
</script>

<style>
  html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
  }
  html, body {height: 100%;}
  body {background-color: #f8f8f8;}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img {display: block;border-style: none;}
  ol, ul {list-style: none;}
  a {text-decoration: none;}
  .clearFix:after {
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
  }
  .clearFix {zoom: 1}
  .cq-container {
    width: 900px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .cq-content-body {padding:80px 15px 10px;min-height: 100%;box-sizing: border-box;}
  .cq-left {float: left;width: 560px;}
  .cq-right {float:right;width: 280px;}
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .5s ease;
  }
  .component-fade-enter, .component-fade-leave-to {
    opacity: 0;
  }
  #cq-blog {height: 100%;}
</style>
