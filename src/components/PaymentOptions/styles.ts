import styled, { css } from 'styled-components';

interface OptionLabelProps {
  isSelected: boolean;
}

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const OptionLabel = styled.label<OptionLabelProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 0.75rem;
  background-color: ${({ isSelected, theme }) => theme[isSelected ? 'purple-light' : 'base-button']};
  color: ${({ isSelected, theme }) => theme[isSelected ? 'purple-dark' : 'base-text']};
  ${({ isSelected }) =>
    isSelected && 
    css`
      border: 1px solid ${({ theme }) => theme['purple-dark']};
    `
  }
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ isSelected, theme }) => theme[isSelected ? 'purple-light' : 'base-hover']};
    color: ${({ isSelected, theme }) => theme[isSelected ? 'purple-dark' : 'base-subtitle']};
  }

  & > svg {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme['purple']};
  }
`;

export const HiddenRadio = styled.input`
  display: none;
`;
