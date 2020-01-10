<template>
   <div class="hedd">
     <h3>Number of Clicks</h3>
     <span>{{ pisa }}</span>
   </div>
</template>

<script>
export default {
  name: "kheader",
  props: {
    pisa: Number
  }
}
</script>

<style>
.hedd {
  width: 100%;
  height: 100px;
  background-color: cadetblue;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hedd h3 {
  font-size: 46px;
}

span {
  font-weight: 700;
  font-size: 46px;
  padding-left: 200px
}
</style>