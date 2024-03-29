import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    primary: '#2c3e50',
    secondary: '#1abc9c',
    accent: '#2980b9',
    error: '#e74c3c',
    action: '#23DB2A'
  }
});
