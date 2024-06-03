class BrandsAPI {
  #client;

  constructor(client) {
    this.#client = client;
  }
  async getBrands() {
    const resopnse = await this.#client.get("./brands");
    const data = resopnse.data;
    const result = data.result;

    return result;
  }
}

export default BrandsAPI;
