<template>
  <div>
    <v-container>
      <ToDoNewTask />
      <ToDoList />
    </v-container> 
  </div>

</template>

<script>
import ToDoNewTask from './ToDoNewTask.vue';
import ToDoList from './ToDoList.vue'
export default {
  name: "TodoApp",
  components: {
    ToDoNewTask,
    ToDoList
  }
};
</script>

<style scoped>

</style>
