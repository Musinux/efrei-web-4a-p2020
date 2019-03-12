<template>
  <div>
    <v-btn
      color="success"
      @click="getBirthrates(2013)"
      >2013</v-btn>
    <v-btn
      color="success"
      @click="getBirthrates(2008)"
      >2008</v-btn>
    <v-data-table
      :headers="headers"
      :items="birthrates"
      class="elevation-1"
      >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.country.value }}</td>
        <td class="text-xs-right">
          {{ props.item.value }}
          <router-link :to="'/graph/' + props.item.country.value">
            Go to {{ props.item.country.value }}
          </router-link>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [{ text: 'Country', value: 'country.value' },
      { text: 'Crude birth rate', value: 'value' }],
    birthrates: []
  }),
  async created () {
    await this.getBirthrates()
    console.log('this.birthrates youhou', this.birthrates)
  },
  methods: {
    async getBirthrates (year = '2013') {
      this.birthrates = await this.$store.dispatch('getBirthratesFromYear', year)
    }
  }
}
</script>
