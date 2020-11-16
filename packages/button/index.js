import Button from './src/button.vue'

// 方便使用 Vue.use() 来注册全局组件
Button.install = Vue => {
  Vue.component(Button.name, Button)
}

export default Button