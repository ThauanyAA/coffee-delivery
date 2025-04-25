import type { ComponentProps } from 'react'
import { InputField, InputRoot } from './styles'

interface InputFieldProps extends ComponentProps<'input'> {
  optional?: boolean
}

export function Input(props: InputFieldProps) {
  return (
    <InputRoot>
      <InputField {...props} />
      <span>{props.optional && 'Opcional'}</span>
    </InputRoot>
  )
}
