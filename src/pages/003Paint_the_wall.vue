<template lang="jade">
  .container
    .title
      h1
        | Pick a color and paint the wall!
    #workspace.clearfix
      #color_palette
        .color#red
        .color#yellow
        .color#blue
        .color#white
      #painting.clearfix
        #row1
          .line#row1_box1.col-md-4
          .line#row1_box2.col-md-2
          .line#row1_box3.col-md-3
          .line#row1_box4.col-md-3
        #row2
          .line#row2_box1.col-md-1
          .line#row2_box2.col-md-2
          .line#row2_box3.col-md-3
          .line#row2_box4.col-md-6
        #row3
          .line#row3_box1.col-md-2
          .line#row3_box2.col-md-2
          .line#row3_box3.col-md-6
          .line#row3_box4.col-md-2
        #row4
          .line#row4_box1.col-md-8
          .line#row4_box2.col-md-2
          .line#row4_box3.col-md-1
          .line#row4_box4.col-md-1
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      painter: ''
    }
  },
  mounted () {
    $('.color').click((e) => {
      $('.color').removeClass('active')
      $(e.target).addClass('active')
      this.painter = $(e.target).css('background-color')
    })
    $('.line').click((e) => {
      $(e.target).css('background-color', this.painter)
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
*{
  margin: 0;
  padding: 0;

}
.container{
  width: 100%;
  background-color: #0ff0a2;
}
.title{
  text-align: center;
  font-size: 40px;
  text-shadow: -1px -1px #fff;
  padding:10px;
}
#workspace{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border:1px solid #000;
  margin-bottom: 30px;
  padding-bottom:$space_md;
  box-shadow: -2px -2px 1px #bbb,
        2px 2px 1px #bbb;
  background-color: #ddd;

}
#color_palette{
  width: 20%;
  margin: 50px 0px;
  float: left;
}
.color{
  width: 50px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  cursor:pointer;
  &.active{
    border:4px solid #333;
  }
}
#red{
  background-color: #f00;
}
#yellow{
  background-color: #ff0;
}
#blue{
  background-color: #00f;
}
#white{
  background-color: #fff;
}
#painting{
  width: 75%;
  height: 500px;
  background-color: #fff;
  float:left;
  margin-top: 50px;
}
#row1{
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  border-bottom: 10px solid #000;
}
#row1_box1,#row2_box1,#row3_box1,#row4_box1{
  box-sizing: border-box;
  border-right: 10px solid #000;
  height: 100%;
  float:left;
}
#row1_box2,#row2_box2,#row3_box2,#row4_box2{
  box-sizing: border-box;
  border-right: 10px solid #000;
  height: 100%;
  float:left;
}
#row1_box3,#row2_box3,#row3_box3,#row4_box3{
  box-sizing: border-box;
  border-right: 10px solid #000;
  height: 100%;
  float:left;
}
#row1_box4,#row2_box4,#row3_box4,#row4_box4{
  box-sizing: border-box;
  height: 100%;
  float:left;
}

#row2{
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-bottom: 10px solid #000;
}
#row3{
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  border-bottom: 10px solid #000;
}
#row4{
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  border-bottom: 10px solid #000;
}






</style>
