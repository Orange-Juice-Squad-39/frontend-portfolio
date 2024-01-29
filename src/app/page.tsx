import styles from "./page.module.css";
import Login from "./login/page";
import Portfolio from "./portfolio/page";
import Descobrir from "./descobrir/page";

import AddOrEditProject from "@/components/modals/add_or_edit_project";
import DeleteProject from "@/components/modals/delete_project";
import ProjectMenu from "@/components/modals/project_menu";
import SucessModal from "@/components/modals/sucess";
import ViewPost from "@/components/modals/view_post";

export default function Home() {


  return (
    <main>
      <Login/>
      {/* <Portfolio/> */}
      {/* <Descobrir/> */}

      {/* <AddOrEditProject adding={true}/> */}
      {/* <DeleteProject/> */}
      {/* <ProjectMenu/> */}
      {/* <SucessModal text="Projeto adicionado"/> */}
      {/* <ViewPost/> */}
    </main>
  );
}
