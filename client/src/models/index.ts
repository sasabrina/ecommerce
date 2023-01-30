export type SearchItem = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimal: number;
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
