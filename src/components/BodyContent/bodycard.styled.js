import styled from "styled-components";

export const ContainerBody = styled.div`
    display: grid;
    grid-template-columns: auto;

    @media screen and (min-width: 768px) {
      grid-template-columns: auto auto;
    }
    
    @media screen and (min-width: 1237px) {
        grid-template-columns: auto auto auto;
    }
`;
ContainerBody.displayName = 'ContainerBody';


export const BodyCard = styled.div`
    margin-bottom: 65px;
`;
BodyCard.displayName = 'BodyCard';
