import instance from "../config/db";

export const getDrinks = async (path) => {
  let response = await instance.get(path);
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
