<template>
  <div>
    <v-container
      class="d-flex justify-end"
    >
      <ButtonComponent
        name="Add categoria"
        :click="handleAdd"
        btnColor="secondary"
        btnColorActive="secondary"
      />
    </v-container>

    <ListCategoryComponent />

  </div>
</template>

<script>
  export default {
    components: {
      ButtonComponent: () => import('@/components/ButtonComponent'),
      ListCategoryComponent: () => import('@/components/ListCategoryComponent')
    },
    methods: {
      handleAdd() {
        this.$router.push('/categorias/add')
      },
    },
  }
</script>

