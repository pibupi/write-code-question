<template>
  <div>
    当前用户id为：{{id}}
  </div>
</template>
<script>
export default {
  data(){
    id:this.$route.params.id
  },
  watch:{
    $route(to,from){
      this.id = to.params.id
    }
  },
  beforeRouteUpdate(to,from){
    this.id = to.params.id
  },
  created(){
    console.log('created')
  }
}
</script>