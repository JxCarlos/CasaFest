import React from 'react';

// styles
import { CardContainer, FooterCard } from './card.styled';

// utils
import { formatterPeso } from '../../../utils'
import { Slider } from '../../../components/Slider/Slider';

import areaImg from '../../../assets/images/area.png';
import valorImg from '../../../assets/images/valor.png';
import bonusImg from '../../../assets/images/bonodehasta.png';

export const Card = ({ project }) => (
    <CardContainer>
        <span className='offer-card'>
            <div className='offer-card__banner'>
                <img className='offer-card__banner__img' src={bonusImg} alt="bonus" />
                <p className='bonus-p'>Bono de hasta <span className='bonus-span'>{project.bonus}</span></p>
            </div>
        </span>
        <Slider sliders={project.galery} nameProject={project.name}/>
        <p className='p-city'>{project.city}<span className='icon-home'></span></p>
        <FooterCard>
            <div className='footer-card'>
                <p className='p-11'><img width="13" height="10" src={valorImg} alt="icono de area" /><span className="font-light">Precio desde:</span> {formatterPeso.format(project.price)}</p>
                <p className='p-11'><img width="13" height="10" src={areaImg} alt="icono de valor" /><span className="font-light">Área:</span> {project.initialArea}m2 - {project.untilArea}m2</p>
                <span className='boreal'></span>    
            </div>
        </FooterCard>

    </CardContainer>
)
