import { Suspense, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { SearchItem } from "@/models";
import { ItemsContext } from "@/context";

type Props = {};

const Items = ({}: Props) => {
  const { items, getItems } = useContext(ItemsContext);
  const location = useLocation();

  useEffect(() => {
    const query = location.search.split("=")[1];
    getItems(query);
  }, [location]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ul>
        {items.map((item: SearchItem) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </Suspense>
  );
};

export default Items;
