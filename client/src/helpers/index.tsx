import { Item, SearchItem } from "@/models";

export const getDecimals = (price: Item["price"] | SearchItem["price"]) => {
  return price.decimals === 0 ? "00" : price.decimals;
};
