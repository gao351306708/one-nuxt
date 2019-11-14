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
      <nuxt-child></nuxt-child>
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
      collapse:false,
      volList:[1,2,3,4,5,6,7,8,9],//VOL列表
    }
  },
  mounted() {
    this.$axios.get('http://wthrcdn.etouch.cn/weather_mini',{
      params:{city:'北京'},
      }).then((res)=>{
      console.log('111111111-->',res)
    })
  }
  ,
  methods:{
	  handleClick(param){
		  console.log('111111--->',param);
      this.currentPart = param;
      switch (param){
        case 'all':
          this.$router.push({
            path: '/home/all',
           });
          break;
        case 'me':
          this.$router.push({
            path: '/home/me',
           });
            break;
        default:
          this.$router.push({
            path: '/home',
           });
          break;
      }
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
  font-size: 3rem;
}
.headOne .right{
  padding-bottom: 0.6rem;
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
</style>
