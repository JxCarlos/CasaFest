import React from 'react';

import { ContainerHeader, Image } from './header.styled';

export const Header = () => {

    return (
        <ContainerHeader>
            <Image />
            <p className='margin-0 font-futura-book header-p1'>LLEGÓ EL <span className='font-futura-bold'>IMPULSO</span> QUE NECESITABAS PARA CUMPLIR EL SUEÑO DE ADQUIRIR <span className='font-futura-bold'>VIVIENDA NUEVA.</span></p>
            <p className='margin-0 font-futura-bold header-p2'>DEL 7 AL 31 DE OCTUBRE</p>
        </ContainerHeader>
    )
}