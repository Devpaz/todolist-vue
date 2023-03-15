<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    </v-navigation-drawer>
      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ $t('todoApp.title') }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="$i18n.locale = 'es'" :outlined="$i18n.locale === 'es'">
          <v-avatar>ES</v-avatar>
        </v-btn>
        <v-btn class="ml-1" icon @click="$i18n.locale = 'en'" :outlined="$i18n.locale === 'en'">
          <v-avatar>EN</v-avatar>
        </v-btn>
        <v-btn icon class="ml-1">
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
    TodoApp
  },

  data: () => ({
    drawer: false
  }),
};
</script>
