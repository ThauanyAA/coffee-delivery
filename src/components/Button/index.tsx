import { ComponentProps } from 'react'
import { ButtonStyled } from './styles'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
}

export function Button(props: ButtonProps) {
  return (
    <ButtonStyled {...props}>
      {props.children}
    </ButtonStyled>
  )
}