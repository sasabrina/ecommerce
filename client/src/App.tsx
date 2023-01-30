import { ChangeEvent, Suspense, useEffect, useState } from "react";
import { getItems } from "./api/apiItems";
import "./App.css";
import { SearchItem } from "./models";

function App() {
  const [items, setItems] = useState<SearchItem[]>([] as SearchItem[]);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    getItems(searchValue).then((res) => {
      setItems(res.items.slice(0, 4));
    });
  };

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          value={searchValue}
          onChange={handleChange}
        />
      </form>

      <Suspense fallback={<p>Loading...</p>}>
        <ul>
          {items.map((item: SearchItem) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}

export default App;
