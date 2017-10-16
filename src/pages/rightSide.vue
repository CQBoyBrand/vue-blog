<template>
  <div class="">
      <div class="cq-hot-article">
        <h4 class="cq-hot-title"><i class="iconfont icon-remen"></i>热门文章</h4>
        <ul class="cq-hot-list">
          <router-link to="/Detail" tag="li">
            文章1111111
          </router-link>
          <router-link to="/Detail" tag="li">
            文章1111111
          </router-link>
          <router-link to="/Detail" tag="li">
            文章1111111
          </router-link>
          <router-link to="/Detail" tag="li">
            文章1111111
          </router-link>
        </ul>
      </div>
    <div class="cq-tags">
      <span>标签(1)</span><span>标签(2)</span><span>标签(3)</span><span>标签(4)</span>
    </div>
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
  .cq-hot-article {background: rgba(255,255,255,0.6);border-radius: 5px;padding: 10px 0;}
  .cq-hot-title {color: #444;border-bottom: 1px dashed #ccc;padding:0 10px 8px;font-size: 16px;}
  .cq-hot-title i {margin-right: 5px;}
  .cq-hot-list {padding-top: 8px;}
  .cq-hot-list li {line-height: 30px;padding: 0 10px;cursor: pointer;transition: all 0.4s ease-in-out 0s;color: #666;}
  .cq-hot-list li:hover {background: #ccc}

  .cq-tags {background: rgba(255,255,255,0.6);border-radius: 5px;margin-top: 15px;padding: 10px;}
  .cq-tags span {background: rgba(135,135,135,0.6);padding: 5px 15px;margin:0 8px 8px 0;border-radius: 5px;cursor: pointer;display: inline-block;color: #444;}
</style>
