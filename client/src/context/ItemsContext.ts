import { Item, SearchItem } from "@/models";
import { createContext } from "react";

type ItemsContextPops = {
  loading: boolean;
  searchValue: string;
  items: SearchItem[];
  item: Item;
  categories: string[];
  handleSearch: (value: string) => void;
  getItems: (query: string) => void;
  getItem: (id: string | undefined) => void;
};

export const ItemsContext = createContext<ItemsContextPops>(
  {} as ItemsContextPops
);
