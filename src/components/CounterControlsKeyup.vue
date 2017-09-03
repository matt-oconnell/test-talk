<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$emit('add', 1)
    }
  },
  mounted() {
    window.addEventListener('keyup', () => {
      if (event.keyCode == 38) { 
        this.add();
      }
    })
  }
}
</script>
