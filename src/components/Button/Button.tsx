import { type FC } from 'react'
import { ButtonContainer } from './Button.styled'
import { type ButtonProps } from './interfaces'

const Button: FC<ButtonProps> = ({ dataTestId = 'button' }) => {
  return (
    <ButtonContainer data-testid={dataTestId}>
      <h1>Button component</h1>
    </ButtonContainer>
  )
}

export default Button
