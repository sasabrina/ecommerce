import { Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getItems } from "../../api/apiItems";
import { SearchItem } from "../../models";

type Props = {};

const Items = ({}: Props) => {
  const location = useLocation();
  const [items, setItems] = useState<SearchItem[]>([] as SearchItem[]);

  const getData = async () => {
    const query = location.search.split("=")[1];
    getItems(query).then((res) => {
      setItems(res.items.slice(0, 4));
    });
  };

  useEffect(() => {
    getData();
  }, [location]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ul>
        {items.map((item: SearchItem) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </Suspense>
  );
};

export default Items;
