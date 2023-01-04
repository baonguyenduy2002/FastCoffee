import instance from "../config/db";

export const getOrders = async (path) => {
  let response = await instance.get(path).catch((error) => {
    console.log(error);
  });
  return response;
};

export const getOrders_Items = async (path) => {
  let response = await instance.get(path).catch((error) => {
    console.log(error);
  });
  return response;
};

export const getItems = async (path) => {
  let response = await instance.get(path);
  return response;
};

export const makeAccepted = async (path) => {
  let response = await instance.post(path);
  return response;
};

export const makeDenied = async (path) => {
  let response = await instance.post(path);
  return response;
};

export const makeNext = async (path) => {
  let response = await instance.post(path);
  return response;
};
