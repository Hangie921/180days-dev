<template lang="jade">
.container
  #text
    h2
      | Catch the Bouncing Ball
    p
      | Click the ball to advance the next level

  #wrap
    #ball(
      v-on:click="clickBall"
      el="#ball")
    #message
      | test
    #level
      | Next Level:
      p#next
    #finalMessage
      | Congrats!!! You've finished an incredible mission!!
      br
      a(v-on:click="reload")
        | Replay!
  .clearfix
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      messages: [
        'Nice job!',
        'Excellent clicking!',
        'That was Awesome!',
        'Man you are good!',
        'Boom!',
        'You are a pro!',
        'Unbelievable!',
        'Insanity!',
        'You are on fire!',
        'That was crazy!',
        'You are blowing my mind!'
      ],
      level: 0
    }
  },
  mounted () {
  },
  methods: {
    reload () {
      window.location.reload()
    },
    speedUp (el) {
      let speed = $(el).css('animation-duration')
      let num = (speed.split('s')[0]) - 0.5
      $(el).css('animation', 'move ' + num + 's 0s infinite linear')
    },
    clickBall () {
      if (this.level < 10) {
        this.speedUp(this.$el.querySelector('#ball'))
        this.flashMessage()
      } else {
        $('#ball').hide()
        $('#message').hide()
        $('#level').hide()
        $('#finalMessage').show()
      }
    },
    flashMessage () {
      let message = this.messages[this.level]
      $('#message').text(message)
      this.level++
      $('#next').text(this.level + 1)
      $('#message').show()
      $('#level').show()
      $('#ball').hide()

      setTimeout(function () {
        $('#message').hide()
        $('#level').hide()
        $('#ball').show()
      }, 3000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';


#text{
      /*background-color:#f00;*/
      width: 40%;
      height: 200px;
      float: left;
      margin-left:200px;
      margin-top: 200px;
    }
    #text h2{
      font-size: 40px;
      padding: 10px;
      font-family:'tahoma';
    }
    #text p,.message{
      font-size: 28px;
      padding: 10px;
      font-family:'tahoma';
    }
    #wrap{
      /*background-color:#0ff;*/
      width: 30%;
      height: 600px;
      float: left;
      position: relative;
    }
    #ball{
      width: 100px;
      height:100px;
      border-radius: 50%;
      background-image:-webkit-radial-gradient(20% 20%,circle,rgba(0,128,255,.5) 15%,rgba(20,41,102,1) 90%);
      margin-left: auto;
      margin-right: auto;
      position: relative;
      top: 0px;
      animation: move 5.5s 0s infinite linear;
      text-align:center;
      line-height:24px;
      font-size: 24px;
      padding-top:38px;
      box-sizing: border-box;
      /*display:none;*/
    }
    @keyframes move{
        /*0%{top: 0px;height:100px;}*/
        0%{top: 0px;height:100px;font-size: 24px;padding-top:38px;}
       45%{top: 500px;height:100px;font-size: 24px;padding-top:38px;}
       50%{top: 550px;height:50px;font-size: 12px;padding-top:19px;}
       55%{top: 500px;height:100px;font-size: 24px;padding-top:38px;}
       100%{top: 0px;height:100px;font-size: 24px;padding-top:38px;}
      
    }
    #message,#finalMessage,#level{
      /*display:none;*/
      text-align:center;
      margin-left: auto;
      margin-right: auto;
      padding: 10px;
      font-size:20px;
      margin-top: 50px;
      display:none;
    }
    #message{
      margin-top: 200px;
      font-size: 50px;
    }
    #level{
      margin-top: 30px;
    }

</style>
