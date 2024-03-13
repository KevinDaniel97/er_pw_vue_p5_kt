import { createRouter, createWebHistory } from "vue-router";
import CrearProducto from "@/modules/inventario/pages/CrearProducto.vue";

const routes = [
  {
    path: "/",
    component: CrearProducto,
  },
  {
    path: "/consultar",
    component: () => import("@/modules/inventario/pages/ConsultarProducto.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
