import { ImageContainer } from "@/components";
import { SearchItem } from "@/models";
import shippingIcon from "@/assets/shipping.png";
import styles from "../itemSearch.module.scss";

type Props = {
  price: SearchItem["price"];
  shipping: SearchItem["free_shipping"];
};

const Price = ({ price, shipping }: Props) => {
  return (
    <div className={styles.priceWrapper}>
      <p className={styles.price}>
        {price.currency} {price.amount} <span>{price.decimal}</span>
      </p>
      {shipping && <ImageContainer src={shippingIcon} width={15} />}
    </div>
  );
};

export default Price;
