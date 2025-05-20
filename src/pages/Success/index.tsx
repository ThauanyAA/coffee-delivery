import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Title, Text } from "../../components/Typography";
import { IconContainer, ImgContainer, InformationBox, Item, SuccessContainer } from "./styles";
import SuccessImg from '../../assets/success.png'
import { OrderData } from "../../@types/definitions";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { formatPaymentMethod } from "../../helpers/utils";

export interface OrderSuccessState {
  orderData: OrderData & {
    orderId: number;
    estimatedDelivery: Date;
  };
}

export function Success() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as OrderSuccessState;

  // Redireciona se alguém tentar acessar a rota diretamente sem state
  useEffect(() => {
    if (!state?.orderData) {
      navigate("/");
    }
  }, [state, navigate]);

  if (!state?.orderData) return null;

  const { orderData } = state;
  const { address, paymentMethod, estimatedDelivery } = orderData
  
  const deliveryEstimateRelativeToNow = formatDistanceToNow(estimatedDelivery, {
    locale: ptBR,
    addSuffix: true,
  });


  return (
    <SuccessContainer>
      <div>
        <Title variant="l" color="yellow-dark">Uhu! Pedido Confirmado</Title>
        <Text variant="l">Agora é só aguardar que logo o café chegará até você</Text>
        <InformationBox>
          <Item>
            <IconContainer bg="purple">
              <MapPin size={16} weight="fill" />
            </IconContainer>
            <div>
              <Text>Entrega em {address.address}, {address.number}</Text>
              <Text>{address.district} - {address.city}, {address.state}</Text>
            </div>
          </Item>

          <Item>
            <IconContainer bg="yellow">
              <Timer size={16} weight="fill" />
            </IconContainer>
            <div>
              <Text>Previsao de entrega</Text>
              <Text weight={500}>{deliveryEstimateRelativeToNow}</Text>
            </div>
          </Item>

          <Item>
            <IconContainer bg="yellow-dark">
              <CurrencyDollar size={16} weight="fill" />
            </IconContainer>
            <div>
              <Text>Pagamento na entrega</Text>
              <Text weight={500}>{formatPaymentMethod(paymentMethod)}</Text>
            </div>
          </Item>
        </InformationBox>
      </div>
      <ImgContainer>
        <img src={SuccessImg} />
      </ImgContainer>
    </SuccessContainer>
  )
}