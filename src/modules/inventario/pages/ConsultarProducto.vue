<template>
  <div class="conp">
    <ProductosDatos
      @producto="obtener($event)"
      :refresh="refresca"
      v-if="crea"
    />
    <ProductoActualizar
      v-if="producto"
      :producto="producto"
      @refresh="refrescar($event)"
    />
  </div>
</template>

<script>
import ProductoActualizar from "../components/ProductoActualizar.vue";
import ProductosDatos from "../components/ProductosDatos.vue";
export default {
  components: { ProductosDatos, ProductoActualizar },
  data() {
    return {
      producto: null,
      refresca: false,
      crea: true,
    };
  },
  methods: {
    obtener(p) {
      p.fechaCaducidad = p.fechaCaducidad.substring(0, 10);
      this.producto = null;
      setTimeout(() => {
        this.producto = p;
      }, 0);
    },
    refrescar(r) {
      this.crea = false;
      setTimeout(() => {
        this.crea = true;
      }, 100);

      console.log(r);
      this.refresca = r;
    },
  },
};
</script>

<style scoped>
.conp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
</style>
