export type SearchItem = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export type SearchItemsResponse = {
  author: {
    name: string;
    lastname: string;
  };
  categories: Array<string>;
  items: SearchItem[];
};

export type Item = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
};

export type ItemResponse = {
  author: {
    name: string;
    lastname: string;
  };
  item: Item;
};
