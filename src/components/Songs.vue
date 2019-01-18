<template>
  <div class="songs">
    <div class="card col-3">
      <song></song>
    </div>

  </div>
</template>

<script>
  import Song from '@/components/Song.vue'
  export default {
    name: 'songs',
    data() {
      return {

      }
    },
    computed: {
      results() {
        return this.$store.state.searchResults
      }
    },
    methods: {},
    components: {
      Song
    }
  }

</script>

<style>


</style>