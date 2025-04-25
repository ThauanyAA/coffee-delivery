import { Content, DescriptionContainer, Feature, FeatureIconContainer, GridFeatures, ImageContainer } from "./styles";
import CoffeeHomeImg from "../../../../assets/coffee_home.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Text, Title } from "../../../../components/Typography";

export function Description() {
  return (
    <DescriptionContainer>
      <Content>
        <Title variant="xl">
          Encontre o café perfeito para qualquer hora do dia
        </Title>
        <Text variant="l" weight={400}>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Text>
        <GridFeatures>
          <Feature>
            <FeatureIconContainer background="yellow-dark">
              <ShoppingCart size={16} weight="fill" />
            </FeatureIconContainer>
            <Text variant="m">Compra simples e segura</Text>
          </Feature>
          
          <Feature>
            <FeatureIconContainer background="base-text">
              <Package size={16} weight="fill" />
            </FeatureIconContainer>
            <Text variant="m">Embalagem mantém o café intacto</Text>
          </Feature>

          <Feature>
            <FeatureIconContainer background="yellow">
              <Timer size={16} weight="fill" />
            </FeatureIconContainer>
            <Text variant="m">Entrega rápida e rastreada</Text>
          </Feature>

          <Feature>
            <FeatureIconContainer background="purple">
              <Coffee size={16} weight="fill" />
            </FeatureIconContainer>
            <Text variant="m">O café chega fresquinho até você</Text>
          </Feature>
        </GridFeatures>
      </Content>
      <ImageContainer>
        <img
          src={CoffeeHomeImg}
          alt="Café"
        />
      </ImageContainer>
    </DescriptionContainer>
  )
}