function createElement(type, config, children) {
  Reflect.deleteProperty(config, "_source")
  Reflect.deleteProperty(config, "_self")
  Reflect.deleteProperty(config, "ref")
  Reflect.deleteProperty(config, "key")
  let props = { ...config }
  if (arguments.length > 3) {
    props.children = Array.prototype.slice.call(arguments, 2)
  } else {
    props.children = children
  }
  return { type, props }
}
const React = {
  createElement,
}
export default React
