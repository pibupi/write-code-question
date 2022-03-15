// 浏览器本身的特点
// jsonp的原理
// 动态创建script标签，<script src="http://api.qq.com/list?callback=func">
// get请求
// function func(data){}

// 后台
// let express = require("express")
// app = express()
// app.listen(8001)
// app.get("/list", (req, res) => {
//   let { callback = Function.prototype } = req.query
//   let data = {
//     code: 0,
//     message: "消息",
//   }
//   res.send(`${callback}(${JSON.stringify(data)})`)
// })

// 服务器设置session, 服务器返回给客户端的信息，在相应头中带着set-cookie='connect.sid', 客户端
// 会把信息种植到本地的cookie中，并且默认是http-only的，
// 当客户端再次向服务器发送请求的时候，会默认在请求头中的cookies，把connect.sid传递给服务器
// 服务器就拿到了cookie相关信息，做后续处理
