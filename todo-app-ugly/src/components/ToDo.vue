<template>
  <div class="hello">
    <v-form>
      <v-text-field
        v-model="title"
        label="Title of your TO DO"
        >
      </v-text-field>
      <v-textarea
        v-model="description"
        label="Description"
      ></v-textarea>
      <v-btn
        color="success"
        @click="addTodo">
        Save
      </v-btn>
    </v-form>
    <v-list>
      <v-list-tile
        :key="item.title"
        v-for="(item, index) in todos">
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.title }}
          </v-list-tile-title>

          <v-list-tile-content>
            {{ item.description }}
          <v-btn
            @click="remove(index)"
            >
            Delete !
          </v-btn>
          </v-list-tile-content>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: '',
    description: '',
    todos: []
  }),
  name: 'HelloWorld',
  props: { msg: String },
  methods: {
    addTodo () {
      this.todos.push({
        title: this.title,
        description: this.description
      })
      console.log('youhou it works',
        JSON.stringify(
          this.todos, null, 2))
    },
    remove (index) {
      // removes the item
      this.todos.splice(index, 1)
    }
  }
}
</script>
