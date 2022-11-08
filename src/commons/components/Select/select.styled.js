import styled from "styled-components";

export const InputSelect = styled.select`
  width: 100%;
  height: 100%;
  border-radius: 11px;
  font-size: 13px;
  font-weight: 500;
  border: 0.1px solid ${({theme}) => theme.colors.PRIMARY_YELLOW};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.07) inset, 0px 3px 6px rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
  color: ${({theme}) => theme.colors.PRIMARY_GRAY};
  text-transform: capitalize;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-left:44px;
  background-color: transparent;
  outline: none;
  
  &::-ms-expand {
    display: none;
  }
  
  @media screen and (min-width: 768px) {
    padding-left: 75px;
    font-size: 17px;
  }

`;
InputSelect.displayName = 'InputSelect';

export const GroupInputSelect = styled.div.attrs(() => ({
  className: 'group-input-select',
}))`
  position: relative;
  width: 261px;
  height: 36px;
  @media screen and (min-width: 768px) {
      width: 365px;
      height: 57px;
  }
`
GroupInputSelect.displayName = 'GroupInputSelect'