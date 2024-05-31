import axios from "axios";

export const BASE_URL = "https://api.ballang.yoojinyoung.com";

export const client = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: "Bearer token" },
});

// 나중에 쓰고 싶을 때 사용 => 함수를 만들어서
export const updateToken = (token) => {
  client.defaults.headers.common.Authorization = token ? "Bearer ${token}" : "";
};
