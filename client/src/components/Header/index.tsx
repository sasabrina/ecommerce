import { ChangeEvent, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ItemsContext } from "@/context";
import { ImageContainer, SearchBar } from "@/components";
import logo from "@/assets/logo.png";
import styles from "./header.module.scss";

const Header = (): JSX.Element => {
  const { searchValue, handleSearch } = useContext(ItemsContext);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue.length > 2) {
      navigate({
        pathname: "/items",
        search: `?search=${searchValue}`,
      });
    }

    //TODO: show error message when searchValue is empty
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link to="/">
          <ImageContainer src={logo} width={50} height={35} />
        </Link>

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
