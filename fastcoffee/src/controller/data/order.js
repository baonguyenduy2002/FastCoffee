import instance from "../config/db";

export const getOrders = async (path) => {
  let response = await instance.get(path);
  return response;
};

export const makeAccepted = async (path) => {
  let response = await instance.post(path);
  return response;
};
