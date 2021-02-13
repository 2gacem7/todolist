<template>
<div class="q-pa-md row items-start q-gutter-md">
  <div class="col-md-12 col-xs-12 text-center">
    <div  v-for="todo in todos" :key="todo" class= "row justify-center" >
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
      todos: []
    };
  },
   async created() {
    try {
      const response = await axios.get('http://localhost:8082/todo/completed')
      this.todos = response.data
      console.log(response.data)
    } catch (e) {
      this.errors.push(e)
    }
  } 
}
</script>

<style>

</style>

