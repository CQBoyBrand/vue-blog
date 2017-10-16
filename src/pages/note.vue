<template>
  <div>
    <ul class="cq-item-list">
      <li class="clearFix">
        <div class="cq-leftImg">
          <img src="../assets/backgroundImg.jpg" alt="标题"/>
        </div>
        <div class="cq-right-content">
          <h4 class="item-title">这是note标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题</h4>
          <div class="item-abstract">这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要</div>
          <div class="item-meta">
            <span><i class="iconfont icon-shijian1"></i>2017-07-07 12:12:12</span><span><i class="iconfont icon-yuedu"></i>10000</span><span><i class="iconfont icon-xiaoxi"></i>10000</span><span><i class="iconfont icon-fenlei"></i>note</span>
          </div>
        </div>
      </li>
      <li class="clearFix">
        <div class="cq-leftImg">
          <img src="" alt="标题"/>
        </div>
        <div class="cq-right-content">
          <h4 class="item-title">这是note标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题</h4>
          <div class="item-abstract">这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要</div>
          <div class="item-meta">
            <span><i class="iconfont icon-shijian1"></i>2017-07-07 12:12:12</span><span><i class="iconfont icon-yuedu"></i>10000</span><span><i class="iconfont icon-xiaoxi"></i>10000</span><span><i class="iconfont icon-fenlei"></i>note</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  img {height: 100%;width: 100%;}
  .cq-item-list li {padding: 10px;background: #fff;border-radius: 5px;margin-bottom: 15px;}
  .cq-leftImg, .cq-right-content {float: left;}
  .cq-leftImg {
    height: 119px;
    width: 175px;
  }
  .cq-right-content {padding-left: 10px;width: 64%;}
  .item-title {
    color: #555;
    font-size: 16px;
    padding: 0 0 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-abstract {height: 76px;margin-bottom: 5px;color: #333;font-size: 13px;}
  .item-meta {font-size: 12px;color: #666;}
  .item-meta i {font-size: 12px;margin-right: 4px;}
  .item-meta span {margin-right: 15px;}
</style>
