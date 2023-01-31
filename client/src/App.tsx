import { Routes, Route, Outlet } from "react-router-dom";
import { Header, Item, Items } from "./components";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="/items" element={<Items />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
