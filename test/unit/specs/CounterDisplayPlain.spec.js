import Vue from 'vue'
import { mount } from 'avoriaz'
import CounterDisplayPlain from '@/components/CounterDisplayPlain'

describe('CounterDisplayPlain.vue', () => {
  it('should render the passed-in count', () => {
    const wrapper = mount(CounterDisplayPlain, {
      propsData: {
        count: 100
      }
    })
    expect(wrapper.vm.$el.innerText).to.equal('100')
  })
})
