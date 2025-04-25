import { useState } from 'react';
import { InputBtn, InputNumberContainer } from './styles';
import { Minus, Plus } from 'phosphor-react';

export const InputNumber = ({ min = 1, max = 99 }) => {
  const [value, setValue] = useState(1);

  const increment = () => {
    if (value < max) setValue(value + 1);
  };

  const decrement = () => {
    if (value > min) setValue(value - 1);
  };

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
