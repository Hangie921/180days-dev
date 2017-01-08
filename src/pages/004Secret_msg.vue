<template lang="jade">
  .container
    #scroll
    #secret
      | A y n &nbsp; h &nbsp; a &nbsp; e e &nbsp; a e a m s a e h s
      br 
      |n v r t i d a y h n &nbsp; e .
      br
      br
      br
      br
    #secret2
      p.aa
        | 洛&nbsp;&nbsp;&nbsp;&nbsp;親&nbsp;&nbsp;&nbsp;&nbsp;如&nbsp;&nbsp;&nbsp;&nbsp;問&nbsp;&nbsp;&nbsp;&nbsp;就&nbsp;&nbsp;&nbsp;&nbsp;我&nbsp;&nbsp;&nbsp;&nbsp;寫&nbsp;&nbsp;&nbsp;&nbsp;業
      p.aa
        | 垂&nbsp;&nbsp;&nbsp;&nbsp;病&nbsp;&nbsp;&nbsp;&nbsp;驚&nbsp;&nbsp;&nbsp;&nbsp;起&nbsp;&nbsp;&nbsp;&nbsp;今&nbsp;&nbsp;&nbsp;&nbsp;還&nbsp;&nbsp;&nbsp;&nbsp;寫&nbsp;&nbsp;&nbsp;&nbsp;業
    #message
      | &nbsp;n o e w o h s n v r m d &nbsp; &nbsp; i t k &nbsp; a</br>&nbsp;e e &nbsp; r e &nbsp; n t i g n w
      br
      br
      p.poem
        a(href="http://jenniferdewalt.com/images/albert_einstein.jpg")
          | Albert Einstein
      br
      br
      p.aa
        | &nbsp;&nbsp;&nbsp;&nbsp;陽&nbsp;&nbsp;&nbsp;&nbsp;友&nbsp;&nbsp;&nbsp;&nbsp;相&nbsp;&nbsp;&nbsp;&nbsp;，&nbsp;&nbsp;&nbsp;&nbsp;說&nbsp;&nbsp;&nbsp;&nbsp;在&nbsp;&nbsp;&nbsp;&nbsp;作&nbsp;&nbsp;&nbsp;&nbsp;。
      p.aa
        | &nbsp;&nbsp;&nbsp;&nbsp;死&nbsp;&nbsp;&nbsp;&nbsp;中&nbsp;&nbsp;&nbsp;&nbsp;坐&nbsp;&nbsp;&nbsp;&nbsp;，&nbsp;&nbsp;&nbsp;&nbsp;天&nbsp;&nbsp;&nbsp;&nbsp;沒&nbsp;&nbsp;&nbsp;&nbsp;作&nbsp;&nbsp;&nbsp;&nbsp;。

</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
    }
  },
  mounted () {
    $(window).scroll(() => {
      $('#secret2').css({
        left: '208px'
      })
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';

.container{
      width:100%;
      height: 3000px;
      margin-left: auto;
      margin-right: auto;
      background-color:#0ff0aa;
    }
    #secret{
      position: fixed;
      left: 50px;
      top: 200px;
      font-size:28px;
      font-family: "courier","Century Gothic", CenturyGothic, AppleGothic, sans-serif;
    }
    #message{
      position: absolute;
      left: 50px;
      top: 2000px;
      font-size: 28px;
      font-family: "courier","Century Gothic", CenturyGothic, AppleGothic, sans-serif;
    }
    #scroll{
      position: fixed;
      right: 150px;
      top: 150px;
      width: 0px;
      height: 0px;
      border:50px solid #99FFF2;
      border-left:50px solid transparent;
      border-right:50px solid transparent;
      border-bottom:none;
      animation: changeColor 1s 0s infinite,
             shake 1s 0s infinite;

    }
    @keyframes shake{
        0%{top: 150px;}
       50%{top: 140px;}
      100%{top: 150px;}
    }
    @keyframes changeColor{
        0%{border:50px solid #99FFF2;
        border-left:50px solid transparent;
        border-right:50px solid transparent;
        border-bottom:none;}
       50%{border: 50px solid #00f;
        border-left:50px solid transparent;
        border-right:50px solid transparent;
        border-bottom:none;}
      100%{border: 50px solid #99FFF2;
        border-left:50px solid transparent;
        border-right:50px solid transparent;
        border-bottom:none;}

    }
    @keyframes shake1{
        0%{top: 220px;}
       50%{top: 210px;}
      100%{top: 220px;}
    }
    @keyframes shake2{
        0%{top: 290px;}
       50%{top: 280px;}
      100%{top: 290px;}
    }
    #scroll:before{
      content:'';
      position: fixed;
      right: 150px;
      top: 220px;
      width: 0px;
      height: 0px;
      border:50px solid #99FFF2;
      border-left:50px solid transparent;
      border-right:50px solid transparent;
      border-bottom:none;
      animation: changeColor 1.2s .5s infinite,
             shake1 1s 0s infinite;
    }
    #scroll:after{
      content:'';
      position: fixed;
      right: 150px;
      top: 290px;
      width: 0px;
      height: 0px;
      border:50px solid #99FFF2;
      border-left:50px solid transparent;
      border-right:50px solid transparent;
      border-bottom:none;
      animation: changeColor .8s 1s infinite,
             shake2 1s 0s infinite;
    }
    #message p{
      font-size:20px;
    }
    a{
      text-decoration:none;
      color:#000;
    }
    .aa{
      font-size:20px;
      font-family:'細明體';
    }
    #secret2{
      transition: left 4s;
      position: fixed;
      left: 5050px;
      top: 426px;
      font-size:28px;
      font-family: "courier","Century Gothic", CenturyGothic, AppleGothic, sans-serif;
    }

</style>
