<template>
  <v-row>
    <v-col cols="9">
      <v-alert
        :type="alert.type"
      >
        {{ alert.message }}
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'AlertComponent',
    props: {
      alert: Object
    }
  }
</script>