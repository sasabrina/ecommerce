import { SearchItem } from "@/models";
import { ImageContainer } from "@/components";
import styles from "./itemSearch.module.scss";
import Price from "./Price";

type Props = {
  item: SearchItem;
};

const ItemSearch = ({ item }: Props): JSX.Element => {
  return (
    <div className={styles.product}>
      <ImageContainer src={item.picture} width={180} />

      <div className={styles.details}>
        <Price price={item.price} shipping={item.free_shipping} />
        <p className={styles.title}>{item.title}</p>
      </div>
    </div>
  );
};

export default ItemSearch;
