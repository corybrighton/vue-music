<template>
  <div class="home container-fluid">
    <div class="row">
      <form class="col-2" @submit.prevent="search">
        <input type="text" placeholder="Song or Artist" v-model="query">
      </form>
      <div class="col-10">
        <songs></songs>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Songs from '@/components/Songs.vue'

  export default {
    name: 'home',
    data() {
      return {
        query: ''
      }
    },
    computed: {
      results() {
        return this.$store.state.searchResults
      }
    },
    components: {
      Songs
    },
    methods: {
      search() {
        this.$store.dispatch('search', this.query)
      }
    }
  }
</script>