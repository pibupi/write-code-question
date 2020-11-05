const router = new VueRouer({
  mode:'history',
  routes,
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){ // 代表浏览器记录的滚动坐标值
      console.log(savedPosition)
      return savedPosition 
    }else{
      const position = {}
      position.selector = to.hash
      if(to.hash === '#nav'){
        position.offset = {y:200}
      }
      return position
    }
  }
})