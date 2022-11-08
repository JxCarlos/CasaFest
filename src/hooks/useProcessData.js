import { useEffect, useState } from "react";
import data from '../data/projects';
import {removeDuplicates} from '../utils'

export const useProcessData = () => {
    const [listProject, setListProject] = useState(data);
    const [listCity, setListCity] = useState([]);

    const createListOfDataForSelects = () => {
        let allCity = [];
        let allTypeProject = [];

        listProject.map(project => {
            allCity = [...allCity, ...project.otherCity]
            allTypeProject = [...allTypeProject, ...project.projectType]
        });

        const cities = removeDuplicates(allCity);
        const typeProjects = removeDuplicates(allTypeProject);
        const t = removeDuplicates(typeProjects);
        setListCity(cities);
    }

    useEffect(() => {
        createListOfDataForSelects();
    }, []);

    return {
        listCity,
        listProject,
        setListProject
    }
}