<template lang="jade">
.container(v-on:mousemove="onMousemove($event)")
  .circle#c1
  .circle#c2
  .circle#c3
  .circle#c4
  .circle#c5
  .circle#c6
  .circle#c7
  .circle#c8
  .circle#c9
  .circle#c10
</template>

<script>
// import $ from 'jquery'
export default {
  data () {
    return {
      x: 0,
      y: 0,
      cx: 0,
      cy: 0,
      offsetX: 0,
      offsetY: 0,
      start: null,
      progress: 0
    }
  },
  mounted () {
    let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
    window.requestAnimationFrame = requestAnimationFrame
    this.requestAnimationFrame(this.step)
  },
  methods: {
    onMousemove (e) {
      console.log('eventX', e.pageX)
      console.log('eventY', e.pageY)
      this.x = e.pageX
      this.y = e.pageY - 60
      // this.offsetX = this.x - this.cx
      // this.offsetY = this.y - this.cy
      this.start = null
      this.requestAnimationFrame(this.step)
    },
    requestAnimationFrame (step) {
      return window.requestAnimationFrame(step)
    },
    step (timestamp) {
      let regex = /translateX\((\d*)px\)\stranslateY\((\d*)px\)/
      if (this.start === null) this.start = timestamp
      this.progress = timestamp - this.start
      console.log('progress', this.progress)

      for (let i = 1; i < 11; i++) {
        let e = document.getElementById('c' + i)

        if (regex.exec(e.style.transform)) {
          this.cx = parseInt(regex.exec(e.style.transform)[1])
          this.cy = parseInt(regex.exec(e.style.transform)[2])
        }

        this.cx += (this.x - this.cx) < 0 ? Math.min(100, (this.x - this.cy) / -10) : Math.min(100, (this.x - this.cy) / 10)
        this.cy += (this.y - this.cy) < 0 ? Math.min(100, (this.x - this.cy) / -10) : Math.min(100, (this.x - this.cy) / 10)
        e.style.transform = 'translateX(' + this.cx + 'px) translateY(' + this.cy + 'px)'
      }
      if (this.progress < 2000) {
        this.requestAnimationFrame(this.step)
      }
      // if (Math.abs(this.x - this.cx) >= 0 || Math.abs(this.y - this.cy) >= 0) {
      //   this.requestAnimationFrame(this.step)
      // }
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';

.container {
  width: 1400px;
  height: 700px;
  background-color: #000;
  position: relative;
  z-index: 1;
}

.circle {
  border-radius: 50%;
  position: absolute;
  left: 0px;
  top: 0px;
  transform-origin:center;
}

#c1 {
  width: 100px;
  height: 100px;
  background-color: #FF9940;
  z-index: 2;
  transition: all 10.3s;
}

#c2 {
  width: 90px;
  height: 90px;
  background-color: #FFE699;
  z-index: 2;
  transition: all 9.3s;
}

#c3 {
  width: 80px;
  height: 80px;
  background-color: #3D993D;
  z-index: 2;
  transition: all 8.5s;
}

#c4 {
  width: 70px;
  height: 70px;
  background-color: #B3FFF2;
  z-index: 2;
  transition: all 7.3s;
}

#c5 {
  width: 60px;
  height: 60px;
  background-color: #9999FF;
  z-index: 2;
  transition: all 6.4s;
}

#c6 {
  width: 50px;
  height: 50px;
  background-color: #5C45E6;
  z-index: 2;
  transition: all 4.9s;
}

#c7 {
  width: 40px;
  height: 40px;
  background-color: #FF4DF2;
  z-index: 2;
  transition: all 3.6s;
}

#c8 {
  width: 30px;
  height: 30px;
  background-color: #FFA600;
  z-index: 2;
  transition: all 3.0s;
}

#c9 {
  width: 20px;
  height: 20px;
  background-color: #FF3366;
  z-index: 2;
  transition: all 2.5s;
}

#c10 {
  width: 10px;
  height: 0px;
  background-color: #5E8529;
  z-index: 2;
  transition: all 1.6s;
}
</style>
