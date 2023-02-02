import { ItemsResponse } from "../models";

export const getCategories = (
  categories: ItemsResponse["filters"]
): string[] => {
  if (!categories.length) return [];
  else
    return categories
      .find((item: any) => item.id === "category")
      .values[0].path_from_root.map((item: any) => item.name);
};

export const getPriceAndDecimals = (price: number, type: string): number => {
  return type === "price"
    ? Number(price.toString().split(".")[0])
    : Number(price.toString().split(".")[1]) || 0;
};
