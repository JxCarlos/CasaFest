import styled from "styled-components";
import { ButtonType } from "../../../utils/constants";

export const InputButton = styled.button`
  &.${ButtonType.FORM} {
    background-color: ${({theme}) => theme.colors.PRIMARY_YELLOW};
    font-family: Roboto;
    font-weight: 500;
    color: ${({theme}) => theme.colors.BLACK};
    width: 139px;
    height: 31px;
    border: 0;
    border-radius: 16px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      width: 221px;
      height: 49px;
      font-size: 20px;
    }
  }
  &.${ButtonType.CARD} {
    width: 218px;
    background-color: ${({theme}) => theme.colors.BLACK};
    color: ${({theme}) => theme.colors.PRIMARY_YELLOW};
    height: 32px;
    font-size: 14px;
    font-family: Roboto;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    border-radius: 23px;

    &:hover {
      transition: 0.3s;
      transition-timing-function: ease-out;
      color: ${({theme}) => theme.colors.WHITE};
    }

    @media screen and (min-width: 768px) {
      width: 283px;
      height: 47px;
      font-size: 20px;
    }
  }
`;

InputButton.displayName = 'InputButton';
