//Array.from
Array.from(document.querySelectorAll('div'))
//Array.prototype.slice.call()
Array.prototype.slice.call(document.querySelectorAll('div'))
// 扩展运算符
[...document.querySelectorAll('div')]
//利用concat
Array.prototype.concat.apply([], document.querySelectorAll('div'));
