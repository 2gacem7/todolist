<template>
  <div class="q-pa-md">
        <div class="row justify-center">
            <div class="col-md-4 col-xs-6 text-center">
                <q-input v-model="title" type="text" hint="Name" />
                <q-btn @click.prevent="onSubmit()" class="q-mt-4" color="red" label="Add" />
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
  /* async created() {
    try {
      const response = await axios.get('http://localhost:8080/todo/completed')
      this.todos = response.data
      console.log(response.data)
    } catch (e) {
      this.errors.push(e)
    }
  } */
}
</script>

<style>

</style>

