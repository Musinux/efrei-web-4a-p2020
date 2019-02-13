<template>
  <v-data-table
    :headers="headers"
    :items="birthrates"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.country.value }}</td>
      <td class="text-xs-right">
        {{ props.item.value }}
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    headers: [{ text: 'Country', value: 'country.value' },
      { text: 'Crude birth rate', value: 'value' }],
    birthrates: [],
    birthratesUrl: 'http://api.worldbank.org/v2/country/all/indicator/SP.DYN.CBRT.IN'
  }),
  created () {
    this.getBirthrates()
  },
  methods: {
    url (date = '2012', page) {
      page = page ? `&page=${page}` : ''
      return `${this.birthratesUrl}?date=${date}&format=JSON${page}`
    },
    async getBirthrates () {
      const {
        data: [metadata, birthrates]
      } = await this.$http(this.url('2013', '2'))

      console.log('metadata', metadata)
      console.log('birthrates', JSON.parse(JSON.stringify(birthrates)))
      this.birthrates = birthrates
    }
  }
}
</script>
