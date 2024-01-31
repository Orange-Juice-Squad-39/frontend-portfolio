"use client"
import { useState } from "react";
import Login from "./login/page";
import Descobrir from "./descobrir/page";
// import styles from "./page.module.css";

import MenuMobile from "@/components/menu_mobile";

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

      <MenuMobile/>
    </main>
  );
}