import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Card } from "../Card";
import { SelectedCoffee } from "../SelectedCoffee";
import { Text, Title } from "../Typography";
import { InfoContainer, ItemsInfo, SelectedItemsContainer } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { formatPriceToBRL } from "../../helpers/utils";
import { toast } from 'react-toastify'
import { mockApiCall } from './mockApi'

export function Cart() {
  const {
    address,
    paymentMethod,
    items,
    total,
    deliveryTax,
    validateOrder,
    clearCart
  } = useContext(CartContext)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate();
  
  const handleClickOnOrder = async () => {
    // Validação dos dados
    if (!validateOrder()) {
      toast.error("Corrija os erros antes de confirmar");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API calling
      const response = await mockApiCall({
        items,
        total: total + deliveryTax,
        address,
        paymentMethod: paymentMethod!
      });

      if (response.success) {
        // Clean Cart after confirm order
        clearCart();
        
        // Redirect to success page
        navigate("/success", { 
          state: { 
            orderData: response.orderData 
          } 
        });
      }
    } catch (error) {
      toast.error("Erro ao processar pedido. Tente novamente.");
      console.log(error)
    } finally {
      setIsSubmitting(false);
    }
  }

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

        <Button
          type="button"
          variant="primary"
          onClick={handleClickOnOrder}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processando...' :'Confirmar pedido'}
        </Button>
      </Card>
    </div>
  )
}