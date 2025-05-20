import { useContext } from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { SelectedCoffee } from "../SelectedCoffee";
import { Text, Title } from "../Typography";
import { InfoContainer, ItemsInfo, SelectedItemsContainer } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { formatPriceToBRL } from "../../helpers/utils";

export function Cart() {
  const { items, total, deliveryTax } = useContext(CartContext)
  return (
    <div>
      <Title variant="xs" weight={700}>
        Cafés selecionados
      </Title>
      <Card>
        <p>Lista de cafés selecionados</p>
        <SelectedItemsContainer>
          {items.map(item => (
            <SelectedCoffee item={item} />
          ))} 
        </SelectedItemsContainer>

        <InfoContainer>
          <ItemsInfo>
            <Text variant="s" weight={400} color="base-text">
              Total de itens
            </Text>
            <Text variant="m" weight={400} color="base-text">
              R$ {formatPriceToBRL(total)}
            </Text>
          </ItemsInfo>

          <ItemsInfo>
            <Text variant="s" weight={400} color="base-text">
              Entrega
            </Text>
            <Text variant="m" weight={400} color="base-text">
              R$ {formatPriceToBRL(deliveryTax)}
            </Text>
          </ItemsInfo>

          <ItemsInfo>
            <Text variant="l" color="base-subtitle" weight={700}>
              Total
            </Text>
            <Text variant="l" color="base-subtitle" weight={700}>
              R$ {formatPriceToBRL(total + deliveryTax)}
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