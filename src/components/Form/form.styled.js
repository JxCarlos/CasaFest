import styled from "styled-components";
import valorImg from '../../assets/images/valor.png';
import ciudadImg from '../../assets/images/ciudad.png';
import tipoImg from '../../assets/images/tipo.png';
import areaImg from '../../assets/images/area.png';
import arrowSVG from '../../assets/images/down-arrow.svg';

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 51px 38px 57px 39px;

  @media screen and (min-width: 768px) {
      padding: 43px 120px  58px 120px;
  }

  .form-p {
      letter-spacing: 0.65px;
      font-size: 13px;
      font-family: Roboto;
      font-weight: 500;
      max-width: 313px;
      margin-bottom: 15px;
      
      @media screen and (min-width: 768px) {
          max-width: 737px;
          height: 33px;
          margin-bottom: 10px;
          font-size: 15px;
          align-self: flex-start;
      }
  }
`;
ContainerForm.displayName = 'ContainerForm';

export const ContainerSelect = styled.div`
    display: grid;
    grid-template-columns: auto;
    margin-bottom: 39px;
    grid-row-gap: 14px;

    @media screen and (min-width: 768px) {
        grid-template-columns: auto auto;
        grid-column-gap: 16px;
        grid-row-gap: 24px;
        margin-bottom: 33px;
    }

    & .group-input-select::after {
        content: "";
        position: absolute;
        right: 11.35px;
        top: 11.35px;
        width: 14.18px;
        height: 14.18px;
        background-repeat: no-repeat;
        background-image: url(${arrowSVG});
        z-index: -1;

        @media screen and (min-width: 768px) {
            width: 22.58px;
            height: 22.58px;
            top: 17.12px;
            right: 17.93px;
        }
    }
    & .group-input-select::before {
        content: "";
        position: absolute;
        left: 7px;
        top: 3px;
        width: 28px;
        height: 28px;
        z-index: 1;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 50%;
        border: 0.1px solid ${({theme}) => theme.colors.PRIMARY_YELLOW};
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.07) inset, 0px 3px 6px rgba(0, 0, 0, 0.09);
        box-sizing: border-box;

        @media screen and (min-width: 768px) {
            width: 44px;
            height: 44px;
            top: 7px;
            left: 12px;
        }
    }
    
    & .group-input-select:nth-child(1)::before {
        background-image: url(${ciudadImg});
    }
    & .group-input-select:nth-child(2)::before {
        background-image: url(${tipoImg});
    }
    & .group-input-select:nth-child(3)::before {
        background-image: url(${areaImg});
    }
    & .group-input-select:nth-child(4)::before {
        background-image: url(${valorImg});
    }
`;
ContainerSelect.displayName = 'ContainerSelect';
