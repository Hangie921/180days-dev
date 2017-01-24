<template lang="jade">
  .wrap
    img(id="pic" src="http://i.imgur.com/toLFsbl.jpg?1" border="0" ref="haha" v-on:click="addShadow()")
    .text
      | Click me~~~
</template>

<script>
export default {
  data () {
    return {
      attr: null,
      a: 1,
      b: -1,
      p: 'px'
    }
  },
  mounted () {
  },
  methods: {
    addShadow () {
      console.log(this.$el)
      console.log(this.$refs)
      if (this.attr != null) {
        this.a += 2
        this.b -= 2
        this.attr = this.attr + ',' + this.a + this.p + ' ' + this.a + this.p + ' ' + '15' + this.p + '#aaa' + ',' + this.b + this.p + ' ' + this.b + this.p + ' ' + '15' + this.p + '#aaa' + ',' + this.a + this.p + ' ' + this.b + this.p + ' ' + '15' + this.p + '#aaa' + ',' + this.b + this.p + ' ' + this.a + this.p + ' ' + '15' + this.p + '#aaa'
        this.$el.style.boxShadow = this.attr
      } else {
        this.attr = '1px 1px 15px #aaa,-1px -1px 15px #aaa,1px -1px 15px #aaa,-1px 1px 15px #aaa'
        this.$el.style.boxShadow = this.attr
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';

.wrap{
  background-color:#f00;
  width: 30%;
  height:500px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
#pic{
  width: 100%;
  height: 100%;
}
.text{
  margin-top: -300px;
  margin-left: -300px;
  font-family:'tahoma';
  font-size:30px;
}
</style>
