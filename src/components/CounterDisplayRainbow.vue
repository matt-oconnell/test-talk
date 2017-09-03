<template>
  <marquee>
    <span v-for="i in 40" :key="i">
      {{count}}
    </span>
  </marquee>
</template>

<script>
export default {
  props: ['count']
}
</script>

<style>
marquee {
  font-size: 100px;
  animation: rainbow 1s infinite;
}
@keyframes rainbow {
  0% {color: #ff0000;}
  10% {color: #ff8000;}
  20% {color: #ffff00;}
  30% {color: #80ff00;}
  40% {color: #00ff00;}
  50% {color: #00ff80;}
  60% {color: #00ffff;}
  70% {color: #0080ff;}
  80% {color: #0000ff;}
  90% {color: #8000ff;}
  100% {color: #ff0080;}
}
</style>
