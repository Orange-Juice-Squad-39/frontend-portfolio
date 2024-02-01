"use client"
import { useState } from "react";
import Login from "./login/page";
import Descobrir from "./descobrir/page";
// import styles from "./page.module.css";

import TagsInput from "@/components/tags_input";
import AddOrEditProject from "@/components/modals/add_or_edit_project";
import SenhaEnvio from "./senha_envio/page";

export default function Home() {
  const [logged, setLogged] = useState(false);

  return (
    <main>
      {/* {logged &&(
        <Descobrir/>
      )}

      {!logged &&(
        <Login/>
      )} */}

      {/* <TagsInput label="" name="tags" placeholder="Tags"/> */}
      {/* <AddOrEditProject adding={true}/> */}

      <SenhaEnvio/>
    </main>
  );
}