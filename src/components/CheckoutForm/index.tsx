import { ChangeEvent, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { Input } from "../Input";
import { Text, Title } from "../Typography";
import { AddressFields, CardHeader } from "./styles";
import { Card } from "../Card";
import PaymentOptions from "../PaymentOptions";

export function CheckoutForm() {
  const { address, setAddress } = useContext(CartContext)
 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    
    const validFields = [
      'zipCode', 
      'address', 
      'number', 
      'complement', 
      'district', 
      'state', 
      'city'
    ];
  
    if (!validFields.includes(id)) return;
  
    setAddress({
      ...address,
      [id]: value
    });
  };
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
            <Input
              type="text"
              id="zipCode"
              placeholder="CEP"
              value={address.zipCode}
              onChange={handleChange}
            />
          </div>
          <div style={{ gridArea: 'address' }}>
            <Input
              type="text"
              placeholder="Rua"
              id="address"
              value={address.address}
              onChange={handleChange}
            />
          </div>
          <div style={{ gridArea: 'number' }}>
            <Input
              type="text"
              placeholder="Número"
              id="number"
              value={address.number}
              onChange={handleChange}
            />
          </div>
          <div style={{ gridArea: 'complement' }}>
            <Input
              type="text"
              placeholder="Complemento"
              optional
              id="complement"
              value={address.complement}
              onChange={handleChange}
            />
          </div>
          <div style={{ gridArea: 'district' }}>
            <Input
              type="text"
              placeholder="Bairro"
              id="district"
              value={address.district}
              onChange={handleChange}
            />
          </div>
          <div style={{ gridArea: 'city' }}>
            <Input
              type="text"
              placeholder="Cidade"
              id="city"
              value={address.city}
              onChange={handleChange}
            />
          </div>
          <div style={{ gridArea: 'state' }}>
            <Input
              type="text"
              placeholder="UF"
              id="state"
              value={address.state}
              onChange={handleChange}
            />
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