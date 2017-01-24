<template lang="jade">
  .container
    .row
      .col-md-6.col-centered
        .input_group.col-md-12
          h2 Please enter your city
          span.col-md-12
            | City
            input.form-control(v-model="city")
          span.col-md-12
            | Country
            input.form-control(v-model="country")
          .col-md-12
            button.btn.btn-info(v-on:click="search()")
              | serach
        .info(v-if="showInfo").col-md-12
          .icon(v-bind:class="{clear:clear, cloud:cloud, rain:rain}")
          .weahter
            h2 
              | {{weather}}
            span
              | {{weather_description}}
          .detail
            span
              | Temperature: {{curTemp}}
            br
            span
              | Humidity: {{humidity}}


</template>

<script>
let url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q='
let appid = '&appid=5e7e15c36180f215a50d654ea13b7930'
let query = ''

export default {
  data () {
    return {
      showLoading: false,
      showInfo: false,
      humidity: 0,
      pressure: 0,
      curTemp: 0,
      maxTemp: 0,
      minTemp: 0,
      city: 'taipei',
      country: 'taiwan',
      weather: '',
      weather_description: '',
      clear: false,
      cloud: false,
      rain: false
    }
  },
  mounted () {

  },
  methods: {
    resetWeather () {
      this.clear = false
      this.cloud = false
      this.rain = false
    },
    search () {
      this.showLoading = true
      if (this.country) {
        query = url + this.city + ',' + this.country + appid
      } else {
        query = url + this.city + appid
      }
      this.$http.get(query).then(({data}) => {
        console.log(data)
        if (data.cod === 200) {
          this.humidity = data.main.humidity
          this.pressure = data.main.pressure
          this.curTemp = data.main.temp
          this.maxTemp = data.main.temp_max
          this.minTemp = data.main.temp_min

          this.weather = data.weather[0].main
          this.weather_description = data.weather[0].description

          this.showInfo = true
        }

        if (this.weather === 'Clear') {
          this.resetWeather()
          this.clear = true
        } else if (this.weather === 'Rain') {
          this.resetWeather()
          this.rain = true
        } else if (this.weather === 'Clouds') {
          this.resetWeather()
          this.cloud = true
        }
        this.showLoading = false
      }).catch(err => {
        console.log(err)
        this.showLoading = false
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';

.icon{
  box-sizing:border-box;
  display:inline-block;
  width: 70px;
  height: 70px;
  vertical-align:top;
  overflow:hidden;
}
.weather{
  vertical-align:top;
  box-sizing:border-box;
  display:inline-block;
  width: 40%;
  height: 100px;
  padding:15px 0px;
}
.detail{
  padding: 15px 0px;
}
.clear{
  background:url('../assets/weather_icons.png') 352px -10px;
}
.cloud{
  background:url('../assets/weather_icons.png') 352px -155px;
}
.rain{
  background:url('../assets/weather_icons.png') 65px -155px;
}





</style>
