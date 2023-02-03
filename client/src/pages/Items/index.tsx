import { useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { SearchItem } from "@/models";
import { ItemsContext } from "@/context";
import { ItemSearch } from "@/components";
import ItemsLayout from "../ItemsLayout";
import styles from "./items.module.scss";

const Items = (): JSX.Element => {
  const { items, getItems } = useContext(ItemsContext);
  const location = useLocation();

  useEffect(() => {
    const query = location.search.split("=")[1];
    getItems(query);
  }, [location]);

  return (
    <ItemsLayout>
      <ul className={styles.container}>
        {items.map((item: SearchItem) => (
          <li key={item.id} className={styles.item}>
            <Link to={`/item/${item.id}`}>
              <ItemSearch item={item} />
            </Link>
          </li>
        ))}
      </ul>
    </ItemsLayout>
  );
};

export default Items;
