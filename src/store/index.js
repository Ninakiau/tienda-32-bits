import { createStore } from "vuex";
import juegosData from "../db/juegos.json";
export default createStore({
  state: {
    juegos: juegosData,
  },
  getters: {},
  mutations: {
    SET_STOCK(state, { codigo, stock }) {
      const juego = state.juegos.find((juego) => juego.codigo === codigo);
      if (juego) {
        juego.stock = stock;
      }
    },
  },

  actions: {
    incrementarStock({ commit }, juego) {
      const nuevoStock = parseInt(juego.stock) + 1;
      commit('SET_STOCK', { codigo: juego.codigo, stock: nuevoStock });
    },
    disminuirStock({ commit }, juego) {
      const nuevoStock = parseInt(juego.stock) - 1;
      if (nuevoStock >= 0) {
        commit('SET_STOCK', { codigo: juego.codigo, stock: nuevoStock });
      }
    }
  },
  
  modules: {},
});
