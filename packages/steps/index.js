import LgSteps from './src/steps.vue'

// 方便使用 Vue.use() 来注册全局组件
LgSteps.install = Vue => {
  Vue.component(LgSteps.name, LgSteps)
}

export default LgSteps
