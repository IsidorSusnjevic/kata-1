<template>
  <div>
    <button v-on:click="$emit('increment')">+</button>
    <button v-on:click="$emit('decrement')">-</button>
  </div>
</template>

<script>
export default {
  name: "kfooter"
};
</script>

<style scoped>
button {
  margin-top: 300px;
  font-size: 40px;
  background-color: aquamarine;
  width: 100px;
  height: 50px;
  padding: 40px;
}
</style>