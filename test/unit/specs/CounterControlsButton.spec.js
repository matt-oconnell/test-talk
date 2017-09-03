import Vue from 'vue'
import { mount } from 'avoriaz'
import CounterControlsButton from '@/components/CounterControlsButton'

describe('CounterControlsButton.vue', () => {
  it('should render a button', () => {
    const Constructor = Vue.extend(CounterControlsButton)
    const vm = new Constructor().$mount()
    const button = vm.$el.querySelector('button');
    expect(button.textContent).to.equal('Add')
  })

  it('should emit an "add" event when the button is clicked', function(done) {
    const wrapper = mount(CounterControlsButton)
    const button = wrapper.find('button')[0]

    wrapper.vm.$on('add', (num) => {
      expect(num).to.equal(1)
      done()
    })

    button.trigger('click')
  })
})
