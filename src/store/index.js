import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      alert:false,
      msgAlert:'',
      typeAlert:'success',
      task: '',
      category: 'Personal',
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
        // capitalizeFirstChar(state, str) {
        //     return str.charAt(0).toUpperCase() + str.slice(1);
        //     console.log('sds' + str.charAt(0).toUpperCase());
        // },

          changeStatus(state, index) {
            let newIndex = state.statuses.indexOf(state.tasks[index].status);
            if (++newIndex > 2) newIndex = 0;
            state.tasks[index].status = state.statuses[newIndex];

          },
          deleteTask(state, index) {
            state.alert=true,
            state.msgAlert='Task deleted successfully';
            state.typeAlert='error';
            state.tasks.splice(index, 1);
          },

          editTask(state, index) {
            state.task = state.tasks[index].name;
            state.category = state.tasks[index].category;
            state.editedTask = index;
          },
          submitTask(state) {
            if (state.task.length === 0 || state.task.length > 40) return;
            if (state.editedTask != null) {
                state.tasks[state.editedTask].name = state.task;
                state.tasks[state.editedTask].category = state.category;
                state.editedTask = null;
                state.msgAlert='Task updated successfully';
                state.typeAlert='info'
            } else {
                state.tasks.push({
                name: state.task,
                category: state.category,
                status: "to-do",
              });
              state.msgAlert='Task created successfully',
              state.typeAlert='success'
            }
            state.task = "",
            state.category = 'Personal',
            state.alert=true,

            //Add duration alert
            setTimeout(()=>{
                state.alert=false
            },3000)
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
