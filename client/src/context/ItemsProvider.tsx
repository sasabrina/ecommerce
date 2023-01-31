import { fetchItem, fetchItems } from "@/api/apiItems";
import { Item, SearchItem } from "@/models";
import { useState } from "react";
import { ItemsContext } from "./ItemsContext";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const ItemsProvider = ({ children }: props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState<SearchItem[]>([] as SearchItem[]);
  const [item, setItem] = useState<Item>({} as Item);
  const [categories, setCategories] = useState<string[]>([] as string[]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const getItems = (query: string) => {
    setLoading(true);
    fetchItems(query).then((res) => {
      setItems(res.items.slice(0, 4));
      setCategories(res.categories);
      setLoading(false);
    });
  };

  const getItem = (id: string | undefined) => {
    setLoading(true);

    fetchItem(id).then((res) => {
      setItem(res.item);
      setLoading(false);
    });
  };

  return (
    <ItemsContext.Provider
      value={{
        loading,
        searchValue,
        items,
        item,
        categories,
        handleSearch,
        getItems,
        getItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
