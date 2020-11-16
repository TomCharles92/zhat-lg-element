import FormItem from './src/formitem.vue'

// 方便使用 Vue.use() 来注册全局组件
FormItem.install = Vue => {
  Vue.component(FormItem.name, FormItem)
}

export default FormItem
