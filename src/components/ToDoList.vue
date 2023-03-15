<template>
    <v-container class="pa-md-8 mx-lg-auto">
      <v-row no-gutters align="center" justify="center">
        <v-col cols="12" sm="10">
          <p class="text-h6 text-md-h5 text-lg-h4 text-center">{{ $t('todoApp.listTasks') }}</p>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-4">{{ $t('todoApp.task') }}</th>
                  <th class="text-4">{{ $t('todoApp.category') }}</th>
                  <th class="text-4">{{ $t('todoApp.status') }}</th>
                  <th class="text-4">{{ $t('todoApp.actions') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(task, index) in tasks" :key="index" class="justify-center">
                  <td :class="{ 'text-decoration-line-through ': task.status === 'finished' }">{{ task.name }}</td>
                  <td>{{ task.category }}</td>
                  <td >
                    <v-alert
                    class="ma-2"
                    @click="changeStatus(index)"
                    dense
                    text
                    :class="{
                      'danger': task.status === 'to-do',
                      'success': task.status === 'finished',
                      'warning': task.status === 'in-progress',
                    }"
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
              @click="editTask(index)"
              color="info"
              fab
              small
              dark
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              class="ma-2"
              @click="deleteTask(index)"
              color="error"
              fab
              small
              dark
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

    </v-col>
    </v-row>
    <v-divider inset></v-divider>
    <div class="justify-center ma-8">
      <v-alert type="success" class="ma-6" :value="alert">
      <p>Task created successfully</p>
      </v-alert>
    </div>
    </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'ToDoList',
    computed: {
        ...mapState(['tasks', 'alert'])
    },
    methods: {
        ...mapMutations(['changeStatus', 'capitalizeFirstChar', 'editTask', 'deleteTask'])
    }

}
</script>

<style>

</style>