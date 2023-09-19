<template>
  <div>
    <a href="#/home">首页</a>
    <a href="#/music">电影</a>
    <a href="#/about">关于</a>
    <component :is="comName"></component>
  </div>
</template>

<script>
import MyAbout from '@/components/MyAbout.vue'
import MyHome from '@/components/MyHome.vue'
import MyMovie from '@/components/MyMovie.vue'

export default {
  components: {
    MyAbout,
    MyHome,
    MyMovie
  },
  created () {
    window.onhashchange = () => {
      let hash = location.hash
      if (hash == '#/home') {
        this.comName = 'MyHome'
      } else if (hash == '#/about') {
        this.comName = 'MyAbout'
      } else {
        this.comName = 'MyMovie'
      }
    }
  },
  data() {
    return {
      comName: 'MyHome'
    }
  }
}
</script>

<style>

</style>