import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Title, Text } from "../../components/Typography";
import { IconContainer, ImgContainer, InformationBox, Item, SuccessContainer } from "./styles";
import SuccessImg from '../../assets/success.png'

export function Success() {
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
              <Text>Entrega em Rua João Daniel Martinelli, 102</Text>
              <Text>Farrapos - Porto Alegre, RS</Text>
            </div>
          </Item>

          <Item>
            <IconContainer bg="yellow">
              <Timer size={16} weight="fill" />
            </IconContainer>
            <div>
              <Text>Previsao de entrega</Text>
              <Text weight={500}>20 min - 30 min</Text>
            </div>
          </Item>

          <Item>
            <IconContainer bg="yellow-dark">
              <CurrencyDollar size={16} weight="fill" />
            </IconContainer>
            <div>
              <Text>Pagamento na entrega</Text>
              <Text weight={500}>Cartao de crédito</Text>
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