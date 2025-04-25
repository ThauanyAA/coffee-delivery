import { CoffeeCard } from "../CoffeeCard";
import { Coffee } from "../../@types/definitions";
import { CoffeesListContainer } from "./styles";

export function CoffeesList({ coffees }: { coffees: Coffee[] }) {
  return (
    <CoffeesListContainer>
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </CoffeesListContainer>
  );
}