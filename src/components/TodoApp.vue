<template>
  <div>
    <v-container class="pa-md-8 mx-lg-auto">
      <v-row no-gutters align="center" justify="center">
        <v-col cols="12" sm="8">
          <p class="text-h6 text-md-h5 text-lg-h4 text-center">{{ $t('todoApp.formTask') }}</p>
          <v-form
            @submit.prevent
            ref="form"
            v-model="validForm"
            lazy-validation
          >
            <v-text-field
              v-model="task"
              :counter="50"
              :label="$t('todoApp.input')"
            ></v-text-field>
            <div class="d-flex justify-center">
              <v-radio-group v-model="category" row>
                <v-radio
                  label="Business"
                  value="Business"
                ></v-radio>
                <v-radio
                  label="Personal"
                  value="Personal"
                ></v-radio>
              </v-radio-group>
            </div>

            <v-btn type="submit" block class="mt-2" @click="submitTask">{{ $t('todoApp.addTask') }}</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <v-divider inset></v-divider>
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
                      {{ capitalizeFirstChar(task.status) }}
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
  </div>

</template>

<script>
export default {
  name: "TodoApp",
  props: {
    msg: String,
  },
  data() {
    return {
      alert:false,
      task: "",
      category: null,
      validForm: true,
      editedTask: null,
      statuses: ["to-do", "in-progress", "finished"],
      /* Status could be: 'to-do' / 'in-progress' / 'finished' */
      tasks: [
        {
          name: "Steal bananas from the supermarket.",
          category: 'Personal',
          status: "to-do",
        },
        {
          name: "Eat 1 kg chocolate in 1 hour.",
          category: 'Personal',
          status: "in-progress",
        },
        {
          name: "Create YouTube video.",
          category: 'Business',
          status: "finished",
        },
      ],
    };
  },
  methods: {
    capitalizeFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];

    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    submitTask() {
      if (this.task.length === 0 || this.task.length > 50) return;
      if (this.editedTask != null) {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      } else {
        this.tasks.push({
          name: this.task,
          category: this.category,
          status: "to-do",
        });
      }
      this.task = "";
      this.category = null,
      this.alert=true;

      //Add duration alert
      setTimeout(()=>{
        this.alert=false
      },2000)
    },
  }
};
</script>

<style scoped>

</style>
