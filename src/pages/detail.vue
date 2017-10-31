<template>
  <div class="cq-art-detail">
    <h3 class="cq-art-title">{{articleDetail.artTitle}}</h3>
    <div class="cq-art-info">
      <span>发布时间：<i>{{articleDetail.artCdate}}</i></span><span>阅读：<i>{{articleDetail.readNum}}</i></span><span>评论：<i>0</i></span>
    </div>
  <!--  <div v-html="compiledMarkdown"></div>-->
    <div class="contBody" v-html="articleDetail.artContent"></div>
  </div>
</template>

<script>
  import {getArticledetail} from "../api/api"

  export default {
    data () {
      return {
        articleDetail: []
      }
    },
    methods:{
      getArticledetail(){
        this.$http.post(getArticledetail, {"artId": this.$route.params.id}).then((res) => {
          this.articleDetail = res.data.article[0];
        })
      }
    },
  computed: {

  },
    mounted (){
      this.getArticledetail()
    },
    watch:{
      '$route':'getArticledetail'
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "../../static/css/github-markdown.css";
  @import "../../static/css/atom-one-dark.min.css";
  .cq-art-detail {background: rgba(255,255,255,1);border-radius: 5px;padding: 15px; }
  .cq-art-title, .cq-art-info {text-align: center;}
  .cq-art-title {color: #444;}
  .cq-art-info{color: #999;font-size: 12px;border: 1px dashed #ccc;padding: 8px 0;margin-top: 10px;}
  .cq-art-info span {padding: 0 10px;}
  pre {background: rgba(6, 5, 19, 0.07);padding: 15px;box-sizing: border-box;}
  .contBody {padding: 10px 0;line-height: 24px;}
  .contBody img{max-width: 100%;padding: 8px;}
  .contBody h1, .contBody h2, .contBody h3, .contBody h4, .contBody h5, .contBody h6 {padding: 15px 0!important;}
  .contBody>p{text-indent: 2rem;}
  .contBody hr{margin: 15px 0;}
  .contBody blockquote{padding: 10px 15px;border-left-style: solid;border-left-width: 10px;border-color: #D6DBDF;
    background: none repeat scroll 0 0 rgba(102,128,153,.05);}
  table{border-collapse:collapse;border-spacing:0;border-left:1px solid #888;border-top:1px solid #888;background:#efefef;width: 100%;}
  th,td{border-right:1px solid #888;border-bottom:1px solid #888;padding:5px 15px;text-align: center!important;}
  th{font-weight:bold;background:#ccc;}
</style>
