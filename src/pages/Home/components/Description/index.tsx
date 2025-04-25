import { Content, DescriptionContainer, Feature, FeatureIconContainer, GridFeatures, ImageContainer } from "./styles";
import CoffeeHomeImg from "../../../../assets/coffee_home.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Description() {
  return (
    <DescriptionContainer>
      <Content>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
        <GridFeatures>
          <Feature>
            <FeatureIconContainer background="yellow-dark">
              <ShoppingCart size={16} weight="fill" />
            </FeatureIconContainer>
            <p>Compra simples e segura</p>
          </Feature>
          
          <Feature>
            <FeatureIconContainer background="base-text">
              <Package size={16} weight="fill" />
            </FeatureIconContainer>
            <p>Embalagem mantém o café intacto</p>
          </Feature>

          <Feature>
            <FeatureIconContainer background="yellow">
              <Timer size={16} weight="fill" />
            </FeatureIconContainer>
            <p>Entrega rápida e rastreada</p>
          </Feature>

          <Feature>
            <FeatureIconContainer background="purple">
              <Coffee size={16} weight="fill" />
            </FeatureIconContainer>
            <p>O café chega fresquinho até você</p>
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