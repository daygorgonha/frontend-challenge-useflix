import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FFFFFF',
        secondary: '#B62CDD',
        accent: '#757575',
        error: '#b71c1c',
      }
    }
  }
});
