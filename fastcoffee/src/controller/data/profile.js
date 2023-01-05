import instance from "../config/db";

export const getShop = async (path) => {
  let response = await instance.get(path).catch((error) => {
    console.log(error);
  });
  return response;
};

export const getShopOwner = async (path) => {
  let response = await instance.get(path).catch((error) => {
    console.log(error);
  });
  return response;
};
