<template>
  <div class="container">
    <Head v-if="currentTab != 'me' ">
      <div v-if="currentTab == 'one' " class="headOne">
        <div class="left"><span class="day">{{dayDate}}</span>{{yearDate}}</div>
        <div class="right">{{week}}</div>
      </div>
      <div v-if="currentTab == 'all' " class="headAll">
        <div>ONE  <span>IS</span>  ALL</div>
      </div>
    </Head>
    <nuxt-child keep-alive></nuxt-child>
    <transition name='fade'>
      <FooterTab v-if="footerFlag" />
    </transition>
  </div>
</template>

<script>
import Head from '~/components/Head.vue'
import FooterTab from '~/components/FooterTab.vue'
const moment = require('moment');
moment.locale('zh-cn');

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
      dayDate:moment().format('D'),
      week:moment().format('dddd'),
      yearDate:moment().format('M') +'.'+ moment().format('YYYY'),
    }
  },
  computed:{
    currentTab () {
      return this.$store.state.currentTab || 'one'
    },
    footerFlag () {
      return this.$store.state.footerFlag
    },
  },
  mounted() {
    console.log('1111111--->>>',this.$store.state.currentTab)
  },
  methods:{
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
