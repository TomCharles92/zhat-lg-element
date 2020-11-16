<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'LgForm',
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  provide () {
    return {
      form: this
    }
  },
  methods: {
    validate (cb) {
      // 假设 Form 组件的子组件是 FormItem
      const tasks = this.$children
        .filter(child => child.prop) // FormItem 具有 prop 属性才验证
        .map(child => child.validate()) // 调用各自的验证方法

      // 执行完所有 Promise 之后，全部成功返回 true
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false))
    }
  }
}
</script>

<style>

</style>