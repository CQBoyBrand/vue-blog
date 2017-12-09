<template>
  <div class="cq-art-detail">
    <h3 class="cq-art-title">{{articleDetail.artTitle}}</h3>
    <div class="cq-art-info">
      <span>发布时间：<i>{{articleDetail.artCdate}}</i></span><span>阅读：<i>{{articleDetail.readNum}}</i></span><span>评论：<i>0</i></span>
    </div>
    <div class="contBody">
      <img style="width: 530px;height: 230px" :src="articleDetail.artThumb" alt="articleDetail.artTitle">
      <div class="markdown-body" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>
<script>
  import {getArticledetail} from "../api/api"
  import marked from 'marked'
  import hljs from '../../static/js/highlight.min.js'
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  });
  export default {
    data () {
      return {
        articleDetail: []
      }
    },
    methods:{
      getArticledetail(){
        this.$http.post(getArticledetail, {"artId": this.$route.params.id}).then((res) => {
          console.log(res)
          this.articleDetail = res.data.article[0];
        })
      }
    },
  computed: {
    compiledMarkdown: function() {
      return marked(this.articleDetail.artContent || '', {
        sanitize: true
      })
    }
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
<style lang="scss">
  @import "../../static/css/github-markdown.css";
  @import "../../static/css/atom-one-dark.min.css";
  .cq-art-detail {background: rgba(255,255,255,1);border-radius: 5px;padding: 15px; }
  .cq-art-title, .cq-art-info {text-align: center;}
  .cq-art-title {color: #444;}
  .cq-art-info{color: #999;font-size: 12px;border: 1px dashed #ccc;padding: 8px 0;margin-top: 10px;}
  .cq-art-info span {padding: 0 10px;}
  .markdown-body img{margin: auto;}
</style>
