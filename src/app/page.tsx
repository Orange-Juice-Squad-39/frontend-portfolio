"use client"
import { useState } from "react";
import Login from "./login/page";
import Descobrir from "./descobrir/page";
// import styles from "./page.module.css";

import AddOrEditProject from "@/components/modals/add_or_edit_project";



export default function Home() {
  const [logged, setLogged] = useState(false);

  return (
    <main>


      {/* <AddOrEditProject adding={true}/> */}

      {logged &&(
        <Descobrir/>
      )}

      {!logged &&(
        <Login/>
      )}
    </main>
  );
}