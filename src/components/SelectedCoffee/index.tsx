import { CoffeeActions, CoffeeImage, CoffeeInfo, CoffeInfoContainer, SelectedCoffeeCard } from "./styles";
import { Text } from "../Typography";
import { InputNumber } from "../InputNumber";
import { Trash } from "phosphor-react";
import { Button } from "../Button";
import CoffeeImg  from "../../assets/coffees/Expresso.png";

export function SelectedCoffee() {
  return (
    <SelectedCoffeeCard>
      <CoffeInfoContainer>
        <CoffeeImage src={CoffeeImg} alt="Coffee" />
        <CoffeeInfo>
          <Text variant="m" weight={400} color="base-subtitle">
            Expresso Tradicional
          </Text>
          <CoffeeActions>
            <InputNumber />
            <Button variant="secondary" type="button">
              <Trash size={16} />
              Remover
            </Button>
          </CoffeeActions>
        </CoffeeInfo>
      </CoffeInfoContainer>
      
      <Text variant="m" weight={700} color="base-text">
        R$ 9,90
      </Text>
    </SelectedCoffeeCard>
  )
}