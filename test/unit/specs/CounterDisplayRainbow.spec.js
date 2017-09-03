import Vue from 'vue'
import { mount } from 'avoriaz'
import CounterDisplayRainbow from '@/components/CounterDisplayRainbow'

describe('CounterDisplayRainbow.vue', () => {
  it('should display 40 versions of passed-in count in a sick marquee', () => {
    const { vm } = mount(CounterDisplayRainbow, {
      propsData: {
        count: 100
      }
    })

    expect(vm.$refs.counterMarquee.tagName).to.equal('MARQUEE')
    expect(vm.$refs.counterMarquee.querySelectorAll('span').length).to.equal(40)
    expect(vm.$refs.counterMarquee.querySelectorAll('span')[0].innerText).to.match(/100/)
  })
})
