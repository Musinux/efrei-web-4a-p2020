import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const birthratesUrl = 'http://api.worldbank.org/v2/country/all/indicator/SP.DYN.CBRT.IN'

function url (date = '2012', page) {
  page = page ? `&page=${page}` : ''
  return `${birthratesUrl}?date=${date}&format=JSON${page}`
}

async function getBirthrates (year = 2013) {
  const {
    data: [metadata, birthrates]
  } = await axios.get(url(year, '2'))

  return birthrates
}

export default new Vuex.Store({
  state: {
    birthrates: {}
  },
  getters: {
    getYear: state => year => state.birthrates(year)
  },
  mutations: {
    addBirthratesForYear (state, { year, birthrates }) {
      state.birthrates[year] = birthrates
      console.log('state.birthrates', state.birthrates)
    }
  },
  actions: {
    async getBirthratesFromYear ({ commit, state }, year = 2013) {
      console.log('year', year, typeof year)
      let yearBirthrate = state.birthrates[year]

      if (!yearBirthrate) {
        // make API call
        yearBirthrate = await getBirthrates(year)
        commit('addBirthratesForYear', { year, birthrates: yearBirthrate })
        console.log('yearBirthrate', yearBirthrate)
      }

      return yearBirthrate
    }
  }
})
