<template>
  <div class="datos">
    <div class="cont">
      <div class="campos">
        <label for="codigo">Codigo de Barras</label>
        <input id="codigo" type="text" disabled v-model="codigoBarras" />
      </div>

      <div class="campos">
        <label for="nombre">Nombre</label>
        <input id="nombre" type="text" v-model="nombre" />
      </div>
      <div class="campos">
        <label for="stock">Stock</label>
        <input id="stock" type="text" v-model="stock" />
      </div>

      <div class="campos">
        <label for="fecha">Fecha de Caducidad</label>
        <input
          type="date"
          id="fecha"
          name="trip-start"
          v-model="fechaCaducidad"
        />
      </div>
    </div>
    <button @click="actualizarProducto">Actualizar</button>
    <strong v-if="mensaje">Se actualizó el producto</strong>
  </div>
</template>

<script>
import { actualizarProductoFachada } from "@/modules/inventario/helpers/ProductoCliente";
export default {
  data() {
    return {
      codigoBarras: this.producto.codigoBarras,
      nombre: this.producto.nombre,
      stock: this.producto.stock,
      fechaCaducidad: this.producto.fechaCaducidad,
      mensaje: false,
    };
  },
  props: {
    producto: {
      type: Object,
      required: true,
    },
  },
  methods: {
    actualizarProducto() {
      let auxFecha = this.fechaCaducidad + "T00:00:00"
      const data = {
        codigoBarras: this.codigoBarras,
        nombre: this.nombre,
        stock: this.stock,
        fechaCaducidad: auxFecha,
      };
      try {
        actualizarProductoFachada(data);
        this.mensaje = true;
        this.$emit("refresh", true);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.datos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}
.cont {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 20px;
  width: 300px;
  padding: 30px;
  border-radius: 5px;
}
label,
input {
  width: 100%;
  height: fit-content;
  outline: none;
  margin: 0;
  padding: 10px;
  color: rgb(43, 43, 148);
}

input {
  height: 30px;
  border-radius: 5px;
  color: rgb(98, 158, 198);
}
.campos {
  width: 100%;
}

button {
  padding: 10px;
  border-radius: 5px;
  background: #8faadc;
  color: white;
}
</style>
