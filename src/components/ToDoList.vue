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
                  <ToDoListItem
                  v-for="(task, index) in tasks"
                  :task="task"
                  :index="index"
                  />

              </tbody>
            </template>
          </v-simple-table>

    </v-col>
    </v-row>
    <v-divider inset></v-divider>
    <div class="justify-center ma-8">
      <v-alert :type="typeAlert" class="ma-6" :value="alert">
      <p>{{msgAlert}}</p>
      </v-alert>
    </div>
    </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ToDoListItem from './ToDoListItem.vue';

export default {
    name: 'ToDoList',
    components: {
      ToDoListItem
    },
    computed: {
        ...mapState(['tasks', 'alert','msgAlert','typeAlert'])
    },

}
</script>

<style>

</style>