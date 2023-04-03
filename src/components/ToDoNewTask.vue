<template>
  <v-container class="pa-md-8 mx-lg-auto">
    <v-row
      no-gutters
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
      >
        <v-form
          ref="form"
          v-model="validForm"
          lazy-validation
          @submit.prevent
        >
          <v-text-field
            v-model="task"
            :counter="40"
            :label="$t('todoApp.input')"
          />
          <div class="d-flex justify-center">
            <v-radio-group
              v-model="category"
              row
            >
              <v-radio
                :label="$t('todoApp.business')"
                value="Business"
              />
              <v-radio
                :label="$t('todoApp.personal')"
                value="Personal"
              />
            </v-radio-group>
          </div>
          <v-btn
            type="submit"
            block
            class="mt-2"
            @click="submitTask"
          >
          {{ this.$store.state.task ? $t('todoApp.updateTask') : $t('todoApp.addTask') }}
          </v-btn>
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
