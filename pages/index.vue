<template>
  <div class="container">
    <nuxt-link to='/home' class="skip">跳过</nuxt-link>
  </div>
</template>
<script>
export default {
  transition: {
    name:'splash',
    mode:'out-in'
  },
  mounted() {
    setTimeout(()=>{
      // this.$router.replace('/home');
    },2000)
  },
  methods:{
    goto(){
    }
  }
}
</script>
<style scoped>
.container {
  height: 100vh;
  width: 100vh;
  background: url('../assets/img/splash.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.skip{
  position: absolute;
  right: 15px;
  top: 10px;
  text-decoration: none;
  color: white;
}
</style>
