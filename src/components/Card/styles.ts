import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;

  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`;