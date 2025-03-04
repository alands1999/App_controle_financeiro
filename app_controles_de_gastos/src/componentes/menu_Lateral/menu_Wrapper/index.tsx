"use client"; // Marque este arquivo como cliente

import { usePathname } from "next/navigation";
import MenuLateral from "../page";

export const MenuLateralWrapper = () => {
  const pathname = usePathname();

  if (pathname === "/login") {
    return null; // Não renderiza o MenuLateral na página de login
  }

  return <MenuLateral />;
};