import { SearchItemsResponse } from "../models";

const BASE_URL = "http://localhost:3000/api/items";

export const getItems = async (
  search: string
): Promise<SearchItemsResponse> => {
  const request = await fetch(`${BASE_URL}?q=${search}`);

  const response: SearchItemsResponse = await request.json();
  return response;
};
