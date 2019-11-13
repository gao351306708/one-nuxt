<template>
  <div class="container">
    <Head>
      <div v-if="currentPart == 'one' " class="headOne">
        <div class="left"><span class="day">12</span>9月</div>
        <div class="right">星期三</div>
      </div>
      <div v-if="currentPart == 'all' " class="headAll">
        <div>ONE  <span>IS</span>  ALL</div>
      </div>
    </Head>
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
        <div class="header" @click="collapse = !collapse">一个VOL.2345<i class="el-icon-arrow-down"></i></div>
        <div class="content" :class="collapse ? 'collapseh1': 'collapseh2' ">
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
          <div >越不肯努力便越自怜</div>
        </div>
      </div>
      <div class="readPart"></div>
    </div>
    <FooterTab @handleClick='handleClick' />
  </div>
</template>

<script>
import Head from '~/components/Head.vue'
import FooterTab from '~/components/FooterTab.vue'

export default {
  transition: {
    name:'splash',
    mode:'out-in'
  },
  components: {
    Head,
    FooterTab
  },
  data() {
    return {
      list: new Array(20),
      currentPart:'one',
      collapse:false
    }
  },
  methods:{
	  handleClick(param){
		  console.log('111111--->',param);
      this.currentPart = param;
	  }
  }
}
</script>

<style lang="less">
.container {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.contentSection{
  position: relative;
  top: 60px;
  height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 80px;
}
.headOne{
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 1rem;
}
.headOne .left .day{
  font-family: fantasy;
  font-size: 2.5rem;
}
.headOne .right{
  padding-bottom: 0.3rem;
}
.headAll{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
}
.headAll span{
  margin: 0 0.625rem;
}
.dayPosts{
  background-color: #63707e;
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
  height: 3rem;
  background-color: #63707e;
  margin: 0.5rem 0;
  .header{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .collapseh1{
    height: 0;
    display: none;
  }
  .collapseh2{
  }
}
.readPart{

}
</style>
