<template>
  <div>
    <button @click="add">Add</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$emit('add', 1)
    }
  }
}
</script>
