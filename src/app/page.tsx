"use client"
import { useState } from "react";
import Login from "./login/page";
import Descobrir from "./descobrir/page";


import Portfolio from "./portfolio/page";
import Cadastro from "./cadastro/page";
// import styles from "./page.module.css";

export default function Home() {
  // const [logged, setLogged] = useState(false);

  return (
    <main>

      {/* {logged &&(
        <Descobrir/>
      )}

      {!logged &&(
        <Login/>
      )} */}

      {/* <Login/> */}
      <Cadastro/>
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
