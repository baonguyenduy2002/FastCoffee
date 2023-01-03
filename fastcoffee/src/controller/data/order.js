import instance from "../config/db";

export const getOrders = async (path) => {
  let response = await instance.get(path);
  return response;
};
