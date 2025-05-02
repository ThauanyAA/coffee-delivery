import { styled } from 'styled-components';

export const SelectedCoffeeCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  padding: 1rem 0.5rem 1.5rem 0.5rem;
  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
  margin-top: 0.75rem;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
`
export const CoffeInfoContainer= styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
`

export const CoffeeImage = styled.img`
  width: 4rem;
  height: 4rem;
`

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const CoffeeActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`