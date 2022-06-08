<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-container
      class="mt-4 ml-4"
    >
      <AlertComponent
        v-if="alertShow"
        :alert="alert"
      />
      <div class="font-weight-medium mb-4">
        Informações
      </div>
      <v-row>
        <v-col cols="7">
          <v-text-field
            solo
            label="Nome"
            v-model="name"
            :rules="nameRules"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="9">
          <v-textarea
            solo
            name="description"
            label="Descrição"
            v-model="description"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="9"
          class="d-flex align-center justify-space-between"
        >
          <ButtonComponent
            name="cancelar"
            :click="handleReturn"
            btnColor="accent"
          />

          <ButtonComponent
            name="salvar"
            :click="handleSave"
            btnColor="secondary"
            :btnDisabled="!valid"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
  </v-form>
</template>

<script>
  import api from '@/services/api'

  export default {
    components: {
      ButtonComponent: () => import('@/components/ButtonComponent'),
      AlertComponent: () => import('@/components/AlertComponent')
    },
    methods: {
      handleReturn() {
        this.$router.push('/categorias')
      },
      async handleSave() {
        try {
          await api.post('/categories', {
            name: this.name,
            description: this.description,
          })
          this.alertShow = true
          this.alert.type = 'success'
          this.alert.message = 'Cadastrado com sucesso!'
          this.handleReturn()
        } catch (err) {
          this.alert.type = 'error'
          this.alert.message = err
          this.alertShow = true
        }
      }
    },
    data: () => ({
      valid: false,
      name: '',
      description: '',
      alertShow: false,
      alert: {
        type: '',
        message: ''
      },
      nameRules: [
        v => !!v || 'O nome é obrigatório',
      ],
    }),
  }
</script>