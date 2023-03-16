<template>
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
              :counter="40"
              :label="$t('todoApp.input')"
            ></v-text-field>
            <div class="d-flex justify-center">
              <v-radio-group v-model="category" row>
                <v-radio
                  :label="$t('todoApp.business')"
                  value="Business"
                ></v-radio>
                <v-radio
                  :label="$t('todoApp.personal')"
                  value="Personal"
                ></v-radio>
              </v-radio-group>
            </div>
            <v-btn type="submit" block class="mt-2" @click="submitTask">{{ $t('todoApp.addTask') }}</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'ToDoNewTask',
    computed: {
        ...mapState(['validForm', 'task', 'category']),
        validForm: {
            get() {
                return this.$store.state.validForm
            },
            set(value) {
                this.$store.commit('updateValidForm', value)
            }
        },
        task: {
            get() {
                return this.$store.state.task
            },
            set(value) {
                this.$store.commit('updateTask', value)
            }
        },
        category: {
            get() {
                return this.$store.state.category
            },
            set(value) {
                this.$store.commit('updateCategory', value)
            }
        },      
    },
    methods: {
        ...mapMutations(['submitTask',])
    }

}
</script>

<style>

</style>