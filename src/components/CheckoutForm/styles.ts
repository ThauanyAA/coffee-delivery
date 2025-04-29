import { styled } from 'styled-components';

interface CardHeaderProps {
  color?: 'purple' | 'yellow-dark';
}

export const CardHeader = styled.div<CardHeaderProps>`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  & svg {
    color: ${({ theme, color }) => theme[color || 'yellow-dark']};
  }
`

export const AddressFields = styled.div`
  display: grid;
  grid-template-areas: 
    "zipCode . ."
    "address address address"
    "number complement complement"
    "district city state";
  gap: 1rem 0.75rem;
  grid-template-columns: 12rem 17rem 4rem;
`;