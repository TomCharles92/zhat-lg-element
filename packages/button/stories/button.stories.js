import LgButton from '../' // 导入的是 index.js

export default {
  title: 'LgButton',
  component: LgButton
}


export const Button = () => ({
  components: { LgButton },
  template: '<lg-button @click="handleClick">按钮</lg-button>',
  methods: {
    handleClick() {
      console.log(223);
    }
  }
})