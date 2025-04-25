import { AddToCartButton, BuyContainer, Card, Image, Price, Tag, TagsContainer } from "./styles";
import Expresso from "../../assets/coffees/Expresso.png";
import { ShoppingCartSimple } from "phosphor-react";
import { Coffee } from "../../@types/definitions";
import { formatPriceToBRL } from "../../helpers/utils";
import { InputNumber } from "../InputNumber";

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
      
      <h4>{coffee.name}</h4>
      <p>{coffee.description}</p>

      <BuyContainer>
        <div>
          <span>R$<Price>{formatPriceToBRL(coffee.price)}</Price></span>
        </div>
        <InputNumber />
        <AddToCartButton>
          <ShoppingCartSimple size={20} weight="fill" />
        </AddToCartButton>
      </BuyContainer>
    </Card>
  )
}