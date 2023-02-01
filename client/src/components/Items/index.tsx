import { Suspense, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { SearchItem } from "@/models";
import { ItemsContext } from "@/context";
import styles from "./items.module.scss";
import ImageContainer from "../ImageContainer";
import ItemSearch from "../ItemSearch";

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
      <ul className={styles.container}>
        {items.map((item: SearchItem) => (
          <li key={item.id} className={styles.item}>
            <Link to={`/item/${item.id}`}>
              <ItemSearch item={item} />
            </Link>
          </li>
        ))}
      </ul>
    </Suspense>
  );
};

export default Items;
