import { useContext, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { ItemsContext } from "@/context";
import { Header, Item, Items, Breadcrumb } from "./components";
import styles from "@/App.module.scss";

function App() {
  const { categories } = useContext(ItemsContext);

  return (
    <main className={styles.main}>
      <Header />

      {categories && <Breadcrumb categories={categories} />}

      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="/items" element={<Items />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </main>
  );
}

export default App;
