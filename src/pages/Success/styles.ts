import { styled } from 'styled-components'

export interface IconContainerProps {
  bg: 'purple' | 'yellow-dark' | 'yellow'
}

export const SuccessContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  gap: 8rem;
  margin-top: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const InformationBox = styled.div`
  margin-top: 3rem;
  position: relative;
  border-radius: 8px 36px;
  padding: 3rem;
  background: ${({ theme }) => `
    linear-gradient(white, white) padding-box,
    linear-gradient(45deg, ${theme['yellow-dark']}, ${theme['purple']}) border-box
  `};
  border: 1px solid transparent;
  background-clip: padding-box, border-box;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme, bg }) => theme[bg]};
  color: ${({ theme }) => theme.white};
  border-radius: 50%;
`

export const ImgContainer = styled.div`
  & img {
    width: 100%;
  }
`