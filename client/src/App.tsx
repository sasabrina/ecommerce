import { ChangeEvent, useContext } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { Item, Items } from "./components";
import "./App.css";
import { ItemsContext } from "./context";

function App() {
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
    <div className="App">
      <header>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            value={searchValue}
            onChange={handleChange}
          />
        </form>
      </header>

      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="/items" element={<Items />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
