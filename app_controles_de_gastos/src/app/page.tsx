"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

//import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []);

  return null; // Não renderiza nada, só faz o redirecionamento
}
