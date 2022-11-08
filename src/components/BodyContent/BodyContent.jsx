import React, { useContext, useState } from 'react';

// components
import { Card } from '../../commons/components'
import { Button } from '../../commons/components/Button/Button';

//context
import { AmariloContext } from '../../context';
import { ButtonType } from '../../utils/constants';
import { Modal } from '../Modal/Modal';
import { BodyCard, ContainerBody } from './bodycard.styled';

export const BodyContent = () => {
    const { listProject, copyListProject, finishFilter, 
        hanldeProjectSelected, openModal, closeModal
    } = useContext(AmariloContext);

    const buildCards = (data) => {
        return data.map((item, key) => {
            return (
                <BodyCard key={`body-card-${key}`}>
                    {openModal ? <Modal handleOnClick={closeModal} /> : null }
                    <Card project={item} />
                    <Button type={ButtonType.CARD} handleOnClick={() => hanldeProjectSelected(item)}>SOLICITAR COTIZACIÓN</Button>
                </BodyCard>
            )
        })
    }

    const buildContent = () => {
        let content;
        if(finishFilter) {
            content= buildCards(copyListProject)
        } else {
            content= buildCards(listProject)
        }
        return content;
    }

    return (
        <ContainerBody>{buildContent()}</ContainerBody>
    )
}
