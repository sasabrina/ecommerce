export type ItemsResponse = {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: {};
  results: Array<any>;
  sort: {};
  available_sorts: Array<any>;
  filters: Array<any>;
  available_filters: Array<any>;
};

export type Item = {
  id: String;
  title: String;
  price: {
    currency: String;
    amount: Number;
    decimals: Number;
  };
  picture: String;
  condition: String;
  free_shipping: Boolean;
};

export type ItemsApiResponse = {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: Item[];
};
