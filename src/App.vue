<template>
  <div>
    <KHeader />
    <KFooter />
  </div>
</template>

<script>
import KButton from './components/KButton';
import KHeader from './components/KHeader';
import KFooter from './components/KFooter'

export default {
  name: "app",
  components: {
    KHeader,
    KButton,
    KFooter
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
