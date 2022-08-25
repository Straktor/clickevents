import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        cRed: "#ec200c",
        cYellow: "#faf817",
        cLightOrange: "#fbbf5d",
        cPink: "#dc2261",
        cGreen: "#2c773f",
        cBlue: "#628ecf",
        cOrange: "#f8a73f",
      },
    },
  },
});
