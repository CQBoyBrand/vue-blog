<template>
  <div>
    <ul class="cq-item-list">
      <router-link class="clearFix" :to="'/Detail/'+item.artId" :key="item.artId" tag="li" v-for="item in articleList">
        <div class="cq-leftImg">
          <img :src="item.artThumb" alt="item.artTitle"/>
        </div>
        <div class="cq-right-content">
          <h4 class="item-title">{{item.artTitle}}</h4>
          <div class="item-abstract">{{item.artAbstract}}</div>
          <div class="item-meta">
            <span><i class="iconfont icon-shijian1"></i>{{item.artCdate}}</span><span><i class="iconfont icon-yuedu"></i>{{item.readNum}}</span><span><i class="iconfont icon-xiaoxi"></i>0</span><span><i class="iconfont icon-fenlei"></i>{{item.artType}}</span>
          </div>
        </div>
      </router-link>
    </ul>
    <Pages :pageNo="pageNo" :current="currentPage" @currentPages="currentPages"></Pages>
  </div>
</template>

<script>
  import {getArticleList} from '../api/api'
  import Pages from './paginations'
  export default {
    components: {Pages},
    data () {
      return {
        articleList:[],
        currentPage: 1,
        pageNo: 1,
        pageRow:7
      }
    },
    methods:{
      getList(){
        this.$http.post(getArticleList,{artType: 'Note',pageNum: this.currentPage,pageRow: this.pageRow}).then((res) => {
          // success
          this.articleList = res.data.artList;
          if(res.data.total == 0){
            this.pageNo == 1
          }else {
            this.pageNo = Math.ceil(res.data.total / this.pageRow);
          }
        }, (error) => {
          // error
          console.log(error)
        });
      },
      currentPages(data){
        this.currentPage= data;
      }
    },
    created () {
      this.getList();
    },
    watch:{
      currentPage: 'getList'
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ol, ul {list-style: none;}
  img {height: 100%;width: 100%;}
  .cq-item-list li {padding: 10px;background: #fff;border-radius: 5px;margin-bottom: 15px;cursor: pointer;transition: all 0.4s ease-in-out 0s;}
  .cq-leftImg, .cq-right-content {float: left;}
  .cq-leftImg {
    height: 119px;
    width: 175px;
  }
  .cq-right-content {padding-left: 10px;width: 64%;}
  .item-title {
    color: #444;
    font-size: 16px;
    padding: 0 0 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-abstract {height: 76px;margin-bottom: 5px;color: #666;font-size: 13px;}
  .item-meta {font-size: 12px;color: #888;}
  .item-meta i {font-size: 12px;margin-right: 4px;}
  .item-meta span {margin-right: 15px;}
</style>
