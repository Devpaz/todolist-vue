<template>
  <tr class="justify-center">
    <td :class="{ 'text-decoration-line-through ': task.status === 'finished' }">
      {{ task.name }}
    </td>
    <td>{{ task.category }}</td>
    <td>
      <v-alert
        class="ma-2"
        dense
        text
        :class="{
          'danger': task.status === 'to-do',
          'success': task.status === 'finished',
          'warning': task.status === 'in-progress',
        }"
        @click="changeStatus(index)"
      >
        <strong>
          <!-- {{ capitalizeFirstChar(task.status) }} -->
          {{ task.status }}
        </strong>
      </v-alert>
    </td>
    <td>
      <v-btn
        class="ma-2"
        color="info"
        fab
        small
        :disabled="task.status === 'finished'"
        @click="editTask(index)"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        class="ma-2"
        color="error"
        fab
        small
        :disabled="task.status === 'finished'"
        @click="deleteTask(index)"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </td>
  </tr>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({
          name: '',
          category: '',
          status: ''
       })
    },
    index: {
      type: Number,
      required: true,
      default: 100
    }
  },
  methods: {
    ...mapMutations(['changeStatus', 'capitalizeFirstChar', 'editTask', 'deleteTask'])
  }
}
</script>

<style>

</style>
