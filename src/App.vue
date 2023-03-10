<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    </v-navigation-drawer>
      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ $vuetify.lang.t('$vuetify.todoApp.title') }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
    <v-main>
      <TodoApp/>
    </v-main>
  </v-app>
</template>

<script>
import TodoApp from '@/components/TodoApp';

export default {
  name: 'App',

  components: {
    TodoApp,
  },

  data: () => ({
    drawer: false
  }),
};
</script>
