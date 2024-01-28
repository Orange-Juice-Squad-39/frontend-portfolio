import styles from "./page.module.css";
import Login from "../pages/Login";
import Cadastro from "@/pages/Cadastro";
import Portfolio from "@/pages/Portfolio";
import AddProject from "@/components/modals/AddProject";
import ViewPost from "@/components/modals/ViewPost";
import SucessModal from "@/components/modals/SucessModal";
import Descobrir from "@/pages/Descobrir";



export default function Home() {


  return (
    <main>
      {/* <Login/> */}
      {/* <Cadastro/> */}

      {/* <Portfolio/> */}
      {/* <AddProject/> */}

      {/* <Portfolio/> */}
      <Descobrir/>

      {/* <AddEditProject adding={true}/> */}

      {/* <ViewPost/> */}
      {/* <SucessModal text="Projeto adicionado com sucesso!"/> */}
    </main>
  );
}
