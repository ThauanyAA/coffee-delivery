import { useContext, useState } from 'react';
import { AddToCartButton, BuyContainer, Card, Image, Tag, TagsContainer } from "./styles";
import Expresso from "../../assets/coffees/Expresso.png";
import { ShoppingCartSimple } from "phosphor-react";
import { Coffee } from "../../@types/definitions";
import { formatPriceToBRL } from "../../helpers/utils";
import { InputNumber } from "../InputNumber";
import { Text, Title } from "../Typography";
import { CartContext } from '../../contexts/CartContext';
import { toast } from 'react-toastify';

const MIN_QTY_ITEM = 1
export function CoffeeCard({ coffee }: { coffee: Coffee } ) {
  const { addItemToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(MIN_QTY_ITEM);
  
  const incrementQty = () => {
    if (quantity < coffee.quantity) {
      setQuantity(quantity + 1);
    } else {
      toast.warning('Atingiu a quantidade máxima do estoque!');
    }
  };

  const decrementQty = () => {
    if (quantity > MIN_QTY_ITEM) setQuantity(quantity - 1);
  };

  const handleAddItemToCart = (item: Coffee) => {
    const itemToAdd = {
      name: item.name,
      id: item.id,
      price: item.price,
      quantity
    }
    addItemToCart(itemToAdd)
    setQuantity(MIN_QTY_ITEM)
  }
  return (
    <Card>
      <Image src={Expresso} alt="Coffee" />

      <TagsContainer>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>
            {tag}
          </Tag>
        ))}
      </TagsContainer>
      
      <Title variant="s">{coffee.name}</Title>
      <Text variant="s" align="center" color="base-label">
        {coffee.description}
      </Text>
      <BuyContainer>
        <div>
          <Text variant="xs" weight={400}>
            R$<Title variant="m" color="base-text" inline>{formatPriceToBRL(coffee.price)}</Title>
          </Text>
        </div>
        <InputNumber
          value={quantity}
          increment={incrementQty}
          decrement={decrementQty}
        />
        <AddToCartButton onClick={() => handleAddItemToCart(coffee)}>
          <ShoppingCartSimple size={20} weight="fill" />
        </AddToCartButton>
      </BuyContainer>
    </Card>
  )
}