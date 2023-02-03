import { Header } from "@/components";
import { Outlet } from "react-router-dom";
import styles from "@/App.module.scss";

const Home = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Header />

      <Outlet />
    </main>
  );
};

export default Home;
