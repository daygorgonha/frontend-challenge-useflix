<template>
  <v-btn
    :color="btnColor"
    :active-class="btnColorActive"
    v-on:click="click()"
    :disabled="btnDisabled"
  >
    {{ name }}
  </v-btn>
</template>

<script>
  export default {
    name: 'ButtonComponent',
    props: {
      name: String,
      btnColor: String,
      btnColorActive: String,
      btnDisabled: Boolean,
      click: Function
    }
  }
</script>