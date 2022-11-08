import styled from "styled-components";
import casafestamarillo from '../../assets/images/casafest2022.png';

export const ContainerHeader = styled.div`
    background: ${props => props.theme.colors.PRIMARY_YELLOW};
    display: block;
    padding: 26.69px 26px 34px 27px;
    position: relative;

    @media screen and (min-width: 768px) {
        padding-bottom: 43px;
    }

    .header-p1 {
        margin-bottom: 5px;
        @media screen and (min-width: 768px) {
            margin-bottom: 0;
        }
    }
    .header-p2 {
        font-size: 12px;
        @media screen and (min-width: 768px) {
            font-size: 20px;
        }
    }
`;
ContainerHeader.displayName = 'ContainerHeader'

export const Image = styled.img.attrs(() => ({
    src: casafestamarillo,
    alt: "Amarilo casa fest 2022",
    loading: "lazy"
}))`
    height: 142.31px;
    margin-bottom: 0;
    width: 179.79px;
    @media screen and (min-width: 360px) and (max-width: 767px) {
        margin-bottom: 17px;
    }
`;
Image.displayName = 'Image';
