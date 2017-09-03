import Vue from 'vue'
import { mount } from 'avoriaz'
import TallyCounter from '@/components/TallyCounter'
import CounterDisplayPlain from '@/components/CounterDisplayPlain'

describe('TallyCounter.vue', () => {
  it('should pass count to :count in counterDisplay child component', () => {
    const { vm } = mount(TallyCounter)
    const counterDisplay = vm.$refs.counterDisplay
    // We *trust* that counter display will handle the count prop.
    // Some may say it's outside of the TallyCounter's responsibility to reach into 
    // the counterDisplay to ensure it's rendered within an <h1> or used for something // completely different
    expect(counterDisplay.$props.count).to.equal(0)

    // important! below is not safe
    // expect(counterDisplay.$props.count).to.equal(vm.count)
  })

  it('should add to the count when counterControls emits an add event', () => {
    // Likewise, we don't need to know what caused the event, we just need to ensure
    // that this component is doing its job and responding correctly to it
    const { vm } = mount(TallyCounter)
    const counterControls = vm.$refs.counterControls
    counterControls.$emit('add', 1)
    expect(vm.count).to.equal(1)
  })
})
