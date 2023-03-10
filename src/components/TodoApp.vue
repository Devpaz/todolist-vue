<template>
  <div>
    <v-container class="pa-md-8 mx-lg-auto">
      <v-row no-gutters align="center" justify="center">
        <v-col cols="12" sm="8">
          <p class="text-h6 text-md-h5 text-lg-h4 text-center">Form Tasks</p>
          <v-form
            @submit.prevent
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="task"
              :counter="50"
              label="My task"
            ></v-text-field>
            <v-btn type="submit" block class="mt-2" @click="submitTask">Add Task</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <v-divider inset></v-divider>
    <v-container class="pa-md-8 mx-lg-auto">
       <v-row no-gutters align="center" justify="center">
        <v-col cols="12" sm="10">
          <p class="text-h6 text-md-h5 text-lg-h4 text-center">List Tasks</p>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-4 text-md-h3 text-lg-h6">Task</th>
                  <th class="text-4 text-md-h3 text-lg-h6">Status</th>
                  <th class="text-4 text-md-h3 text-lg-h6">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(task, index) in tasks" :key="index" class="justify-center">
                  <td :class="{ 'text-decoration-line-through ': task.status === 'finished' }">{{ task.name }}</td>
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
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      alert:false,
      task: "",
      editedTask: null,
      statuses: ["to-do", "in-progress", "finished"],
      /* Status could be: 'to-do' / 'in-progress' / 'finished' */
      tasks: [
        {
          name: "Steal bananas from the supermarket.",
          status: "to-do",
        },
        {
          name: "Eat 1 kg chocolate in 1 hour.",
          status: "in-progress",
        },
        {
          name: "Create YouTube video.",
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
          status: "to-do",
        });
      }
      this.task = "";
      this.alert=true;
    },
  },
};
</script>

<style scoped>

</style>
