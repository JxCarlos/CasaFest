import React, { useContext } from 'react';
// components
import { ContainerForm, ContainerSelect } from './form.styled';
import { Select } from '../../commons/components';

//context
import { AmariloContext } from '../../context';
import { Button } from '../../commons/components/';
import { ButtonType } from '../../utils/constants';

export const Form = () => {
    const { listCity, listProject, listFilters, setFilterSelected, filterSelected, filterProjects } = useContext(AmariloContext);
    const { area, price, projectType } = listFilters;

    const handleChange = (e, typeFilter) => {
        const itemSelected = e.target.value;
        const findTypeFilter = filterSelected.findIndex(item => item.filter === typeFilter);
        let auxFilterList = filterSelected.concat();

        if(findTypeFilter === -1) {
            auxFilterList.push({value: itemSelected, filter: typeFilter})
        } else {
            auxFilterList[findTypeFilter] = {value: itemSelected, filter: typeFilter}
        }
        
        setFilterSelected(auxFilterList)
    }

    return (
        <ContainerForm>
            <p className='form-p margin-0'>Encuentra tu proyecto y aprovecha nuestros grandes bonos</p>
            <ContainerSelect>
                <Select
                    placeHolder={'Ciudad'}
                    listItems={listCity}
                    select={(e) => handleChange(e, 'otherCity')}
                />
            
                <Select
                    placeHolder={'Tipo'}
                    listItems={projectType}
                    select={(e) => handleChange(e, 'projectType')}
                />
            
                <Select
                    placeHolder={'Area'}
                    listItems={area}
                    select={(e) => handleChange(e, 'initialArea')}
                />
            
                <Select
                    placeHolder={'Valor'}
                    listItems={price}
                    select={(e) => handleChange(e, 'price')}
                />
            </ContainerSelect>
            <Button type={ButtonType.FORM} handleOnClick={() => filterProjects(listProject)}>BUSCAR</Button>
        </ContainerForm>
    )
}