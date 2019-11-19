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
    data() {
      return {
        list: new Array(20),
      }
    },
    computed:{
      todos () {
        return this.$store.state.home.list
      }
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
