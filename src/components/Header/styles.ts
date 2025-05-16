import { styled } from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

export const ActionsContainer = styled.div`
  & nav {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;
  }
`

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  background: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;
  padding: 0.5rem;
  color: ${(props) => props.theme["purple-dark"]};
  font-size: 0.875rem;
  font-weight: 400;

  & svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CartContainer = styled.div`
  position: relative;
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["yellow-light"]};
  border-radius: 6px;
  padding: 0.5rem;
  color: ${(props) => props.theme["yellow-dark"]};
`

export const Badge = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["yellow-dark"]};
  color: white;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  top: -8px;
  right: -8px;
`