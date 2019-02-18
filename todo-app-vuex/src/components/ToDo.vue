<template>
  <v-container>
    <v-layout row
      text-xs-center
      wrap
      >
      <v-flex xs12>
        <v-card>
          <v-toolbar color="secondary" dark>
            <v-toolbar-title>My TODOs</v-toolbar-title>
          </v-toolbar>

          <v-card>
            <v-form v-model="valid" ref="form">
              <v-container>
                <v-layout>
                  <v-flex
                    xs12
                    >
                  <v-text-field
                    v-model="title"
                    label="Title of your TODO"
                    required
                    ></v-text-field>
                  <v-textarea
                    box
                    v-model="description"
                    label="Content of your TODO"
                    required
                    ></v-textarea>
                  </v-flex>
                  <v-flex align-content-end>
                    <v-btn
                      :disabled="!valid"
                      color="accent"
                      flat
                      @click="validate"
                      >Create</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card>

          <template v-for="(item, index) in $store.state.todos">
            <v-card
              :key="item.title"
            >
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0"> {{ item.title }} </h3>
                  <pre>{{ item.description }}</pre>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="accent" @click="deleteTodo(index)">Delete</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    valid: false,
    title: '',
    description: ''
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.$store.commit('addTodo', {
          title: this.title,
          description: this.description,
          done: false
        })
        console.log('this.todos', this.$store.state.todos)
      }
    },
    deleteTodo (index) {
      this.$store.commit('removeTodo', index)
    }
  }
}
</script>

<style>

</style>
