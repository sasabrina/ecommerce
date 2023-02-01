import { Suspense } from "react";
import styles from "./breadcrumb.module.scss";

type Props = {
  categories: string[];
};

const Breadcrumb = ({ categories }: Props) => {
  return (
    <Suspense>
      <ul className={styles.container}>
        {categories.map((category: string, i: number) => (
          <li key={i} className={styles.category}>
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </Suspense>
  );
};

export default Breadcrumb;
