
import { ReactNode } from "react";
import { Card as CardStyled } from "./styles";

export function Card({ children }: { children: ReactNode } ) {
  return (
    <CardStyled>
      {children}
    </CardStyled>
  )
}