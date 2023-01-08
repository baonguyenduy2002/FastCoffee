import axios from "axios";


const instance = axios.create({
  // withCredentials: true,
  // baseURL: "https://fast-coffee-be.vercel.app/",
  baseURL: "http://localhost:3001/",
});

export const key = "K3y_F4k3_D0nt_63t_1t"

export const loginToken = async (email, password, rememberMe) => {
  let response = await instance.post(`api/employee/login`, { email: email, password: password, rememberMe: rememberMe });
  return response;
};

export const getShopData = async (id) => {
  let response = await instance.get(`api/shop/get/${id}`);
  return response;
};