const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path:'/user/:id',
    component:User
  }
]
// 看官网redirect 可以是动态的，alias别名可以再做下理解，没准能解决项目中路由的问题