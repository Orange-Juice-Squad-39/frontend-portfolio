import styles from "./page.module.css";
import Login from "../pages/Login";
import Cadastro from "@/pages/Cadastro";
import Portfolio from "@/pages/Portfolio";
import AddEditProject from "@/components/modals/AddEditProject";
import ViewPost from "@/components/modals/ViewPost";
import SucessModal from "@/components/modals/SucessModal";
import Descobrir from "@/pages/Descobrir";
import DeleteProject from "@/components/modals/DeleteProject";
import MenuProject from "@/components/modals/MenuProject";
import MenuButton from "@/components/MenuButton";


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
      {/* <DeleteProject/> */}
      {/* <MenuProject/> */}
      {/* <MenuButton/> */}
    </main>
  );
}
