<template>
  <div>
    <h3>Count component using Vuex 3</h3>
    <button @click="increment">+</button>
    <p>{{ count }}</p>
    <button @click="decrement">-</button>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapState(['count'])
    },
    methods: {
        ...mapMutations(['increment', 'decrement'])
    }
}
</script>

<style>

</style>