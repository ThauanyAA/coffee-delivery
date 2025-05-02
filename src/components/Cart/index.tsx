import { Button } from "../Button";
import { Card } from "../Card";
import { SelectedCoffee } from "../SelectedCoffee";
import { Text, Title } from "../Typography";
import { InfoContainer, ItemsInfo, SelectedItemsContainer } from "./styles";

export function Cart() {
  return (
    <div>
      <Title variant="xs" weight={700}>
        Cafés selecionados
      </Title>
      <Card>
        <p>Lista de cafés selecionados</p>
        <SelectedItemsContainer>
          <SelectedCoffee />
          <SelectedCoffee />  
        </SelectedItemsContainer>

        <InfoContainer>
          <ItemsInfo>
            <Text variant="s" weight={400} color="base-text">
              Total de itens
            </Text>
            <Text variant="m" weight={400} color="base-text">
              R$ 29,70
            </Text>
          </ItemsInfo>

          <ItemsInfo>
            <Text variant="s" weight={400} color="base-text">
              Entrega
            </Text>
            <Text variant="m" weight={400} color="base-text">
              R$ 3,50
            </Text>
          </ItemsInfo>

          <ItemsInfo>
            <Text variant="l" color="base-subtitle" weight={700}>
              Total
            </Text>
            <Text variant="l" color="base-subtitle" weight={700}>
              R$ 33,20
            </Text>
          </ItemsInfo>
        </InfoContainer>

        <Button type="button" variant="primary">
          Confirmar pedido
        </Button>
      </Card>
    </div>
  )
}