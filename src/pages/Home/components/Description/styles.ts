import styled, { DefaultTheme } from "styled-components";

type BackgroundType = "yellow" | "yellow-dark" | "base-text" | "purple";

interface FeatureIconContainerProps {
  background: BackgroundType;
  theme: DefaultTheme;
}

export const DescriptionContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 38rem;

  & h1 {
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme["base-title"]};
    line-height: 130%;
  }

  & h3 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
    line-height: 130%;
  }
`;

export const GridFeatures = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 1rem;
`

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`

export const FeatureIconContainer = styled.span<FeatureIconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme[props.background]};
  border-radius: 50%;
  padding: 0.5rem;
  color: ${(props) => props.theme.white};
  width: 2rem;
  height: 2rem;
  & svg {
    color: ${(props) => props.theme.white};
  }
`

export const ImageContainer = styled.div`
  width: 28rem;
`