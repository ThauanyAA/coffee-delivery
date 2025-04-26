import { AddressForm } from "../../components/AddressForm";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressForm />
      <div>
        Cafés selecionados
      </div>
    </CheckoutContainer>
  )
}