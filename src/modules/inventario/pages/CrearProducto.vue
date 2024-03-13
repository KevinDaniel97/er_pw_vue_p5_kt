<template>
  <div class="cp">
    <ProductoDatos :producto="{}"/>
  </div>
</template>

<script>
import ProductoDatos from '../components/ProductoDatos.vue';
export default {
  components: {
    ProductoDatos,
  },
};
</script>

<style scoped>
.cp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
</style>