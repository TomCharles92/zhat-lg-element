import Form from './src/form.vue'

// 方便使用 Vue.use() 来注册全局组件
Form.install = Vue => {
  Vue.component(Form.name, Form)
}

export default Form
