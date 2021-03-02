<template>
   <div>
      <div class="q-pa-md row items-start q-gutter-md">
      <div class="row">
      <div class="col-md-4 col-xs-12">
        <q-card dark bordered class="bg-green my-card col-md-4">
          <q-card-section>
            <div class="text-h6">To do</div>
            </q-card-section>
          <q-separator dark inset />
        </q-card>
        <div class="col-md-4">
        <q-card dark bordered class="bg-grey my-card col-md-4">
          <q-card-section>
            <div class="text-h6">Done git</div>
            </q-card-section>
          <q-separator dark inset />
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

