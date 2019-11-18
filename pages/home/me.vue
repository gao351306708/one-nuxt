<template>
  <div class="meSection">
    <Head :fade='!headFlag'>
      <div class="headMe">
        <img src="~/assets/img/setting.png" />
        <transition name="fade">
          <span v-if="headFlag">17600666107</span>
        </transition>
        <img src="~/assets/img/email.png" />
      </div>
    </Head>
    <div class="me"  @scroll="scrollEvent">
      <div class="detail">
        <img src="../../assets/img/me_bg.png" />
      </div>
      <div class="collection" @click="headFlag = !headFlag">
        <div class="title">我的收藏</div>
        <div class="list">
          <div><img src="../../assets/img/imageText.png"/>图文</div>
          <div><img src="../../assets/img/article.png"/>文章</div>
          <div><img src="../../assets/img/music.png"/>音乐</div>
          <div><img src="../../assets/img/video.png"/>影视</div>
          <div><img src="../../assets/img/radio.png"/>电台</div>
        </div>
      </div>
      <div class="follow">
        <div class="left"><img src="../../assets/img/follows.png"/><span>我的关注</span></div>
        <div class="right">0<i class="el-icon-arrow-right"></i></div>
      </div>
      <div class="follow">
        <div class="left"><img src="../../assets/img/play.png"/><span>歌单</span></div>
        <div class="right"><i class="el-icon-arrow-right"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Head from '~/components/Head.vue'
  export default {
    components: {
      Head,
    },
    data() {
      return {
        volList:[1,2,3,4,5,6,7,8,9],//VOL列表
        headFlag:false,
      }
    },
    mounted() {
    },
    methods:{
      scrollEvent(e){
        if(e.target.scrollTop>10){
          this.headFlag = true;
        }
        if(e.target.scrollTop==0){
          this.headFlag = false;
        }
      }
    }
  }
</script>

<style lang="less">
 .meSection .headMe{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 0.625rem;
  img{
    width: 2rem;
  }
}
 .meSection .headstyle{
    background-color: transparent;
    border: none;
  }
.me{
  position: relative;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 80px;
  .detail{
    margin-bottom: 0.625rem;
    img{
      height: calc(100vh * 1/2);
      width: 100%;
    }
  }
  .collection{
    background-color: @backgroundColor;
    margin-bottom: 0.625rem;
    padding: 10px 1rem;
    .title{
      padding: 0.625rem 0;
      font-size: 1.125rem;
    }
    .list{
      display: flex;
      justify-content: space-between;
      padding: 0.625rem 0;
      div{
        width: 2rem;
        text-align: center;
      }
      img{
        width: 2rem;
        margin-bottom: 0.5rem;
      }
    }
  }
  .follow{
    display: flex;
    height: 3.5rem;
    padding: 10px 1rem;
    margin-bottom: 0.625rem;
    background-color: @backgroundColor;
    justify-content: space-between;
    align-items: center;
    .left{
      img{
        width: 1.6rem;
        margin-right: 0.625rem;
      }
      span{
        position: relative;
        bottom: 0.4rem;
      }
    }
  }
}
</style>
