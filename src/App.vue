<template>
  <div id="app">
    <h1>Tienda 32 Bits</h1>
    <h3>Lista de Juegos</h3>
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in $store.state.juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td>
            <button @click="incrementarStock(juego)">+</button>
            <button @click="disminuirStock(juego)">-</button>
          </td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      juegos: state => state.juegos
    })
  },
  mounted() {
    console.log(this.juegos);
  },
  methods: {
    ...mapActions(['incrementarStock', 'disminuirStock'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

table {
  width: 100%;
}

table,
th,
td {
  border: 1px solid black;
  border-style: groove;
}

th,
td {
  padding: .5rem;
  text-align: center;
}
</style>
