import { Routes, Route } from "react-router-dom";
import { Home, Item, Items } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/items" element={<Items />} />
          <Route path="/item/:id" element={<Item />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
