import instance from "../config/db";

export const getShopID = async () => {
    // let response = await instance.get("api/item/get");
    // return response;
    return {"data": {"id": 4}}
  };

export const getShopData = async (id) => {
  let response = await instance.get(`api/shop/get/${id}`);
  
  return response;
};

// export const getShopAddress = async (id, data) => {
//   let response = await instance.get("api/shop/get");
//   return response;
// };
