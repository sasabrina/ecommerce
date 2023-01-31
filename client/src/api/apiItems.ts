import { SearchItemsResponse, ItemResponse } from "@/models";

const BASE_URL = "http://localhost:3000/api/items";

export const fetchItems = async (
  search: string
): Promise<SearchItemsResponse> => {
  const request = await fetch(`${BASE_URL}?q=${search}`);

  const response: SearchItemsResponse = await request.json();
  return response;
};

export const fetchItem = async (
  id: string | undefined
): Promise<ItemResponse> => {
  const request = await fetch(`${BASE_URL}/${id}`);

  const response: ItemResponse = await request.json();

  return response;
};
