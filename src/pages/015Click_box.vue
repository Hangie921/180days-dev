<template lang="jade">
  .container
    .box(v-for="b in boxes()" v-bind:id="b" v-on:click="click($event.target)")
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      boxes: function () {
        let ary = []
        for (let i = 1; i < 16; i++) {
          ary.push('b' + i)
        }
        return ary
      },
      anis: ['turnAndDrop', 'turn', 'crawl', 'long', 'backAndDrop']
    }
  },
  mounted () {
  },
  methods: {
    click (target) {
      console.log(target)
      let ani = this.anis[Math.floor(Math.random() * 5)]
      $(target).addClass(ani)
      setTimeout(() => {
        $(target).removeClass(ani)
      }, 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';

.container{
  padding:0;
  width: 1500px;
  height: 100%;
  perspective: 500px;
}
.box{
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  float: left;
  margin-left:0;
  margin-right: 0;
  /*display:block;*/
  position: relative;
  z-index:1;
}
.box:hover{
  z-index:100;
  box-shadow:1px 1px 8px #ccc,
         -1px -1px 3px #ccc;
}
#b1{
  background-color:#5C45E6;
}
#b2{
  background-color:#731F1F;
}
#b3{
  background-color:#FF4700;
}
#b4{
  background-color:#45991F;
}
#b5{
  background-color:#24AB82;
}
#b6{
  background-color:#4073FF;
}
#b7{
  background-color:#1A4DFF;
}
#b8{
  background-color:#CCB3FF;
}
#b9{
  background-color:#4DFF59;
}
#b10{
  background-color:#F2F0DB;
}
#b11{
  background-color:#f00;
}
#b12{
  background-color:#F2F0DB;
}
#b13{
  background-color:#00f;
}
.long{
  animation: long 2s 0s 1 linear;
}
@keyframes long{
    0%{margin-top: 0;height: 100px;}
   30%{margin-top: 0;height: 800px;}
   60%{margin-top: 800px;height: 800px;}
   65%{margin-top: 800px;height: 100px;}
   70%{margin-top: -80px;}
   75%{margin-top: 80px;}
   80%{margin-top: -30px;}
   85%{margin-top: 30px;}
   90%{margin-top: -10px;}
   95%{margin-top: 10px;}
  100%{margin-top: 0px;}
}
.crawl{
  animation: crawl 2s 0s 1 linear;
}
@keyframes crawl{
    0%{margin-top: 0px;height: 100px;}
   28%{margin-top: 280px;height: 100px;}   
   29%{margin-top: 320px;height: 100px;} 
   30%{margin-top: 300px;height: 100px;} 
   35%{margin-top: 300px;height: 100px;} 
     40%{margin-top: 300px;height: 50px;}
   45%{margin-top: 250px;height: 100px;}
   50%{margin-top: 250px;height: 50px;}
   55%{margin-top: 200px;height: 100px;}
   60%{margin-top: 200px;height: 50px;}
   65%{margin-top: 150px;height: 100px;}
   70%{margin-top: 150px;height: 50px;}
   75%{margin-top: 100px;height: 100px;}
   80%{margin-top: 100px;height: 50px;}
   85%{margin-top: 50px;height: 100px;}
   90%{margin-top: 50px;height: 50px;}
   95%{margin-top: 0px;height: 100px;}
  100%{margin-top: 0px;height: 100px;}
}
.turn{
  animation: turn 2s 0s 1 linear;
}
@keyframes turn{
    0%{margin-top: 0;height: 100px;}
    5%{transform: scale(1.5, 1.5);z-index:1000;}
   40%{transform: scale(1, 1);margin-top: 900px;} 
   60%{transform: scale(1, 1);margin-top: 900px;} 
   65%{transform:rotateY(0deg);margin-top: 900px;}  
   70%{transform:rotateY(600deg);margin-top: 600px;}  
   75%{transform:rotateY(480deg);margin-top: 370px;}  
   80%{transform:rotateY(360deg);margin-top: 230px;}
   85%{transform:rotateY(240deg);margin-top: 150px;}
   90%{transform:rotateY(120deg);margin-top: 80px;}
  100%{margin-top:0px;height: 100px;}
}
.backAndDrop{
   animation: backAndDrop 2s 0s 1 linear;
}
@keyframes backAndDrop{
    0%{margin-top: 0;height: 100px;}
    5%{transform: scale(.5, .5);}
   40%{transform: scale(.5, .5);margin-top: 900px;height: 100px;} 
   60%{transform: scale(1, 1);margin-top: 900px; height: 100px;background-color:#fff;}  
   89%{margin-top: -99px;height: 100px;background-color:#fff;}
   90%{margin-top: -99px;height: 100px;}
  100%{margin-top:0px;height: 100px;}
}
.turnAndDrop{
  animation: turnAndDrop 2s 0s 1 linear;
}
@keyframes turnAndDrop{
   0%{transform-origin:left top;transform:rotateZ(0deg);margin-top: 0px;z-index:1000;}
   10%{transform-origin:left top;transform:rotateZ(75deg);margin-top: 0px;z-index:1000;}
   20%{transform-origin:left top;transform:rotateZ(25deg);margin-top: 0px;z-index:1000;}
   30%{transform-origin:left top;transform:rotateZ(75deg);margin-top: 0px;z-index:1000;}
   40%{transform-origin:left top;transform:rotateZ(25deg);margin-top: 0px;z-index:1000;}
   50%{transform-origin:left top;transform:rotateZ(45deg);margin-top: 0px;z-index:1000;}
   65%{transform-origin:left top;transform: rotateZ(45deg);margin-top: 900px;}
   66%{transform-origin:left top;transform: rotateZ(0deg);margin-top: 900px;}
   80%{margin-top: 900px;}
  100%{margin-top: 0px;}
}

</style>
