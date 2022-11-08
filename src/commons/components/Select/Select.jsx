import React from 'react';
import { GroupInputSelect, InputSelect } from './select.styled';

export const Select = ({ listItems, select, placeHolder }) => {
    const options = listItems.map((item, key) => {
        const optionValue = item?.value ? item.value : item;
        const optionText = item?.text ? item.text : item;
        return (
            <option key={`select-option-${key}`} value={optionValue}>
                {optionText}
            </option>
        )
    })

    return (
        <GroupInputSelect>
            <InputSelect id="cars" name="carlist" form="carform" onChange={(e) => select(e)}>
                <option hidden defaultValue={placeHolder}>{placeHolder}</option>
                {options}
            </InputSelect>
        </GroupInputSelect>
    )
}
