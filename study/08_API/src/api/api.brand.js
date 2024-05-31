import { client } from "./api";

// export async function getBrands() {
//   const endpoint = `${BASE_URL}/brands`;
//   const response = await fetch(endpoint);
//   const data = await response.json();

//   return data;
// }

// export async function getBrand(brandId) {
//   const endpoint = `${BASE_URL}/brands/${brandId}`;
//   const response = await fetch(endpoint);
//   const data = await response.json();

//   return data;
// }

// 장점1 나만의 인스턴스니깐 커스텀 할 수 있다.
// 장점2 여러 개의 나만의 인스턴스를 만들 수 있다.
// const myAxiosInstance = axios.create({baseURL: "https://www.naver.com"});
// const myAxiosInstance2 = axios.create({baseURL: "https://www.daum.net"});

export async function getBrands() {
  const endpoint = `/brands`;
  const response = await client.get(endpoint);
  const data = response.data;

  return data;
}

export async function getBrand(brandId) {
  const endpoint = `/brands/${brandId}`;
  const response = await client.get(endpoint);
  const data = response.data;

  return data;
}
