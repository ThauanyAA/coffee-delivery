import { useContext } from 'react'
import { CoffeeActions, CoffeeImage, CoffeeInfo, CoffeInfoContainer, SelectedCoffeeCard } from "./styles";
import { Text } from "../Typography";
import { InputNumber } from "../InputNumber";
import { Trash } from "phosphor-react";
import { Button } from "../Button";
import CoffeeImg  from "../../assets/coffees/Expresso.png";
import { ItemType } from "../../@types/definitions";
import { formatPriceToBRL } from "../../helpers/utils";
import { toast } from 'react-toastify';
import { CartContext } from '../../contexts/CartContext';


interface SelectedCoffeeProps {
  item: ItemType
}

export function SelectedCoffee({ item }: SelectedCoffeeProps) {
  const { updateItemQuantity, removeItem } = useContext(CartContext)
    
  const handleIncrementQty = () => {
    updateItemQuantity(item.id, item.quantity + 1)
  };

  const handleDecrementQty = () => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1)
    }
  };

  const handleRemoveItemFromCart = () => {
    removeItem(item.id)
    toast.warning('O item foi removido do seu carrinho!')
  }

  return (
    <SelectedCoffeeCard>
      <CoffeInfoContainer>
        <CoffeeImage src={CoffeeImg} alt="Coffee" />
        <CoffeeInfo>
          <Text variant="m" weight={400} color="base-subtitle">
            {item.name}
          </Text>
          <CoffeeActions>
            <InputNumber
              value={item.quantity}
              increment={handleIncrementQty}
              decrement={handleDecrementQty}
            />
            <Button variant="secondary" type="button" onClick={handleRemoveItemFromCart}>
              <Trash size={16} />
              Remover
            </Button>
          </CoffeeActions>
        </CoffeeInfo>
      </CoffeInfoContainer>
      
      <Text variant="m" weight={700} color="base-text">
        R$ {formatPriceToBRL(item.price * item.quantity)}
      </Text>
    </SelectedCoffeeCard>
  )
}