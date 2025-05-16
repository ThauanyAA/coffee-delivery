import { InputBtn, InputNumberContainer } from './styles';
import { Minus, Plus } from 'phosphor-react';

interface InputNumberProps {
  value: number
  increment: () => void
  decrement: () => void
}

export const InputNumber = ({ value, increment, decrement }: InputNumberProps) => {
  return (
    <InputNumberContainer>
      <InputBtn onClick={decrement}>
        <Minus size={14} weight="bold" />
      </InputBtn>
      <span>{value}</span>
      <InputBtn onClick={increment}>
        <Plus size={14} weight="bold" />
      </InputBtn>
    </InputNumberContainer>
  );
};
