<template>
  <v-card class="ml-4 mr-4">
    <v-data-table
      :headers="headers"
      :items="movies"
      sort-by="name"
      class="elevation-1"
      hide-default-footer
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <AlertComponent
            v-if="alertShow"
            :alert="alert"
            class="mt-4"
          />
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h6">Tem certeza de que deseja excluir este item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">Confirmar</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.createdAt="{ item }">
       {{ formatDate(item.createdAt) }}
      </template>
      <template v-slot:item.updatedAt="{ item }">
       {{ formatDate(item.updatedAt) }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  import api from '@/services/api'

  export default {
    name: 'ListDataComponent',
    components: {
      AlertComponent: () => import('@/components/AlertComponent')
    },
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Nome',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { 
          text: 'Classificação Indicativa', 
          sortable: false,
          value: 'classification'
        },
        { 
          text: 'Categoria', 
          sortable: false,
          value: 'category.name'
        },
        { 
          text: 'Descrição', 
          sortable: false,
          value: 'description'
        },
        { 
          text: 'Data de Criação',
          sortable: false,
          value: 'createdAt'
        },
        { 
          text: 'Data de Atualização',
          sortable: false,
          value: 'updatedAt'
        },
        { 
          value: 'actions',
          sortable: false
        },
      ],
      movies: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        description: '',
        classification: null,
        category: {
          name: '',
        },
        createdAt: '',
        updatedAt: '',
      },
      defaultItem: {
        name: '',
        description: '',
        classification: null,
        category: {
          name: '',
        },
        createdAt: '',
        updatedAt: '',
      },
      alertShow: false,
      alert: {
        type: '',
        message: ''
      },
    }),

    watch: {
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      formatDate(value) {
        return moment(value).format('DD/MM/YYYY')
      },
      async initialize () {
        try {
           const { data } = await api.get('/movies')
           this.movies = data
        } catch (err) {
          this.alert.type = 'error'
          this.alert.message = err
          this.alertShow = true
        }
      },

      editItem (item) {
        this.$router.push(`/filmes/${item.id}/edit`)
      },

      deleteItem (item) {
        this.editedIndex = this.movies.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      async deleteItemConfirm () {
        try {
          const { id } = this.editedItem
          await api.delete(`/movies/${id}`)
          this.movies.splice(this.editedIndex, 1)
          this.alertShow = true
          this.alert.type = 'success'
          this.alert.message = 'Deletado com sucesso!'
          this.closeDelete()
        } catch (err) {
          this.alert.type = 'error'
          this.alert.message = err
          this.alertShow = true
          this.closeDelete()
        }
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
    },
  }
</script>