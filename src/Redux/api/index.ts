import { create } from "apisauce";

const API = create({ baseURL: "https://dummyjson.com/" });

const getAllProductsApi = () => {
  return API.get("/products");
};

const getSelectedProductApi = (productId: number) => {
  return API.get(`/products/${productId}`);
};

export { getAllProductsApi, getSelectedProductApi };
