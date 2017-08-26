<template lang="jade">
  .container
    .timeText
      | The current time is
    .curTime
      | {{curTime}}
    .colText
      | The current color is
    .curColor
      | {{colTime}}
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      curTime: '',
      colTime: ''
    }
  },
  mounted () {
    this.showTime()
    setInterval(this.showTime, 1000)
  },
  methods: {
    showTime () {
      let time = new Date()
      let str = this.formateTime(time.getHours()).toString() + ':' + this.formateTime(time.getMinutes()).toString() + ':' + this.formateTime(time.getSeconds()).toString()
      this.curTime = str
      // 取時間轉十六進位 4454
      let r = Math.round(255 * (time.getHours() / 23)).toString(16).toUpperCase()
      let g = Math.round(255 * (time.getMinutes() / 59)).toString(16).toUpperCase()
      let b = Math.round(255 * (time.getSeconds() / 59)).toString(16).toUpperCase()
      let ctime = this.formateColor(r) + this.formateColor(g) + this.formateColor(b)

      let color = '#' + ctime
      ctime = this.formateColor(r) + ' ' + this.formateColor(g) + ' ' + this.formateColor(b)
      this.colTime = ctime
      // 轉成背景色
      $('.container').css('backgroundColor', color)
    },
    formateTime (i) {
      if (i < 10) {
        i = '0' + i
      }
      return i
    },
    formateColor (i) {
      if (i.length < 2) {
        i = '0' + i
      }
      return i
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';
.container{
  width: 100vw;
  height: 100vh;
  font-family:'courier';
  text-align:center;
  font-size:50px;
}

</style>

