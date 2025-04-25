import { styled } from "styled-components"

export const InputNumberContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["base-input"]};
  border-radius: 6px;
  padding: 4px 8px;
  gap: 0.5rem;
  height: 2.375rem;
`
export const InputBtn = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme["base-input"]} !important;
  border: none;
  font-size: 14px;
  text-align: center;
  border-radius: 4px;
  padding: 0 !important;

  &:hover svg {
    color: ${(props) => props.theme["purple-dark"]} !important;
  }

  & svg {
    color: ${(props) => props.theme["purple"]} !important;
  }
`
