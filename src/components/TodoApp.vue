<template>
  <div>
    <v-container>
      <p class="text-h6 text-md-h5 text-lg-h4 text-center">{{ $t('todoApp.formTask') }}</p>
      <ToDoNewTask />
      <p class="text-h6 text-md-h5 text-lg-h4 text-center">{{ $t('todoApp.listTasks') }}</p>
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
