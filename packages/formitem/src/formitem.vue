<template>
  <div>
    <label>{{label}}</label>
    <div>
      <slot></slot>
      <p v-if="errMessage">{{errMessage}}</p>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'

export default {
  name: 'LgFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      errMessage: ''
    }
  },
  mounted () {
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    // 当前 LgFromItem 中输入值 value 是否匹配验证规则 rules
    validate () {
      if (!this.prop) return
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]

      const descriptor = {  [this.prop]: rules }
      const validator = new AsyncValidator(descriptor)
      // 返回一个 Promise
      return validator.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errMessage = errors[0].message
        } else {
          this.errMessage = ''
        }
      })
    }
  }
}
</script>

<style>

</style>