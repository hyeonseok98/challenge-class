import { BASE_URL } from "./api";

export async function getProducts() {
  const endpoint = `${BASE_URL}/products/9587059`;
  const response = await fetch(endpoint);
  const data = response.json();

  return data;
}

export async function getProduct(productId) {
  const endpoint = `${BASE_URL}/products/9587059/${productId}`;
  const response = await fetch(endpoint);
  const data = response.json();

  return data;
}
