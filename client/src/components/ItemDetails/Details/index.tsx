import { getDecimals } from "@/helpers";
import { Item } from "@/models";
import { Button } from "@/components";
import styles from "./details.module.scss";

type Props = {
  item: Item;
};

const Details = ({ item }: Props): JSX.Element => {
  const condition = item.condition === "new" ? "Nuevo" : "Usado";

  return (
    <div className={styles.details}>
      <p
        className={styles.condition}
      >{`${condition} - ${item.sold_quantity} vendidos`}</p>

      <p className={styles.title}>{item.title}</p>

      {item.price && (
        <p className={styles.price}>
          {`${item.price?.currency} ${item.price.amount}`}{" "}
          <span className={styles.decimals}>{getDecimals(item.price)}</span>
        </p>
      )}

      <div>
        <Button text="Comprar" type="primary" />
      </div>
    </div>
  );
};

export default Details;
