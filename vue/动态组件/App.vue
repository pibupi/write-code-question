<template>
  <div id="app">
    <h1>动态组件</h1>
    <div v-for="item in newsCompType" :key="item.id">
      <component :is="item.type"></component>
    </div>
  </div>
</template>
<script>
import newsData from './news'
import newsImage from './components/newsImage'
import newsText from './components/newsText'
import newsVideo from './components/newsVideo'
export default {
  data() {
    return {
      newsData,
      // newsImageName:'newsImage'
    }
  },
  computed: {
    newsCompType() {
      return this.newsData.map((item) => {
        return {
          ...item,
          type: 'news-' + item.type,
        }
      })
    },
  },
}
</script>
