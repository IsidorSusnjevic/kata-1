<template>
  <div>
       <button v-on:click="onClick">Click Me</button>
  </div>
</template>

<script>
export default {
    name: "kbutton",
    methods: { 
      onClick () {
        this.$emit('clickkk');
      }
    }
}
</script>

<style scoped>

button {
  height: 70px;
  width: 170px;
  margin-top: 400px;
  box-shadow: 3px 7px cadetblue;
}

</style>