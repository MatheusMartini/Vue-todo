<template>
  <div>

      <v-col
        cols="12"
      >
        <v-text-field
          v-model="inputField"
          label="What's your task?"
          outlined
          clearable
          @keyup.enter="handleAddTask"
        ></v-text-field>
      </v-col>
    
     <v-list
      flat
      subheader
    >

      <v-list-item-group
        multiple
        active-class=""
      >

        <div
        v-for="task, index in $store.state.tasks"
        :key="index"
        >

          <Tasks :task=task />

        </div>   

      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Tasks from "../components/Tasks/task.vue"

export default {
  name: "Home-homeView",

  components: {
    Tasks
  },
  data(){
    return{

      inputField: null,  

    }
  },
  methods: {
    handleAddTask(){
      this.$store.commit('addTask', this.inputField)
      this.inputField = null; 
    }
  }
}
</script>
