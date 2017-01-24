<template lang="jade">
  .hello
</template>

<script>
let url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q='
let appid = '&appid=5e7e15c36180f215a50d654ea13b7930'
let query = ''

export default {
  data () {
    return {
      showLoading: false
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';

</style>
