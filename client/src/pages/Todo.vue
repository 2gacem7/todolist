<template>
<<<<<<< HEAD
  <div class="q-pa-md">
        <div class="row justify-center">
            <div class="col-md-4 col-xs-6 text-center">
              <q-input v-model="title" type="text" hint="Name" />
              <q-btn @click.prevent="onSubmit()" class="q-mt-4" color="red" label="Add" />
            </div>
            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  {{ lorem }}
                </q-card-section>
            </q-card>

=======
<div class="q-pa-md row items-start justify-center q-gutter-md">
  <div class="q-gutter-md row" style="max-width: 300px">
      <q-input v-model="title" label="Task" />
      <q-btn padding="xs lg"
        color="primary"
        icon="eco"
        @click="addTodo"
        :disabled="!title"> Add
      </q-btn>
  </div>
  <div class="col-md-12 col-xs-12 justify-center text-center">
    <div v-for="(todo, i) in todos" :key="todo._id" class= "row justify-center notification">
      <div class="col-md-4 col-xs-12 text-center">
        <div v-if="todo.completed===false">
          <q-card
            class="my-card text-white col-md-4 col-xs-12 text-center"
            style="background: #FFC300"
          >
            <q-input class="text-color-white" v-if="isSelected(todo)" 
              v-model="editedTitle">
            </q-input>
            <q-btn class="bg-green" @click="isSelected(todo) ? updateTodo(todo, i) : select(todo)"> 
              <i class="material-icons">{{isSelected(todo) ? 'save' : 'edit'}}</i>
            </q-btn>
            <q-card-section>
              <div class="text-h6">
                <span> #{{(i + 1)}}</span>
                <h5>{{todo.title}} </h5> 
                <q-checkbox v-model="todo.completed" color="teal" />
              </div>
            </q-card-section>
          </q-card>
>>>>>>> 6b14d659d9e264d6304b14d44e0296b213e2c60e
        </div>
      </div>
      <div class="col-md-4 col-xs-12 text-center">
        <div v-if="todo.completed===true">     
          <q-card
            class="my-card text-black my-card text-white col-md-4 col-xs-12 text-center"
            style="background: radial-gradient(circle, #DADFDA 0%, #858A85 100%)"
          >
            <q-btn class="bg-red" @click="removeTodo(todo, i) ? isSelected(todo) : select(todo)">
              <em class="material-icons">delete</em>
            </q-btn>
            <q-card-section>
              <div class="text-h6">
                <h5>{{todo.title}}</h5>
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
      editedTitle:"",
      selected:{}
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
    async removeTodo(todo, i){
      await axios.delete('http://localhost:8080/todo/'+ todo._id)
      this.todos.splice(i, 1)
    },
    select(todo){
      this.selected = todo;
      this.editedTitle = todo.title;
    },
    isSelected(todo){
      return todo._id === this.selected._id;
    },
    async updateTodo(todo, i) {
      const response = await axios.put('http://localhost:8080/todo/complete/' + todo._id, {
        title: this.editedTitle
      });
      this.todos[i] = response.data;
      location.reload();
    }
  }
}
</script>

<style>

</style>

