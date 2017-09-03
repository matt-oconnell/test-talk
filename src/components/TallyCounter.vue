<template>
  <div>
    <h1>Tally Counter</h1>
    <CounterDisplayPlain
      ref="counterDisplay"
      :count="count"
    ></CounterDisplayPlain>
    <CounterControlsButton
      ref="counterControls"
      @add="add"
    ></CounterControlsButton>
  </div>
</template>

<script>
import CounterDisplayPlain from './CounterDisplayPlain';
import CounterControlsButton from './CounterControlsButton';

export default {
  components: {
    CounterDisplayPlain,
    CounterControlsButton
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add(number) {
      this.count += number
    }
  }
}
</script>
