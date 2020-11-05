<template>
  <div>
    <h1>拦截器</h1>
    <button @click="handleClick">按钮</button>
    <div v-if="loading">loading....</div>
    <p v-else>{{ title }}</p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      title:'',
      loading:false
    }
  },
  create(){
    axios.interceptors.request.use(config=>{
      this.loading = true
      return config
    })
    axios.interceptors.response.use(config=>{
      this.loading = false
      return config
    })
  },
  methods:{
    handleClick(){
      axios.get('').then(res=>{
        this.title = res.data.data
      })
    }
  }
}
</script>