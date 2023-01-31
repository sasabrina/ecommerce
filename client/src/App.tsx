import { ChangeEvent, useState } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { Item, Items } from "./components";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
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
