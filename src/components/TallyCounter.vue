<template>
  <div>
    <p>Tally Counter</p>
    <CounterDisplayRainbow
      ref="counterDisplay"
      :count="count"
    ></CounterDisplayRainbow>
    <CounterControlsButton
      ref="counterControls"
      @add="add"
    ></CounterControlsButton>
  </div>
</template>

<script>
import CounterDisplayRainbow from './CounterDisplayRainbow';
import CounterControlsButton from './CounterControlsButton';

export default {
  components: {
    CounterDisplayRainbow,
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
