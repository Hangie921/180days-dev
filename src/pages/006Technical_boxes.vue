<template lang="jade">
  .container
    .row.clearfix(v-for="n in 10")
      a.box.clearfix(v-for="c in 10" v-on:mouseenter="hover($event)")
</template>

<script>
import { getRand } from '../utils.js'
import $ from 'jquery'

export default {
  data () {
    return {
      a: '臣亮言：先帝創業未半，而中道崩殂。今天下三分，益州疲弊，此誠危急存亡之秋也。然侍衛之臣，不懈於內；忠志之士，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。宮中府中，俱為一體，陟罰臧否，不宜異同。若有作姦犯科，及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治，不宜篇私，使內外異法也。',
      counter: 0
    }
  },
  computed: {
    ary () {
      let temp = []
      for (let i = 0; i < this.a.length; i++) {
        temp[i] = this.a.substr(i, 1)
      }
      return temp
    }
  },
  mounted () {

  },
  methods: {
    hover (e) {
      let random = 'rgb('.concat(getRand(0, 255), ',', getRand(0, 255), ',', getRand(0, 255), ')')
      $(e.target).css('backgroundColor', random).text(this.ary[this.counter])
      if (this.counter !== 181) {
        this.counter++
      } else {
        this.counter = 0
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';
div{
  box-sizing: border-box;
}
.container{
  width: 100%;
  height: 1000px;
  margin-left: auto;
  margin-right: auto;
  background-color:#000;
}
.box{
  display:block;
  text-decoration: none;
  width: 10%;
  height: 100px;
  z-index:1;
  float:left;
  position: relative;
  color:#111;
  text-shadow: 1px 1px 0px #aaa,
         2px 2px 0px #aaa,
         3px 3px 0px #aaa;
  font-size:30px;
  line-height:30px;
  text-align:center;
  font-family:'courier';
  padding-top:30px;
  &:hover{
    box-shadow: #fff 0px 0px 8px;
    z-index: 10000;
  }
}
</style>
