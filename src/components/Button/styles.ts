import { styled } from 'styled-components'

export const ButtonStyled = styled.button`
  background: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 6px;
  padding: 12px 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 0.2s;
  
  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`