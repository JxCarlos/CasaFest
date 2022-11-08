import styled from "styled-components";
import homeImg from "../../../assets/images/casa.png";
import borealImg from "../../../assets/images/boreal.png";
import borealx2Img from "../../../assets/images/borealx2.png";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 260px;
    width: 319px;
    margin: 0 auto;
    border-radius: 26px 26px 0 0;
    box-sizing: border-box;
    border: 1px solid ${({theme}) => theme.colors.PRIMARY_YELLOW};
    margin-bottom: 13px;
    position: relative;

    @media screen and (min-width: 768px) {
        width: 389px;
        height: 325px;
        margin-bottom: 20px;
    }

    .offer-card {
        position: absolute;
        top: 25px;
        right: 0;
        width: 158px;
        height: 35px;
        border-radius: 19px 0 0 19px;
        box-sizing: border-box;
        background-color: ${({theme}) => theme.colors.PRIMARY_YELLOW};
        z-index: 1;

        @media screen and (min-width: 768px) {
            width: 186px;
            height: 41px;
        }

        &__banner {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            gap: 5px;

            @media screen and (min-width: 768px) {
                gap: 15px;
            }

            &__img {
                height: 19.13px;
                max-width: 100%;
                vertical-align: middle;
                width: 17.76px;

                @media screen and (min-width: 768px) {
                    width: 20.81px;
                    height: 22.41px;
                }
            }

            .bonus-p {
                font-size: 11px;
                margin: 0;
                width: 94px;
                height: 24px;
                font-weight: 500;
                text-align: left;

                @media screen and (min-width: 768px) {
                    font-size: 15px;
                    width: 110px;
                    height: 34px;
                }

                .bonus-span {
                    font-weight: 300;
                    display: block;
                }
            }
        }
    }

    .p-city {
        position: relative;
        font-weight: 700;
        font-size: 14px;
        margin: 0;
        width: 100%;
        height: 20px;
        z-index: 1;

        @media screen and (min-width: 768px) {
            height: 31px;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon-home {
            position: absolute;
            background-color: ${({theme}) => theme.colors.WHITE};
            left: calc(50% - 23px);
            top: -26px;
            width: 46px;
            height: 46px;
            border-radius: 50% 50% 0 0;
            z-index: -1;

            @media screen and (min-width: 768px) {
                width: 54px;
                height: 54px;
                left: calc(50% - 27px);
            }

            &::after {
                content: "";
                position: absolute;
                background-size: 100% 100%;
                background-image: url(${homeImg});
                left: 16.5px;
                top: 5.77px;
                width: 13px;
                height: 14.45px;

                @media screen and (min-width: 768px) {
                    width: 15.23px;
                    height: 16.92px;
                    left: 19.38px;
                    top: 10.08px;
                }
            }
        }
    }
`;
CardContainer.displayName = 'CardContainer';

export const FooterCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;

    .footer-card {
        display: flex;
        padding: 0 13px;
        height: 56px;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        position: relative;

        @media screen and (min-width: 768px) {
            height: 71px;
            padding: 0 31px;
        }

        .p-11 {
            font-size: 11px;
            margin: 0;
            font-family: Roboto;
            font-weight: 300;
            padding-right: 5px;

            @media screen and (min-width: 768px) {
                font-size: 16px;
            }
        }

        .font-light {
            font-weight: 500;
            padding-left: 11px;
        }

        .boreal {
            width: 56px;
            height: 56px;
            position: absolute;
            right: 9.16px;
            bottom: -2px;
            background-image: url(${borealImg});

            @media screen and (min-width: 768px) {
                background-image: url(${borealx2Img});
                width: 71px;
                height: 71px;
                background-size: 100% 100%;
            }
        }
    }
`;
FooterCard.displayName = 'FooterCard';
