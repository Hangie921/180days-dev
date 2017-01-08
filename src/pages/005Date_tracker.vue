<template lang="jade">
  .container
    .back
    ul#week
      li.weekdays#sun
        | Sun
      li.weekdays#mon
        | Mon
      li.weekdays#tue
        | Tue
      li.weekdays#wed
        | Wed
      li.weekdays#thr
        | Thr
      li.weekdays#fri
        | Fri
      li.weekdays#sat
        | Sat
    .weekMessage
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
    }
  },
  mounted () {
    let date = new Date()
    let day = date.getDay()
    let weekday = [
      `Oh!My! It's Sunday!!`,
      `Oh no!!! Today is a blue Monday`,
      `Tuesday!! Keep going!`,
      `Wednesday is the midday of the weekdays.`,
      `Tuesday,two days more to the weekend!!`,
      `Let's party!! It's Friday!!`,
      `Where are ya goin' on Saturday night?`
    ]
    let speech = weekday[day]
    switch (day) {
      case 0:
        day = '#sun'
        break
      case 1:
        day = '#mon'
        break
      case 2:
        day = '#tue'
        break
      case 3:
        day = '#wed'
        break
      case 4:
        day = '#thr'
        break
      case 5:
        day = '#fri'
        break
      case 6:
        day = '#sat'
        break
    }
    $(day).css({
      'background-color': '#33aa00'
    })
    .css({
      'color': '#fff',
      'font-size': '40px',
      'height': '300px',
      'text-shadow': '-2px -2px 1px #555'
    })
    $('.weekMessage').text(speech)
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';

* {
  margin: 0;
  padding: 0;
}

.container {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.weekdays {
  display: inline-block;
  box-sizing: border-box;
  width: 13.2757143%;
  /*background-color:#F1C40F;*/
  
  color: #000;
  height: 100px;
  text-align: center;
  padding-top: 40px;
  font-size: 20px;
  position: relative;
}

.back {
  position: absolute;
  width: 100%;
  height: 120px;
  margin: auto;
  background-color: #8AE62E;
}

.weekMessage {
  width: 100%;
  height: 150px;
  background-color: #33aa00;
  box-sizing: border-box;
  position: absolute;
  top: 300px;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  padding: 50px;
  text-shadow: -2px -2px 1px #555;
}

</style>
