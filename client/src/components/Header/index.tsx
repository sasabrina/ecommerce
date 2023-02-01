import { ChangeEvent, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ItemsContext } from "@/context";
import { ImageContainer, SearchBar } from "@/components";
import logo from "@/assets/logo.png";
import styles from "./header.module.scss";

type Props = {};

const Header = ({}: Props) => {
  const { searchValue, handleSearch } = useContext(ItemsContext);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate({
      pathname: "/items",
      search: `?search=${searchValue}`,
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <ImageContainer src={logo} width={50} height={35} />
        <SearchBar
          value={searchValue}
          onchange={handleChange}
          onsubmit={handleSubmit}
        />
      </div>
    </header>
  );
};

export default Header;
