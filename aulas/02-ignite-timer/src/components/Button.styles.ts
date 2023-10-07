import styled, { css } from "styled-components"
import { ButtonVariant } from "./Button"

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  'primary': 'purple',
  'secondary': 'orange',
  'danger': 'red',
  'sucess': 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }
  }
`