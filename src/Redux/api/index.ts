import { create } from "apisauce";

const API = create({ baseURL: "https://fakestoreapi.com/" });

const getAllProductsApi = () => {
  return API.get("/products");
};

export { getAllProductsApi };
