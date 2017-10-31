<template>
  <div class="">
      <div class="cq-hot-article">
        <h4 class="cq-hot-title"><i class="iconfont icon-remen"></i>热门文章</h4>
        <ul class="cq-hot-list">
          <router-link :to="'/Detail/'+item.artId" tag="li" :key="item.artId" v-for="item in hotArtList">
            {{item.artTitle}}
          </router-link>
        </ul>
      </div>
    <div class="cq-tags">
      <span v-for="item in tagList">
        <router-link :to="'/tag/'+item.tagId" :key="item.tagId">{{item.tagName}}({{item.artNum}})</router-link>
      </span>
    </div>
  </div>
</template>

<script>
  import {getTags, getHotArtList} from '../api/api'
export default {
  data () {
    return {
      tagList: [],
      hotArtList:[]
    }
  },
  methods: {
    getTags(){
      this.$http.post(getTags).then((res) => {
        // success
        this.tagList = res.data.tagList;
      }, (error) => {
        // error
        console.log(error)
      });
    },
    getHotArtList(){ //获取人们文章
      this.$http.get(getHotArtList).then((res) => {
        // success
        console.log("res="+JSON.stringify(res.data.hotArtList))
        this.hotArtList = res.data.hotArtList;
      }, (error) => {
        // error
        console.log(error)
      });
    }
  },
  created(){
    this.getTags(),
    this. getHotArtList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cq-hot-article {background: rgba(255,255,255,1);border-radius: 5px;padding: 10px 0;}
  .cq-hot-title {color: #444;border-bottom: 1px dashed #ccc;padding:0 10px 8px;font-size: 16px;}
  .cq-hot-title i {margin-right: 5px;}
  .cq-hot-list {padding-top: 8px;}
  .cq-hot-list li {line-height: 30px;padding: 0 10px;cursor: pointer;transition: all 0.4s ease-in-out 0s;color: #666;}
  .cq-hot-list li:hover {background: #ccc}

  .cq-tags {background: rgba(255,255,255,1);border-radius: 5px;margin-top: 15px;padding: 10px;}
  .cq-tags a {background: rgba(135,135,135,0.3);padding: 5px 15px;margin:0 8px 8px 0;border-radius: 5px;cursor: pointer;display: inline-block;color: #444;transition: all 0.4s ease-in-out 0s}
  .cq-tags a:hover {background: rgba(135,135,135,0.6);}
 /* .cq-tags span a{color: #333;}*/
</style>
