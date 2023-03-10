import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VueI18n from 'vue-i18n'


Vue.use(Vuetify)
Vue.use(VueI18n)

const messages = {
  es: {
    $vuetify: {
      todoApp: {
        title: 'My ToDo App',
        formTask:'Form Tasks',
        input: 'My task',
        addTask: 'Add Task',
        listTasks: 'List Tasks',
        task:'Task',
        status: 'Status',
        actions: 'Actions',
        todo:'To-do',
        inProgress: 'In-progress',
        finished:'Finished'
      },
    },
  },
  en: {
    $vuetify: {
      todoApp: {
        title: 'Lista de Tareas',
        formTask:'Formulario de Tareas',
        input: 'Mi Tarea',
        addTask: 'Agregar Tarea',
        listTasks: 'Lista de Tareas',
        task:'Tarea',
        status: 'Estados',
        actions: 'Acciones',
        todo:'Por hacer',
        inProgress: 'En Proceso',
        finished:'Finalizado'
      },
    },
  },
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
})
