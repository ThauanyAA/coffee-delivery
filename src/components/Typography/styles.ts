import styled from 'styled-components'

interface TextProps {
  variant?: 'xl' | 'l' | 'm' | 's' | 'xs';
  weight?: number;
  align?: 'left' | 'center' | 'right';
  color?: 'base-title' | 'base-subtitle' | 'base-text' | 'base-label' | 'yellow-dark'
  inline?: boolean;
}

export const Heading = styled.h1<TextProps>`
  font-family: 'Baloo 2', sans-serif;
  color: ${({ theme, color }) => theme[color || 'base-title']};
  ${({ inline }) => (inline ? 'display: inline;' : 'display: block;')};
  font-size: ${({ variant }) => {
    switch (variant) {
      case 'xl':
        return '3rem';
      case 'l':
        return '2rem';
      case 'm':
        return '1.5rem';
      case 's':
        return '1.15rem';
      case 'xs':
        return '1.125rem';
      default:
        return '1.125rem';
    }
  }};
  font-weight: ${({ variant }) => {
    switch (variant) {
      case 'xl':
        return 900;
      case 'l':
        return 900;
      case 'm':
        return 900;
      case 's':
        return 700;
      case 'xs':
        return 700;
      default:
        return 700;
    }
  }};
  line-height: 130%;
  text-align: ${({ align }) => align || 'left'};
`

export const Paragraphy = styled.p<TextProps>`
  font-family: 'Roboto', sans-serif;
  color: ${({ theme, color }) => theme[color || 'base-text']};
  font-size: ${({ variant }) => {
    switch (variant) {
      case 'l':
        return '1.25rem';
      case 'm':
        return '1rem';
      case 's':
        return '0.875rem';
      case 'xs':
        return '0.725rem';
      default:
        return '1rem';
    }
  }};
  font-weight: ${({ weight }) => weight || 400};
  line-height: 130%;
  text-align: ${({ align }) => align || 'left'};
`