import styles from "./breadcrumb.module.scss";

type Props = {
  categories: string[];
};

const Breadcrumb = ({ categories }: Props): JSX.Element => {
  return (
    <ul className={styles.container}>
      {categories.map((category: string, i: number) => (
        <li key={i} className={styles.category}>
          <span>{category}</span>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;
