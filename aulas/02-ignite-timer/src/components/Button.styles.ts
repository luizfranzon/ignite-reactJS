import styled from "styled-components"
import { ButtonVariant } from "./Button"

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {

}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
`