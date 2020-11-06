export default {
  inserted(el, binging, vnode) {
    console.log('dom元素插入了')
    console.log(vnode)
    let btnPermissionValue = binging.value
    let boolean = vnode.context.$store.btnPermission[btnPermissionValue]
    !boolean && el.parentNode.removeChild(el)
  },
}
