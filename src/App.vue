<template lang="jade">
  #app
    app-header
    router-view
</template>

<script>
import Header from 'src/components/Header'
export default {
  components: {
    'appHeader': Header
  }
}
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "~font-awesome/css/font-awesome.min.css";
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';
@import "./main.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
</style>
