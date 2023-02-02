import { useEffect, Suspense, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "@/context";
import styles from "./item.module.scss";
import ImageContainer from "../ImageContainer";
import Details from "./Details";

type Props = {};

const Item = ({}: Props) => {
  const { item, getItem } = useContext(ItemsContext);
  const { id } = useParams();

  useEffect(() => {
    getItem(id);
  }, [id]);

  return (
    <section className={styles.container}>
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
    </section>
  );
};

export default Item;
