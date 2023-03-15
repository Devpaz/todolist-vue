import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
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
    },
    mutations: {
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
          submitTask(state) {
            if (state.task.length === 0 || state.task.length > 50) return;
            if (state.editedTask != null) {
                state.tasks[state.editedTask].name = state.task;
                state.editedTask = null;
            } else {
                state.tasks.push({
                name: state.task,
                category: state.category,
                status: "to-do",
              });
            }
            state.task = "";
            state.category = null,
            state.alert=true;
      
            //Add duration alert
            setTimeout(()=>{
                state.alert=false
            },2000)
          },
        updateValidForm(state, payload) {
            state.validForm = payload
        },
        updateTask(state, payload) {
            state.task = payload
        },
        updateCategory(state, payload) {
            state.category = payload
        }
    }
})