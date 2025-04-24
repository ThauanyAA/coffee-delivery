import { ActionsContainer, Cart, HeaderContainer, Location } from "./styles"
import HeaderLogo from "../../assets/Logo.png"
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"
export function Header() {
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
            <Cart>
              <ShoppingCart weight="fill" size={22} />
            </Cart>
          </NavLink>
        </nav>
      </ActionsContainer>
    </HeaderContainer>
  )
}