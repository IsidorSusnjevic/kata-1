<template>
  <div>
    <button v-on:click="multipleActions">+</button>
    <button v-on:click="$store.dispatch('changeCounter', { sign: '-' })">-</button>
  </div>
</template>

<script>
export default {
  name: "kfooter",
  methods: {
    multipleActions () {
      this.$store.dispatch('increment');
      this.$store.dispatch('changeCounter', { sign: '+' });
    }
  }
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