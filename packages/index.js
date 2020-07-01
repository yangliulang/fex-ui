import FexTest from './fex-test'
const components = [FexTest]

const install = (Vue) => {
  if (install.installed) return
  components.map((component) => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 默认导出可以用于全局use安装
export default install
// 把每一个组件导出 可以用于局部组件注册
export { FexTest }
