import styles from "./page.module.css";
import Login from "../pages/Login";
import Cadastro from "@/pages/Cadastro";
import Portfolio from "@/pages/Portfolio";
import AddProject from "@/components/AddProject";
import ViewPost from "@/components/ViewPost";

export default function Home() {
  return (
    <main>
      {/* <Login/> */}
      {/* <Cadastro/> */}
      {/* <Portfolio/> */}
      {/* <AddProject/> */}
      <ViewPost/>
    </main>
  );
}
