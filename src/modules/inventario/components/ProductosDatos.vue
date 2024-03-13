<template>
  <div class="todos">
    <button @click="consultar">Consultar</button>
    <table v-if="productos">
      <thead>
        <tr>
          <th scope="col">Código de barras</th>
          <th scope="col">Nombre</th>
          <th scope="col">Accion</th>
          <th scope="col">Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in productos" :key="producto.id">
          <td>{{ producto.codigoBarras }}</td>
          <td>{{ producto.nombre }}</td>
          <td>
            <button @click="ver(producto.links[0].href)">Actualizar</button>
          </td>
          <td>
            <button @click="eliminar(producto.codigoBarras)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <strong v-if="mensaje">Se eliminó exitosamente el producto</strong>
  </div>
</template>

<script>
import {
  obtenerTodosProductosFachada,
  obtenerProductoFachada,
  eliminarProductoFachada,
} from "@/modules/inventario/helpers/ProductoCliente";
export default {
  data() {
    return { productos: null, mensaje: false };
  },
  props: {
    refresh: {
      type: Boolean,
    },
  },
  mounted() {
    if (this.refresh) {
      this.consultar();
    }
  },
  methods: {
    async consultar() {
      this.productos = await obtenerTodosProductosFachada();
    },
    async ver(link) {
      this.$emit("producto", await obtenerProductoFachada(link));
    },

    async eliminar(codigoBarras) {
      try {
        eliminarProductoFachada(codigoBarras);
        setTimeout(async () => {
          this.productos = null;
          this.mensaje = true;
        }, 100);
        await this.consultar();
        setTimeout(() => {
          this.mensaje = false;
        }, 3000);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
table {
  color: #2e60bf;
}
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid #333;
}
tbody tr:nth-child(odd) {
  background-color: #d7f5ff;
}

tbody tr:nth-child(even) {
  background-color: #d7f5ff;
}

thead tr {
  background-color: #d3d3d3;
}

button {
  padding: 5px 20px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  background-color: #8faadc;
  margin: 10px;
  color: white;
}
</style>
