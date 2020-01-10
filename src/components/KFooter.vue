<template>
  <div>
    <button v-on:click="onClick">+</button>
    <button v-on:click="onDclick">-</button>
  </div>
</template>

<script>
export default {
  name: "kfooter",
  methods: {
    onClick() {
      this.$emit("clickkk");
    },
    onDclick() {
      this.$emit("dclick");
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