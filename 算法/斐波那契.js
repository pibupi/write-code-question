//递归问题：爬楼梯
function febonaci(n) {
  if (n == 1 || n == 2) {
    return 1
  }
  return febonaci(n - 1) + febonaci(n - 2)
}
