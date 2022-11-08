import { useState } from "react";
import filters from '../data/filters';

export const useFormFilter = () => {
    const [listFilters] = useState(filters);
    const [copyListProject, setCopyListProject] = useState([]);
    const [finishFilter, setFinishFilter] = useState(false);
    const [filterSelected, setFilterSelected] = useState([]);
    const [projectSelected, setProjectSelected] = useState({});
    const [openModal, setOpenModal] = useState(false);

    const hanldeProjectSelected = project => {
        setProjectSelected(project);
        setOpenModal(true);
    }

    const closeModal = () => {
        setOpenModal(false);
    }

    const validateItems = (listProjects, itemFilter) => {
        let result = [];
        listProjects.map(project => {
            if (Array.isArray(project[itemFilter.filter])) {
                const projectInList = project[itemFilter.filter].find(item => item === itemFilter.value)
                if(projectInList) {
                    result.push(project)
                }
            } else if(project[itemFilter.filter] >= itemFilter.value) {
                result.push(project)
            }
            
        })
        return result;
    }
    
    const filterProjects = (listProjects) => {
        let data =[];
        setCopyListProject([])
        filterSelected.map((itemFilter) => {
            console.log('vueltas')
            if(data.length === 0) {
                console.log('vueltas 1')
                data = validateItems(listProjects, itemFilter)
            } else {
                console.log('vueltas 2')
                data = validateItems(data, itemFilter)
            }
        });
        setCopyListProject(data)
        setFinishFilter(true)
    }

    return {
        copyListProject,
        filterSelected,
        filterProjects,
        finishFilter,
        listFilters,
        projectSelected,
        setFilterSelected,
        hanldeProjectSelected,
        openModal,
        closeModal,
    }
}