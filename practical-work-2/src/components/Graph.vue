<template>
  <!-- <h1> Graph ! </h1> -->
  <v-container fluid>
    <v-sparkline
      :value="value"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="width"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      auto-draw
    ></v-sparkline>
  </v-container>
</template>
<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea']
]

export default {
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [],
    gradientDirection: 'top',
    gradients,
    birthratesUrl: 'http://api.worldbank.org/v2/country/all/indicator/SP.DYN.CBRT.IN'
  }),
  created () {
    console.log('$route.params',
      JSON.stringify(this.$route.params, null, 2))
    this.getCountryData()
  },
  methods: {
    url (date = '2012', page) {
      page = page ? `&page=${page}` : ''
      return `${this.birthratesUrl}?date=${date}&format=JSON${page}`
    },
    async getCountryData () {
      const country = this.$route.params.country
      const startingYear = 1990
      const endYear = 2018
      const promises = []
      const tmpArray = new Array(endYear - startingYear) // has 38 cells

      for (let i = startingYear; i < endYear; i++) {
        console.log('year', i)
        const j = i // we define j as a constant so that it never changes

        const promise = this.$http(this.url(`${i}`, '2'))
          .then(({ data: [, birthrates] }) => {
            const countryData = birthrates.find(birthrate => birthrate.country.value === country)

            tmpArray[j] = countryData.value
            // we don't associate directly with this.value to remove null values afterwards
          })
          // .catch((err) => console.log('err', err))
        promises.push(promise)
      }

      try {
        await Promise.all(promises)
        const filteredArray = tmpArray.filter(value => value !== null)
        this.value.push(...filteredArray)
      } catch (err) {
        console.log('err', err)
      }
    }
  }
}
</script>
