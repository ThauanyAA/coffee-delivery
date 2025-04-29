import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { Input } from "../Input";
import { Text, Title } from "../Typography";
import { AddressFields, CardHeader } from "./styles";
import { Card } from "../Card";
import PaymentOptions from "../PaymentOptions";

export function CheckoutForm() {
  return (
    <div>
      <Title variant="xs" color="base-subtitle">Complete seu pedido</Title>
      <Card>
        <CardHeader>
          <MapPinLine size={22} />
          <div>
            <Text variant="m" color="base-subtitle">Endereço de Entrega</Text>
            <Text variant="s">
              Informe o endereço onde deseja receber seu pedido
            </Text>
          </div>
        </CardHeader>
        
        <AddressFields>
          <div style={{ gridArea: 'zipCode' }}>
            <Input id="cep" placeholder="CEP" />
          </div>
          <div style={{ gridArea: 'address' }}>
            <Input type="text" placeholder="Rua" />
          </div>
          <div style={{ gridArea: 'number' }}>
            <Input type="text" placeholder="Número" />
          </div>
          <div style={{ gridArea: 'complement' }}>
            <Input type="text" placeholder="Complemento" optional />
          </div>
          <div style={{ gridArea: 'district' }}>
            <Input type="text" placeholder="Bairro" />
          </div>
          <div style={{ gridArea: 'city' }}>
            <Input type="text" placeholder="Cidade" />
          </div>
          <div style={{ gridArea: 'state' }}>
            <Input type="text" placeholder="UF" />
          </div>
        </AddressFields>
      </Card>

      <Card>
        <CardHeader>
          <CurrencyDollar size={22} color="purple" />
          <div>
            <Text variant="m" color="base-subtitle">
              Pagamento
            </Text>
            <Text variant="s">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Text>
          </div>
        </CardHeader>
        <PaymentOptions />
      </Card>
    </div>
  );
}