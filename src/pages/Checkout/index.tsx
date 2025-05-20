import { useContext } from "react";
import { Cart } from "../../components/Cart";
import { CheckoutForm } from "../../components/CheckoutForm";
import { CheckoutContainer, EmptyCart } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { Title, Text } from "../../components/Typography";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export function Checkout() {
  const { items } = useContext(CartContext)
  const hasItemsInCart = items.length > 0

  if (!hasItemsInCart) return (
    <EmptyCart>
      <Title variant="m" align="center">
        Seu carrinho está vazio!
      </Title>
      <Text variant="m" align="center">
        Adicione algum item ao carrinho para continuar!
      </Text>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="primary">
          Ver Cafés disponíveis
        </Button>
      </Link>
    </EmptyCart>
  )
  
  return (
    <CheckoutContainer>
      <CheckoutForm />
      <Cart />
    </CheckoutContainer>
  )
}