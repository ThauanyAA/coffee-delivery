import { Cart } from "../../components/Cart";
import { CheckoutForm } from "../../components/CheckoutForm";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutForm />
      <Cart />
    </CheckoutContainer>
  )
}