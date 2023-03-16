import Vue from 'vue';
import VueI18n from 'vue-i18n'

const messages = {
  en: {
      todoApp: {
        title: 'My ToDo App',
        category: 'Category',
        formTask: 'Form to add task',
        personal: 'Personal',
        input: 'My task',
        addTask: 'Add Task',
        listTasks: 'List Tasks',
        task:'Task',
        status: 'Status',
        actions: 'Actions',
        todo:'To-do',
        inProgress: 'In-progress',
        finished:'Finished',
        personal:'Personal',
        business:'Business'
      },
  },
  es: {
      todoApp: {
        title: 'Lista de Tareas',
        category: 'Categoría',
        formTask:'Formulario para añadir tarea',
        input: 'Mi Tarea',
        addTask: 'Agregar Tarea',
        listTasks: 'Lista de Tareas',
        task:'Tarea',
        status: 'Estados',
        actions: 'Acciones',
        todo:'Por hacer',
        inProgress: 'En Proceso',
        finished:'Finalizado',
        personal:'Personal',
        business:'Negocio'
      },
  },
}

Vue.use(VueI18n)

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

export default i18n
