<template>
  <div class="cq-art-detail">
    <h3 class="cq-art-title">{{articleDetail.artTitle}}</h3>
    <div class="cq-art-info">
      <span>发布时间：<i>{{articleDetail.artCdate}}</i></span><span>阅读：<i>100</i></span><span>评论：<i>100</i></span>
    </div>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
  import marked from 'marked';
  //import hightlight from "highlight";

  export default {
    data () {
      return {
        articleDetail: []
      }
    },
    methods:{
      markdown() {
        marked.setOptions({
          renderer: new marked.Renderer(),
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false
        });
        marked.setOptions({
          highlight: function (code) {
            return hightlight.highlightAuto(code).value;
          }
        });
      }
    },
  computed: {
    compiledMarkdown: function () {
      return marked(this.articleDetail.artContent, { sanitize: true })
    }
  },
    mounted (){
      this.$http.post("/api/getArtticleDetial", {"artId": this.$route.params.id}).then((res) => {
        this.articleDetail = res.data[0];
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cq-art-detail {background: rgba(255,255,255,0.6);border-radius: 5px;padding: 15px; }
  .cq-art-title, .cq-art-info {text-align: center;}
  .cq-art-title {color: #444;}
  .cq-art-info{color: #999;font-size: 12px;border: 1px dashed #ccc;padding: 8px 0;margin-top: 10px;}
  .cq-art-info span {padding: 0 10px;}
</style>
