<template lang="jade">
  div
    #text(v-bind:class="{'shake': isShaking}")
      h1 {{msg}}
    #diceContainer
      .dice#dice1
        .dot.dot1#d1d1(v-if="d1 !== 1")
        .dot.dot2#d1d2(v-if="d1 === 6")
        .dot.dot3#d1d3(v-if="d1 >= 4 && d1 !== 1")
        .dot.dot4#d1d4(v-if="d1 > 3")
        .dot.dot5#d1d5(v-if="d1 === 6")
        .dot.dot6#d1d6(v-if="d1 !== 1")
        .dot.dot7#d1d7(v-if="d1 === 1 || d1 === 5 || d1 === 3")
      .dice#dice2
        .dot.dot1#d2d1(v-if="d2 !== 1")
        .dot.dot2#d2d2(v-if="d2 === 6")
        .dot.dot3#d2d3(v-if="d2 >= 4 && d2 !== 1")
        .dot.dot4#d2d4(v-if="d2 > 3")
        .dot.dot5#d2d5(v-if="d2 === 6")
        .dot.dot6#d2d6(v-if="d2 !== 1")
        .dot.dot7#d2d7(v-if="d2 === 1 || d2 === 5 || d2 === 3")
    #button
      a(href="#" v-on:click.prevent="shake")
        | Shake it!
</template>

<script>
export default {
  data () {
    return {
      msg: 'Yo mate~~ Roll your Lucky Number~',
      d1: 1,
      d2: 1,
      isShaking: false
    }
  },
  mounted () {
  },
  methods: {
    shake () {
      this.isShaking = true
      let a = Math.floor(Math.random() * 6 + 1)
      let b = Math.floor(Math.random() * 6 + 1)
      this.msg = 'Yo~~le~~Yo~~le~~Yo~~le~~yo!!'
      let vue = this
      setTimeout(function () {
        vue.d1 = a
        vue.d2 = b
        vue.msg = vue.d1 + vue.d2
        vue.isShaking = false
      }, 1500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';

a{
  text-decoration:none;
  color:#000;
}
#text{
  width: 60%;
  height: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  font-size:40px;
  font-family:'curier';
  text-align:center;
  transition: all 1.5s;
} 
#diceContainer{
  width: 610px;
  height: 300px;
  background-color:#ccc;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
}
.dice{
  background-color:#00f;
  width: 200px;
  height: 200px;
  margin: 50px;
  display:inline-block;
  position: relative;
}
.dot{
  width: 20px;
  height: 20px;
  background-color:#fff;
  border-radius:50%;
  background:radial-gradient( #fff 20%, #ccc 50% , #000 85%);
  position: absolute;
}
.dot1{
  top: 30px;
  left: 40px;
}
.dot2{
  top: 85px;
  left: 40px;
}
.dot3{
  top: 140px;
  left: 40px;
}
.dot4{
  left: 135px;
  top:30px; 
}
.dot5{
  left: 135px;
  top:85px;
}
.dot6{
  left: 135px;
  top:140px;
}
.dot7{
  left:87px;
  top:85px;
}
#button{
  width: 200px;
  height: 40px;
  background-color:#ff3300;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  text-align:center;
  border-radius:10% 10% 10% 10%/50% 50% 50% 50%;
  line-height:40px;
  font-size: 30px;
  font-family: 'curier';
}
.shake{
  animation: shake .4s 0s infinite linear;
}
@keyframes shake{
  0%{margin-left:256px;}
  25%{margin-left: 250px;}
  50%{margin-left: 262px;}
  75%{margin-left: 250px;}
  100%{margin-left:256px;}
}

</style>
