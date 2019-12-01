<template>
  <div class="articleList">
    <Head>
      <div class="headsection">
        <i class="el-icon-arrow-left" style="font-size: 1.75rem;" @click="back()"></i>
        <div class="titleType">阅读</div>
        <div></div>
      </div>
    </Head>
    <div class="sectionContent">
      <ul>
        <li v-for="todo in todos">
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </li>
        <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Head from '~/components/Head.vue'
  import { mapMutations } from 'vuex'
  export default {
    components: {
      Head,
    },
    //asyncData方法会在组件（限于页面组件）每次加载之前被调用。asyncData 返回的数据融合组件 data 方法返回的数据一并返回给当前组件
    asyncData () {
      let _this = this;
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve({
            list: new Array(20),
          });
        }, 2000)
      })
    },
    computed:{
      todos () {
        return this.$store.state.home.list
      }
    },
    mounted() {
      this.$nuxt.$loading.finish();
    },
    methods:{
      //映射到vuex对应模块得mutations
      ...mapMutations({
        toggle: 'home/toggle'
      }),
      addTodo (e) {
        this.$store.commit('home/add', e.target.value)
        e.target.value = ''
      },
      back(){
        this.$router.back();
      }
    }
  }
</script>

<style lang="less" scoped>
  .articleList{
    width: 100%;
    .headsection{
      display: flex;
      height:100%;
      justify-content: space-between;
      align-items: center;
    }
    .sectionContent{
      position: relative;
      top: 60px;
    }
  }
</style>
