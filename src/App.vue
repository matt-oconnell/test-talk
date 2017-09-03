<template>
  <div id="app">
    <TallyCounter></TallyCounter>
  </div>
</template>

<script>
import TallyCounter from './components/TallyCounter'

export default {
  name: 'app',
  components: {
    TallyCounter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
