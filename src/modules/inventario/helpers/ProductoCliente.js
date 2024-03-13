import axios from "axios";

export const ingresarProductoFachada = (body) => {
  ingresarProducto(body);
};

export const obtenerTodosProductosFachada = async () => {
  return await obtenerTodosProductos();
};

export const obtenerProductoFachada = async (link) => {
  return await obtenerProducto(link);
};

export const actualizarProductoFachada = (body) => {
  actualizarProducto(body);
};

export const eliminarProductoFachada = (codigoBarras) => {
  return eliminarProducto(codigoBarras);
};

const ingresarProducto = (body) => {
  axios
    .post(`http://localhost:8085/API/v1.0/Inventario/productos`, body)
    .then((r) => r.data);
};

const obtenerTodosProductos = async () => {
  const data = axios
    .get(`http://localhost:8085/API/v1.0/Inventario/productos`)
    .then((r) => r.data);
  return data;
};

const obtenerProducto = async (link) => {
  const data = axios.get(link).then((r) => r.data);
  return data;
};

const actualizarProducto = (body) => { axios
    .put(
      `http://localhost:8085/API/v1.0/Inventario/productos/${body.codigoBarras}`,
      body
    )
    .then((r) => r.data);
};

const eliminarProducto = (codigoBarras) => {
  const data = axios
    .delete(
      `http://localhost:8085/API/v1.0/Inventario/productos/${codigoBarras}`
    )
    .then((r) => r.data);
  return data;
};
