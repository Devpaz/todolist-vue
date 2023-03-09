<template>
  <div>
    <v-container style="max-width: 60%">
    <h2>My Vue Todo App V 2 </h2>
    <v-form  @submit.prevent>
      <v-row center >
        <v-col
          cols="8"
          md="8"
        >
          <v-text-field
            v-model="task"
            :counter="50"
            label="My task"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="4"
          md="3"
        >
          <v-btn type="submit" block class="mt-2" @click="submitTask">Submit</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-table>
      <thead>
        <tr>
          <th>
            Task
          </th>
          <th>
            Status
          </th>
          <th>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-left"
          v-for="(task, index) in tasks"
          :key="index"
        >
          <td :class="{ 'text-decoration-line-through ': task.status === 'finished' }">
            {{ task.name }}
          </td>
          <td>
          <v-alert
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
    </v-table>
    <v-alert
      dense
      text
      color="success"
      :value="alert"
    >
    <strong>
    a task was created
    </strong>
    </v-alert>
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
    /**
     * Add / Update task
     */
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
