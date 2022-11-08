import styled from "styled-components";

import leftArrow from "../../assets/images/left-arrow.svg";
import rightArrow from "../../assets/images/right-arrow.svg";

export const ContainerSlide = styled.div`
  position: relative;
  width: 100%;
  display: flex;

  .left-arrow,
  .right-arrow {
    position: absolute;
    left: 9.16px;
    top: 80.79px;
    width: 20.42px;
    height: 20.42px;
    background-image: url(${leftArrow});
    background-repeat: no-repeat;
    border: 0;
    background-color: transparent;
  }
  .right-arrow {
    left: inherit;
    right: 9.16px;
    background-image: url(${rightArrow});
  }
  .arrow-disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;
ContainerSlide.displayName = 'ContainerSlide';

export const SimpleSlide = styled.img.attrs(({imgSelected}) => ({
  src: `${imgSelected}`,
  alt: "Amarilo casa fest 2022",
  loading: "lazy"
}))`
  width: 319px;
  height: 182px;
  border-radius: 26px 26px 0 0;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 389px;
    height: 220px;
  }
`;
SimpleSlide.displayName = 'SimpleSlide';
