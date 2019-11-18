<template>
  <div class="contentSection">
      <div class="dayPosts">
        <div class="postImg">
          <img src="../../assets/img/3.gif"/>
          <div class="byName">摄影|TimeerMossolder</div>
        </div>
        <div class="postContent">
          <div class="content">越不肯努力便越自怜</div>
          <div class="author">老舍《骆驼祥子》 </div>
        </div>
        <div class="postFooter">
          <div class="find"><img src="../../assets/img/find.png" /><span style="padding-left: 0.35rem;">发现</span></div>
          <div class="right">
            <img src="../../assets/img/edit.png" />
            <img src="../../assets/img/collect.png" />
            <img src="../../assets/img/share.png" />
            <img src="../../assets/img/heart-dash.png" />
          </div>
        </div>
      </div>
      <div class="VOLPart">
        <div class="header" @click="collapse = !collapse">一个VOL.2345<i :class="collapse ? 'el-icon-arrow-up':'el-icon-arrow-down' "></i></div>
        <el-collapse-transition>
          <div v-show="collapse" class="transition-box">
            <div class="volList" v-for="(item,index) in volList" :key="index">
              <i class="el-icon-arrow-right"></i>
              <div class="title">
                <div class="top">{{'阅读'+item}}</div>
                <div>云端之上</div>
              </div>
            </div>
          </div>
        </el-collapse-transition>
      </div>
      <div class="readPart">
        <div class=" readPartOne" v-for="(item,index) in volList" :key="index" @click="gotoArticle(item)">
          <div class="type">{{'-阅读-'+item}}</div>
          <div class="title">云端之上</div>
          <div class="byname">文/路平生</div>
          <img src="../../assets/img/3.gif"/>
          <div class="content">衰老来得太早,她失望的是没有对抗磨难的心</div>
          <div class="footerLine">
            <div>今天</div>
            <div class="right">
              <img src="../../assets/img/heart-dash.png" />
              <img src="../../assets/img/share.png" />
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Head from '~/components/Head.vue'
import FooterTab from '~/components/FooterTab.vue'

export default {
  components: {
    Head,
    FooterTab
  },
  data() {
    return {
      list: new Array(20),
      currentPart:'one',
      collapse:false,
      volList:[1,2,3,4,5,6,7,8,9],//VOL列表
    }
  },
  mounted() {
  },
  methods:{
	  handleClick(param){
		  console.log('111111--->',param);
      this.currentPart = param;
	  },
    gotoArticle(item){
      this.$router.push('/articleDetail')
    }
  }
}
</script>

<style lang="less">
 .contentSection{
   position: relative;
   top: 60px;
   height: calc(100vh - 60px);
   overflow-y: auto;
   overflow-x: hidden;
   padding-bottom: 80px;
 }
.dayPosts{
  background-color: @backgroundColor;
  .postImg{
    border: 0;
  }
  .postImg img{
    width: 100%;
    height: 12.5rem;
  }
  .postImg .byName{
    text-align: center;
    margin: 10px 0;
  }
  .postContent{
    margin: 1.5rem;
  }
  .postContent .content{
    text-indent: 2rem;
    padding: 0.9375rem 0;
  }
  .postContent .author{
    text-align: center;
    margin: 1.25rem 0;
  }
  .postFooter{
    display: flex;
    justify-content: space-between;
    padding: 0 0.625rem;
    align-items: center;
  }
  .postFooter img{
    width: 1.375rem;
  }
  .postFooter .find{
    display: flex;
    align-items: center;
  }
  .postFooter .right{
    padding-right: 0.625rem;
  }
  .postFooter .right img{
    margin: 0 0.625rem;
  }
}
.VOLPart{
  background-color: @backgroundColor;
  margin: 0.5rem 0;
  .header{
    display: flex;
    height: 3rem;
    justify-content: center;
    align-items: center;
  }
  .transition-box {
    padding: 0 20px;
  }
  .volList{
    display: flex;
    align-items: center;
    padding: 1rem 0;
    .title{
      margin-left: 0.3rem;
      .top{
        margin-bottom: 0.3rem;
      }
    }
  }
}
.readPart{
  .readPartOne{
    padding: 1rem;
    margin-bottom: 0.8rem;
    background-color: @backgroundColor;
    .type{
      text-align: center;
      color: #c9c9c9;
      font-size: 0.875rem;
    }
    .title{
      font-size: 1.5rem;
      margin: 0.5rem 0;
    }
    .byname{
      margin: 0.3rem 0;
    }
    img{
      width: 100%;
      max-height: calc(100vw * 3/5);
    }
    .content{
      margin: 0.6rem 0 2rem 0;
    }
    .footerLine{
      display: flex;
      justify-content: space-between;
      padding: 0 0.625rem;
      .right img{
        width: 1.375rem;
        margin: 0 0.625rem;
      }
    }
  }
}
</style>
