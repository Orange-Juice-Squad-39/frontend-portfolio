import styles from "./page.module.css";
import Login from "../pages/Login";

export default function Home() {
  return (
    <main className={styles.main}>
      <Login/>
    </main>
  );
}
