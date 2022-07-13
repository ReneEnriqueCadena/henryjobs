import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents, setOrderStars, getPublicatWorkModal, getPublicatDevType, getPublicatEnglish, getPublicatTechnologies, getPublicatUbication, showFilter, setBusBusqueda } from "../../../reducer/actions/actionBusiness";
import CardWallStudents from "./CardWallStudents";
import { technologies, idiomas, DevType, workModal, allCountries } from "./select";
import { BodyStudentsWallCard } from "../../Home/HomeStyles/HomePublicationCard.js"
import { DivFiltros } from "../WorkWall/WorkWall.js";
import Loading from "../../Loading/Loading";
import { useState } from "react";
import NoSearchFounds from "../../Loading/NoSearchFounds";
import { Busqueda } from "./inputBusqueda";
import { StudentGrid } from "../../Home/HomeStyles/HomePublicationCard.js";


export default function StudentsWall() {

    const estudiantes = useSelector(state => state.fetchBusinessReducer.studentsFiltered);
    const dispatch = useDispatch();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        dispatch(getAllStudents());
    }, []);

    useEffect(() => {
        setTimeout(() => { setLoad(false) }, 1500);
    }, [])


    //traer el objeto filtros con use selector y usarlo como dependencia en el effect
    // en cada return enviar "" con el dispatch
    const selectTech = (e) => {
        if (e.target.value === "TECNOLOGIAS") {
            dispatch(getPublicatTechnologies(""));
            dispatch(showFilter())
        }
        else {
            dispatch(getPublicatTechnologies(e.target.value))
            dispatch(showFilter())
        }
    };

    const selectDevType = (e) => {
        if (e.target.value === "DESARROLLADOR") {
            dispatch(getPublicatDevType(""));
            dispatch(showFilter())
        }
        else {
            dispatch(getPublicatDevType(e.target.value))
            dispatch(showFilter())
        }
    };

    const selectEnglish = (e) => {
        if (e.target.value === "NIVEL DE INGLES") {
            dispatch(getPublicatEnglish(""));
            dispatch(showFilter())
        }
        else {
            dispatch(getPublicatEnglish(e.target.value))
            dispatch(showFilter())
        }
    };

    const selectModal = (e) => {
        if (e.target.value === "MODALIDAD") {
            dispatch(getPublicatWorkModal(""))
            dispatch(showFilter())
        }
        else {
            dispatch(getPublicatWorkModal(e.target.value)) // getPublicatWorkModal
            dispatch(showFilter())
        }
    };

    const selectPais = (e) => {
        if (e.target.value === "PAIS") {
            dispatch(getPublicatUbication(""));
            dispatch(showFilter())
        }
        else {
            dispatch(getPublicatUbication(e.target.value))
            dispatch(showFilter())
        }
    };

    const selectStars = (e) => {
        if (e.target.value === "STARS") {
            dispatch(setOrderStars(""));
            dispatch(showFilter())
        }
        else {
            dispatch(setOrderStars(e.target.value)); // ordenamiento por stars
            dispatch(showFilter())
        }
    };
    
    const [ buscador, setBuscador ] = useState("");
    
    const handleChange = (value) => {
        setBuscador(value);
        if(value === ""){
            dispatch(setBusBusqueda(""));
        }
        else{
            dispatch(setBusBusqueda(value));
        }
        dispatch(showFilter());
    };


    console.log(estudiantes)

    return (
        <BodyStudentsWallCard>
            <DivFiltros>

                <select onChange={(e) => selectTech(e)}>
                    <option>TECNOLOGIAS</option> {/* si cambias lo que hay dentro de options,
                                                 cambialo en la funcion tambien, dentro del if */}
                    {technologies.map(e => {
                        return <option>{e}</option>
                    })}</select>

                <select onChange={(e) => selectDevType(e)}>
                    <option>DESARROLLADOR</option> {/* si cambias lo que hay dentro de options,
                                                 cambialo en la funcion tambien, dentro del if */}
                    {DevType.map(e => {
                        return <option>{e}</option>
                    })}
                </select>

                <select onChange={(e) => selectEnglish(e)}>
                    <option>NIVEL DE INGLES</option> {/* si cambias lo que hay dentro de options,
                                                 cambialo en la funcion tambien, dentro del if */}
                    {idiomas.map(e => {
                        return <option>{e}</option>
                    })}
                </select>



                <select onChange={(e) => selectPais(e)}>
                    <option>PAIS</option> {/* si cambias lo que hay dentro de options,
                                                 cambialo en la funcion tambien, dentro del if */}
                    {allCountries.map(e => {
                        return <option>{e}</option>
                    })}
                </select>

                <select onChange={(e) => selectStars(e)}>
                    <option>STARS</option> {/* si cambias lo que hay dentro de options, cambialo en la funcion tambien, dentro del if */}
                    <option>ASCENDENTE</option>
                    <option>DESCENDENTE</option>
                </select>
                {/* <button onClick={() => window.location.reload()}>BORRAR</button> Luciano recomienda un reload, luciano es un gato */}
            </DivFiltros>

            <Busqueda className="inputBusqueda" placeholder="🔎 Busca alumnos por nombre..." value ={buscador} onChange={(e) => handleChange(e.target.value)}/>

            <StudentGrid>
            {

                load ? <Loading /> :

                    estudiantes.render.length === 0 ? <NoSearchFounds/> :

                        
                        estudiantes && estudiantes.render.map(e => {
                            return (

                                <CardWallStudents  // REEMPLAZAR POR UNA TARJETA DE ALUMNOS
                                    name={e.name}
                                    lastname={e.lastName}
                                    email={e.email}
                                    technologies={e.technologies}
                                    otherstudies={e.otherStudies}

                                    banner={e.banner.secure_url}
                                    english={e.languages}
                                    backFront={e.backFront}
                                    workModality={e.workModality}
                                    ubication={e.country}
                                    city={e.city}
                                    curriculumCounter={e.curriculumCounter}
                                    userName={e.userName}
                                    allStars={e.allStars}
                                    id={e._id}
                                    profileImage={e.profileImage.secure_url}
                                />

                            )
                        })}
                    </StudentGrid>
        </BodyStudentsWallCard>
    );
};