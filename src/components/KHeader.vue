<template>
   <div class="hedd">
     <h3>Number of Clicks</h3>
     <span>{{ $store.getters.counter() }}</span>
   </div>
</template>

<script>
export default {
  name: "kheader"
}
</script>yt


<style>
.hedd {
  width: 100%;
  height: 100px;
  background-color: cadetblue;
  display: flex;
  align-items: center;
  justify-content: center;
}

h3 {
  font-size: 50px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

span {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  font-size: 46px;
  padding-left: 200px
}
</style>