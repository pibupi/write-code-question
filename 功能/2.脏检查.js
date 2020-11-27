//脏值检查 你要先保留 一个原有的值，
//上一个例子中是不停的监控新放的值，$watch ,$apply
//angular.js更新的方式是手动更新
//angular有一个scope的概念
function Scope() {
  this.$$watcher = []
}
Scope.prototype.$digest = function () {
  //负责检查的
  //至少执行一次
  var dirty = true //默认我认为只要调用了$dirty方法就应该去查一次
  do {
    this.$digestOne()
  } while (dirty)
}
Scope.prototype.$digestOne = function () {
  //检查依次
  let dirty = false
  this.$$watchers.forEach((watcher) => {
    let oldVal = watcher.last //老值
    let newVal = this[watcher.exp]
    if (newVal !== oldVal) {
      //更新
      watcher.fn(newVal, oldVal) //调用了fn可能就会更改数据，更改数据就应该再查一边
      dirty = true
      watcher.last = newVal //更新老值,让老值的值变成最新更改的值，方便下次更新
    }
  })
  return dirty
}
Scope.prototype.$watch = function (exp, fn) {
  //$watch中应该保留的内容有函数，还有当前的老值,还有一个表达式
  this.$$watchers.push({
    fn,
    last: this[exp],
    exp,
  })
}
Scope.prototype.$apply = function () {
  this.digest()
}
let scope = new Scope()
scope.name = '哈哈'
scope.age = 9
scope.$watch('name', function (newVal, oldVal) {
  console.log(newValue, oldVal)
})
scope.$watch('age', function (newVal, oldVal) {
  scope.name = '123'
})
scope.age = 10
scope.name = '呵呵'
scope.$apply()
