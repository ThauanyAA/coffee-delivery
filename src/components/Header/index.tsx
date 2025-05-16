import { useContext } from "react"
import { ActionsContainer, Cart, CartContainer, Badge, HeaderContainer, Location } from "./styles"
import HeaderLogo from "../../assets/Logo.png"
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"
import { Text } from '../Typography'
import { CartContext } from "../../contexts/CartContext"

export function Header() {
  const { items } = useContext(CartContext)
  const hasItems = items.length > 0;
  
  return (
    <HeaderContainer>
      <img src={HeaderLogo} />
      <ActionsContainer>
        <nav>
          <NavLink to="/checkout">
            <Location>
              <MapPin weight="fill" size={22} />
              Porto Alegre, RS
            </Location>
          </NavLink>
          <NavLink to="/checkout">
            <CartContainer>
              {hasItems && (
                <Badge>
                  <Text variant="s" weight={500} color="white">
                    {items.length}
                  </Text>
                </Badge>
              )}
              <Cart>
                <ShoppingCart weight="fill" size={22} />
              </Cart>
            </CartContainer>
          </NavLink>
        </nav>
      </ActionsContainer>
    </HeaderContainer>
  )
}