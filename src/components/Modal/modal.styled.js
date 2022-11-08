import styled from "styled-components";
import xImg from '../../assets/images/x.png'

export const ContainerModal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background-color: rgba(255,255,255,.4);
    display: flex;
    justify-content: center;
    padding-top: 11px;
    overflow-y: auto;
`;
ContainerModal.displayName = 'ContainerModal';


export const BodyModal = styled.div`
    max-width: 325px;
    min-height: 640px;
    border-radius: 15px;
    box-sizing: border-box;
    position: relative;
    border: 1px solid yellow;
    background-color: ${({theme}) => theme.colors.PRIMARY_YELLOW};

    .x {
        position: absolute;
        content: "";
        right: 17.48px;
        top: 9.69px;
        background-image: url(${xImg});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 18.25px;
        height: 18.25px;
        z-index: 2;
    }
`
BodyModal.displayName = 'BodyModal';


export const HeaderQuote = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 160px;
    position: relative;
    padding: 0 27.21px 0 28.21px;
    font-size: 13px;
    background-color: white;
    border-radius: 15px;
    box-sizing: border-box;
    
    .quote-p {
        font-family: 'Futura Book';
        .font-light {
            font-family: 'Futura Bold';
        }
    }
    .quote-phone {
        background-color: ${({theme}) => theme.colors.PRIMARY_YELLOW};
        border-radius: 21px;
        bottom: -21.5px;
        box-sizing: border-box;
        height: 43px;
        width: 196px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        font-family: 'Futura Book';
        font-size: 13px;
    }
`
HeaderQuote.displayName = 'HeaderQuote';

export const FormQuote = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.colors.PRIMARY_YELLOW};
    flex-direction: column;
    align-items: center;
    padding: 21.5px 29px 30px 37px;
    gap: 11px;
    font-size: 16px;
    font-weight: 300;

    label {
        text-align: left;
        width: 100%;
    }

    input,
    select {
        width: 100%;
        height: 31px;
        box-sizing: border-box;
        border-radius: 11px;
        border: 0.5px solid #fff;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.07) inset, 0 3px 6px rgba(0, 0, 0, 0.09);
        background-color: rgba(255, 255, 255, 0.37);
        padding-left: 30px;
    }

    .button-card {
        color: white;
        margin-top: 26px;
    }
`
FormQuote.displayName = 'FormQuote';
