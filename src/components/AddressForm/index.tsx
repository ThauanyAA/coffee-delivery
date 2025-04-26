import { MapPinLine } from "phosphor-react";
import { Input } from "../Input";
import { Text, Title } from "../Typography";
import { AddressFields, AddressFormContainer, AddressHeader } from "./styles";

export function AddressForm() {
  return (
    <div>
      <Title variant="xs" color="base-subtitle">Complete seu pedido</Title>
      <AddressFormContainer>
        <AddressHeader>
          <MapPinLine size={22} />
          <div>
            <Text variant="m" color="base-subtitle">Endereço de Entrega</Text>
            <Text variant="s">
              Informe o endereço onde deseja receber seu pedido
            </Text>
          </div>
        </AddressHeader>
        
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
      </AddressFormContainer>

      <div>
        <h3>Pagamento</h3>
        <div>
          <button type="button">Cartão de Crédito</button>
          <button type="button">Cartão de Débito</button>
          <button type="button">Dinheiro</button>
        </div>
      </div>
    </div>
  );
}