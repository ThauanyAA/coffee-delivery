import { AddToCartButton, BuyContainer, Card, Image, Tag, TagsContainer } from "./styles";
import Expresso from "../../assets/coffees/Expresso.png";
import { ShoppingCartSimple } from "phosphor-react";
import { Coffee } from "../../@types/definitions";
import { formatPriceToBRL } from "../../helpers/utils";
import { InputNumber } from "../InputNumber";
import { Text, Title } from "../Typography";

export function CoffeeCard({ coffee }: { coffee: Coffee } ) {
  return (
    <Card>
      <Image src={Expresso} alt="Coffee" />

      <TagsContainer>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>
            {tag}
          </Tag>
        ))}
      </TagsContainer>
      
      <Title variant="s">{coffee.name}</Title>
      <Text variant="s" align="center" color="base-label">
        {coffee.description}
      </Text>
      <BuyContainer>
        <div>
          <Text variant="xs" weight={400}>
            R$<Title variant="m" color="base-text" inline>{formatPriceToBRL(coffee.price)}</Title>
          </Text>
        </div>
        <InputNumber />
        <AddToCartButton>
          <ShoppingCartSimple size={20} weight="fill" />
        </AddToCartButton>
      </BuyContainer>
    </Card>
  )
}