import { styled } from 'styled-components';

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;

  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`;

export const AddressHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  & svg {
    color: ${(props) => props.theme['yellow-dark']};
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