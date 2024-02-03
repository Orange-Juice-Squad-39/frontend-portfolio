"use client"
import { useState } from "react";
import Login from "./login/page";
import Descobrir from "./descobrir/page";
import ViewPost from "@/components/modals/view_post";
// import styles from "./page.module.css";

export default function Home() {
  const [logged, setLogged] = useState(false);

  return (
    <main>
      {logged &&(
        <Descobrir/>
      )}

      {!logged &&(
        <Login/>
      )}
    </main>
  );
}