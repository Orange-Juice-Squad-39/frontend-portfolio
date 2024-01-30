"use client"
import { useState } from "react";
import Login from "./login/page";
import Descobrir from "./descobrir/page";
// import styles from "./page.module.css";

import CardProject from "@/components/card_project";

export default function Home() {
  const [logged, setLogged] = useState(false);

  return (
    <main>
      {/* <CardProject/> */}

      {logged &&(
        <Descobrir/>
      )}

      {!logged &&(
        <Login/>
      )}
    </main>
  );
}
