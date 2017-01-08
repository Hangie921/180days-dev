<template lang="jade">
  .container-fluid.header_vue
    .row
      section.header.col-md-12
        ul
          li.logo.col-md-2
            router-link(to="/")
              | 180 Webs
          li.menu.col-md-7.row_space--sm
          li.login.col-md-3
            //- button.btn Login
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~sass/_varaibles.scss';
@import '~sass/_breakpoint.scss';
h1{
  color: $pri_green;
}
.header{
  padding-top:$space_xs;
  height:60px;
  background-color: rgba(0,0,0,.7);
  color:$base_white;
  a{
    display:block;
    width: 100%;
    height: 100%;
    color:$base_white;
  }
  .logo{
    font-size: 30px;
    a{
      padding:0;
      text-decoration: none;
    }
  }
}
ul{
  width:100%;
}

.login{
  text-align:right;
}
</style>
