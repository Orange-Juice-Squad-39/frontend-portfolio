"use client"
import { useEffect, useState } from "react";
import Login from "./login/page";
import Descobrir from "./descobrir/page";
// import styles from "./page.module.css";

export default function Home() {
  // const [logged, setLogged] = useState(false);
  const logged = localStorage.getItem("logged") === "true";

  return (
    <main>
      {logged ? (
        <Descobrir />
      ) : (
        <Login />
      )}

    </main>
  );
}