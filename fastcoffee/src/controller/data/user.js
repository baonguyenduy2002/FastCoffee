import instance from "../config/db";

export const userModel = {
  userId: "fastcoffee",
  password: "123",
};

export const key = "K3y_F4k3_D0nt_63t_1t"

export const loginToken = async (email, password, rememberMe) => {
  let response = await instance.post(`api/employee/login`, { email: email, password: password, rememberMe: rememberMe });
  return response;
};

export const getShopData = async (id) => {
  let response = await instance.get(`api/shop/get/${id}`);
  return response;
};