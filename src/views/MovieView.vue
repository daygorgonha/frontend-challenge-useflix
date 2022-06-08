<template>
  <div>
    <v-container
      class="d-flex justify-end"
    >
      <ButtonComponent
        name="Add Filmes"
        :click="handleAdd"
        btnColor="secondary"
        btnColorActive="secondary"
      />
    </v-container>

    <ListMovieComponent />

  </div>
</template>

<script>
  export default {
    components: {
      ButtonComponent: () => import('@/components/ButtonComponent'),
      ListMovieComponent: () => import('@/components/ListMovieComponent')
    },
    methods: {
      handleAdd() {
        this.$router.push('/filmes/add')
      },
    },
  }
</script>


