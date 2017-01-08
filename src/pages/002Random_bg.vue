<template lang="jade">
  .container-fluid
    .row
      .body(v-bind:style="{backgroundColor:random}")
        .click
          button(v-on:click="chgColor()")
            | Click me!!
</template>

<script>
import { getRand } from '../utils.js'
export default {
  data () {
    return {
      random: ''
    }
  },
  mounted () {
    this.chgColor()
  },
  methods: {
    chgColor () {
      this.random = 'rgb('.concat(getRand(0, 255), ',', getRand(0, 255), ',', getRand(0, 255), ')')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .body{
    height: 100vh;
  }
  a{
    text-decoration: none;
    color:#fff;
  }
  .click{
    padding-top: 30px;
  }
  .click button{
    width: 250px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    background-color:#637700;
    color:#fff;
    text-align: center;
    font-size:50px;
    padding: 10px;
    box-shadow: 1px 1px #631188,
          2px 2px #631188,
          3px 3px #631188,
          4px 4px #631188,
          5px 5px #631188;
  }
</style>
