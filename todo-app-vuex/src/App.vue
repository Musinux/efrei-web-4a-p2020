<template>
  <v-app>
    <v-toolbar app color="primary">
      <v-toolbar-title class="headline text-uppercase">
        <span>Front-end Web Development</span>
        <span class="font-weight-light">My TODO App</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <ToDo/>
    </v-content>
  </v-app>
</template>

<script>
import ToDo from './components/ToDo'
import store from './stores/Store.js'

export default {
  name: 'App',
  store,
  components: {
    ToDo
  }
}
</script>
