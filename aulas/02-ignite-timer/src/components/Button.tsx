import { ButtonContainer } from "./Button.styles";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucess';

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({ variant = "primary" }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}