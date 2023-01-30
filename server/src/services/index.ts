const fetch = require("node-fetch");
import { getCategories, getPriceAndDecimals } from "../helpers";
import { ItemsResponse } from "../models";

const fetchData = async (url: string) => {
  const request = await fetch(`https://api.mercadolibre.com/${url}`);
  const response = await request.json();
  return response;
};

export const getItems = async (search: any): Promise<any> => {
  try {
    const response: ItemsResponse = await fetchData(
      `/sites/MLA/search?q=${search}`
    );

    return {
      author: {
        name: "Sabrina",
        lastname: "Alvarez",
      },
      categories: getCategories(response.filters),
      items: response.results.map((item) => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id === "ARS" ? "$" : item.currency_id,
          amount: item.price,
          decimal: item.price,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      })),
    };
  } catch (err) {
    console.log(err);
  }
};

export const getItem = async (id: any): Promise<any> => {
  try {
    const [item, description] = await Promise.all([
      fetchData(`items/${id}`),
      fetchData(`items/${id}/description`),
    ]);

    return {
      author: {
        name: "Sabrina",
        lastname: "Alvarez",
      },
      item: {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id === "ARS" ? "$" : item.currency_id,
          amount: getPriceAndDecimals(item.price, "price"),
          decimals: getPriceAndDecimals(item.price, "decimals"),
        },
        picture: item.pictures[0].secure_url,
        condition: item.condition,
        free_shippint: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description: description.plain_text,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
