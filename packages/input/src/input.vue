<template>
  <div>
    <input
      v-bind="$attrs"
      :type="type"
      :value="value"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: "LgInput",
  inheirtAttrs: false,
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)

      // 查找父元素中的 LgFormItem 组件
      const findParent = parent => {
        while (parent) {
          if (parent.$options.name === 'LgFormItem') break
          else parent = parent.$parent // 继续往父级寻找
        }
        return parent
      }
      const parent = findParent(this.$parent)
      if (parent) {
        parent.$emit('validate')
      }
    }
  }
};
</script>

<style>
</style>