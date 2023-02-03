import { ChangeEventHandler, FormEventHandler } from "react";
import { ImageContainer } from "@/components";
import searchIcon from "@/assets/search.png";
import styles from "./searchBar.module.scss";

type Props = {
  value: string;
  onchange: ChangeEventHandler;
  onsubmit: FormEventHandler;
};

const SearchBar = ({ value, onchange, onsubmit }: Props): JSX.Element => {
  return (
    <form action="" onSubmit={onsubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        value={value}
        onChange={onchange}
      />

      <div className={styles.iconWrapper}>
        <ImageContainer src={searchIcon} width={16} height={16} />
      </div>
    </form>
  );
};

export default SearchBar;
