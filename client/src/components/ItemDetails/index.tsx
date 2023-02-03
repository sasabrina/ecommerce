import { ImageContainer } from "@/components";
import Details from "./Details";
import styles from "./itemDetails.module.scss";
import { Item } from "@/models";

type Props = {
  item: Item;
};

const ItemDetails = ({ item }: Props) => {
  return (
    <>
      <div className={styles.detailsWrapper}>
        <div className={styles.imgWrapper}>
          <ImageContainer src={item.picture} />
        </div>

        <Details item={item} />
      </div>

      <div className={styles.descriptionWrapper}>
        <h2 className={styles.subtitle}>Descripción del producto</h2>
        <p className={styles.description}>{item.description}</p>
      </div>
    </>
  );
};

export default ItemDetails;
