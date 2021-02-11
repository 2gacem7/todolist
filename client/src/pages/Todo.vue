<template>
  <div>
      <h3>Hello from Todo</h3>
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
  async mounted(){
    const response = await axios.get('localhost:8080/todo/completed');
    this.todos = response.data;
    console.log(response.data);

  }
}
</script>

<style>

</style>