import { InputButton } from './button.styled';

export const Button = ({ type, children, handleOnClick}) => {
  return (
    <InputButton className={type} onClick={handleOnClick}>
      {children}
    </InputButton>
  )
}
