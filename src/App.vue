<template>
  <div>
    <KHeader :pisa="ccounter"/>
    <KButton @clickkk="increment" />
    <KFooter @clickkk="increment" @dclick="decrement"/>
  </div>
</template>

<script>
import KButton from './components/KButton';
import KHeader from './components/KHeader';
import KFooter from './components/KFooter'

export default {
  name: "app",
  data () {
    return {
      ccounter: 0
    };
  },
  components: {
    KHeader,
    KButton,
    KFooter
  },
  methods: {
    increment: function () {
      this.ccounter++;
    },
    decrement: function () {
      this.ccounter--;
    }
  }

};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
