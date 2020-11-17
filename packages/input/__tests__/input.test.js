import input from '../src/input.vue'
import { mount } from '@vue/test-utils'
// 不需要导入 Jest，因为使用 Jest 来运行的

describe('lg-input', () => {
  test('input-text', () => {
    const wrapper = mount(input)
    expect(wrapper.html()).toContain('input type="text"')
  })

  test('input-password', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password'
      }
    })
    expect(wrapper.html()).toContain('input type="password"')
  })

  test('input-password', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password',
        value: 'admin'
      }
    })
    expect(wrapper.props('value')).toBe('admin')
  })

  // yarn test 第一次会生成快照文件
  // 再次运行会对比前面的快照文件，不同就报错
  // yran test -u 会覆盖前面的快照文件
  test('input-snapshot', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password',
        value: 'admin'
      }
    })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})