<template>
<div class="q-pa-md row items-start q-gutter-md">
  <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="title" label="Task" />
      <q-btn padding="xs lg"
      color="primary"
      icon="eco"
      @click="addTodo"
      :disabled="!title"> Add </q-btn>
  </div>
  <div class="col-md-12 col-xs-12 text-center">
    <div  v-for="(todo) in todos" :key="todo._id" class= "row justify-center notification">
      <div class="col-md-4 col-xs-12 text-center">

            <div v-if="todo.completed===false">
  <q-card
    class="my-card text-white col-md-4 col-xs-12 text-center"
    style="background: radial-gradient(circle, #4B5FF1 0%, #09198B 100%)"
  >
    <q-card-section>
      <div class="text-h6">
        {{todo.title}}  
        <q-checkbox v-model="todo.completed" color="teal" />
      </div>
    </q-card-section>
  </q-card>
            </div>
  </div>
  <div class="col-md-4 col-xs-12 text-center">
    <div v-if="todo.completed===true">     
  <q-card
    class="my-card text-black my-card text-white col-md-4 col-xs-12 text-center"
    style="background: radial-gradient(circle, #DADFDA 0%, #858A85 100%)"
  >
  <q-btn class="" @click="removeTodo(todo)"> 
          <i class="material-icons"> delete</i>
        </q-btn>
    <q-card-section>
      <div class="text-h6">
        {{todo.title}}
        <q-checkbox v-model="todo.completed" color="teal" />
      </div>
    </q-card-section>
  </q-card>
  </div>
  </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  
  name: 'App',
  data(){
    return {
      todos: [],
      title:"",
    };
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:8080/todo/completed')
      this.todos = response.data
      console.log(response.data)
    } catch (e) {
      this.errors.push(e)
    }
  },
  methods: {
    async addTodo() {
            const response = await axios.post('http://localhost:8080/todo/add', {
              title : this.title
            });
            this.todos.push(response.data);
            this.title ="";
            location.reload();
    },
    async removeTodo(todo){
      await axios.delete('http://localhost:8080/todo/'+ todo._id)
      this.todos.splice(todo, 1)
    }
  }
}
</script>

<style>

</style>

