import axios from "axios";
import BrandsAPI from "./brands.api";
import ProductsAPI from "./products.api";

const BASE_URL = "https://api.ballang.yoojinyoung.com/";

class API {
  #baseUrl = BASE_URL;
  #client;

  products;
  brands;

  constructor() {
    this.#client = axios.create({ baseURL: this.#baseUrl });

    this.products = new ProductsAPI(this.#client);
    this.brands = new BrandsAPI(this.#client);
  }
}

const api = new API();

export default api;
