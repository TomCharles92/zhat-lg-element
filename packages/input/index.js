import Input from './src/input.vue'

// 方便使用 Vue.use() 来注册全局组件
Input.install = Vue => {
  Vue.component(Input.name, Input)
}

export default Input
