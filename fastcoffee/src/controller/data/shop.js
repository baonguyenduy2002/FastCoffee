import instance from "../config/db";

export const getShopID = async () => {
    // let response = await instance.get("api/item/get");
    // return response;
    return {"id": 1}
  };

export const getShopName = async () => {
  let response = await instance.get("api/item/get");
  
  return response;
};

export const getShopAddress = async (id, data) => {
  let response = await instance.get("api/item/get");
  return response;
};
