import instance from "../config/db";
import Cookies from "universal-cookie";

export const userModel = {
  userId: "fastcoffee",
  password: "123",
};

const cookies = new Cookies();

export const loginToken = async () => {
    // let response = await instance.get("api/item/get");
    // return response;
    let response = await instance.post(`api/employee/login`, {email: "duybao@gmail.com", password: "db123"}).then((res) => {
      cookies.set('token',res.data.token, { path: '/' });
    });
    return response;
  };

export const getShopData = async (id) => {
  let response = await instance.get(`api/shop/get/${id}`);
  return response;
};