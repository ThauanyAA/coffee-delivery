import { styled } from 'styled-components'
interface ButtonProps {
  variant?: 'primary' | 'secondary'
}
export const ButtonStyled = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: ${({ variant, theme}) => theme[variant === 'primary' ? 'yellow' : 'base-button']};
  color: ${({ theme, variant }) => theme[variant === 'primary' ? 'white' : 'base-text']};
  border: none;
  border-radius: 6px;
  padding: ${({ variant }) => (variant === 'primary' ? '12px' : '8px')} 8px;
  cursor: pointer;
  font-size: ${({ variant }) => (variant === 'primary' ? '0.875rem' : '0.75rem')};
  font-weight: ${({ variant }) => (variant === 'primary' ? 'bold' : 'normal')};
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 0.2s;
  
  &:hover {
    background: ${({ theme, variant }) => theme[variant === 'primary' ? 'yellow-dark' : 'base-hover']};
  }

  & svg {
    color: ${({ theme, variant }) => theme[variant === 'primary' ? 'white' : 'purple']};
  }
`