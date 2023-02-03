import { useContext } from "react";
import { ItemsContext } from "@/context";
import { Breadcrumb } from "@/components";
import styles from "./itemsLayout.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const ItemsLayout = ({ children }: Props): JSX.Element => {
  const { loading, categories } = useContext(ItemsContext);

  return (
    <>
      {!loading && (
        <div>
          {categories && <Breadcrumb categories={categories} />}

          <section className={styles.container}>{children}</section>
        </div>
      )}
    </>
  );
};

export default ItemsLayout;
