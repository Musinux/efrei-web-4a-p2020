<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        @click="getStuff"
      >
        <span class="mr-2">DOWNLOAD</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  /* components: {
    HelloWorld
  }, */
  data () {
    return {
      //
    }
  },
  methods: {
    getStuff () {
      const url = 'http://api.worldbank.org/v2/country/all/indicator/SP.DYN.CBRT.IN?date=2017&format=JSON'
      this.$http.get(url)
        .then(result => console.log(result))
        .catch(err => console.log('oups', err))
    }
  }
}
</script>
