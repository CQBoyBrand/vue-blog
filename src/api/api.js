/**
 * Created By brand On 2017/10/25
 */
const _URL="http://120.78.152.246:3100";

module.exports= {

  //article
  getArticleList: _URL+'/getArtList',
  getArticledetail: _URL+'/getArtDetail',
  getArtListByTagId: _URL+'/getArtListByTagId',
  getHotArtList: _URL+'/getHotArtList',

  //tag
  getTags :  _URL+'/getTags',
};
