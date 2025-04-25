import { CoffeeCard } from "../CoffeeCard";
import { Coffee } from "../../@types/definitions";
import { CoffeesListContainer, Grid } from "./styles";
import { Title } from "../Typography";

export function CoffeesList({ coffees }: { coffees: Coffee[] }) {
  return (
    <CoffeesListContainer>
      <Title variant="l">Nossos cafés</Title>
      <Grid>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </Grid>
    </CoffeesListContainer>
  );
}