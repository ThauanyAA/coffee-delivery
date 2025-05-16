import { Heading, Paragraphy } from './styles';

interface TextProps {
  children: React.ReactNode;
  variant?: 'xl' | 'l' | 'm' | 's' | 'xs';
  weight?: number;
  align?: 'left' | 'center' | 'right';
  color?: 'base-title' | 'base-subtitle' | 'base-text' | 'base-label' | 'yellow-dark' | 'white'
  inline?: boolean;
}

export function Title({ children, ...props }: TextProps) {
  return (
    <Heading {...props}>{children}</Heading>
  )
}

export function Text({ children, ...props }: TextProps) {
  return (
    <Paragraphy {...props}>
      {children}
    </Paragraphy>
  )
}
