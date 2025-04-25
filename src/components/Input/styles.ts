import styled from 'styled-components'


export const InputRoot = styled.div`
  display: flex;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 4px;
  &:focus-within {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  
  & span {
    font-style: italic;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-label']};
  }
  
`

export const InputField = styled.input`
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  flex: 1;
  border: none;
  
  :focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
    font-family: 'Roboto', sans-serif;
  }
`