import instance from "../config/db";

export const getDrinks = async () => {
  let response = await instance.get("api/item/get");
  return response;
};

export const updateDrinks = async (id, data) => {
  let response = await instance.post(`api/item/update/${id}`, {
    "name": data.name,
    "description": data.description,
    "price": data.price
  });
  return response;
};

// export const drinkItems = [{
//     'Item_ID': 1,
//     'Name': 'Ristretto Bianco',
//     'Description': 'An espresso like',
//     'Image': 'drink_1.jpg',
//     'Price': 45000,
//     'Avalability': 20,
//     'Shop_ID': 9
// }];
