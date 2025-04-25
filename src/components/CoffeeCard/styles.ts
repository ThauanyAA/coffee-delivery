import { styled } from "styled-components"

export const Card = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  padding: 1.25rem;
  gap: 1rem;
`

export const Image = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -3rem;
  margin-bottom: 1rem;
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`

export const Tag = styled.span`
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  text-transform: uppercase;
  font-weight: 500;
`

export const BuyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1.4375rem;
  gap: 0.5rem;
  /* & div > span {
    color: ${(props) => props.theme["base-text"]};
    line-height: 130%;
    font-size: 0.875rem;
  } */
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme["purple-dark"]};
    border-radius: 6px;
    padding: 0.5rem;
    color: ${(props) => props.theme.white};
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: ${(props) => props.theme["purple"]};
    }
    & svg {
      color: ${(props) => props.theme.white};
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 0.25rem;
    }
  }
`
export const AddToCartButton = styled.button`
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
  /* padding: 0.5rem; */
  color: ${(props) => props.theme.white};
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${(props) => props.theme["purple"]};
  }
  & svg {
    color: ${(props) => props.theme.white};
    width: 1.25rem;
    height: 1.25rem;
  }`