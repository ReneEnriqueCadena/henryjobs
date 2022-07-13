import React, { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux"
import { getPublicationEnglish, getPublicationsBusiness, getPublicationsDevType, getPublicationsTechnologies, getPublicationUbication, getWorkModality, ShowFilter } from "../../../reducer/actions/actionStudents";
import NavWall from "./navBarWall";
import {idiomas, allCountries, DevType, technologies, workModal} from "../StudentsWall/select"
import {Componente, DivFiltros} from "./WorkWall.js"
import Loading from "../../Loading/Loading";
import NoSearchFounds from "../../Loading/NoSearchFounds";
import CardPublicationWorkTest from "../../Home/HomeForStudents/CardPublicationsTest";



//Este componente va a renderizar las publicaciones de empresas y reclutadores


export default function WorkWall(){
    //REDUCER TRAER LAS DE EMPRESA Y RECLUTADOR
    const dispatch = useDispatch();
    const business = useSelector((state) => state.fetchStudentsReducer.publicationsFiltered);
    const [load, setLoad] = useState(true);
    
    useEffect(() => {
        if(!business.length){
            console.log('hago algo')
            dispatch(getPublicationsBusiness('123123123123'))
        }
    }, [])

    useEffect(() => {
        setTimeout(() => { setLoad(false) }, 1300);
    }, [])

    const techSelection = (e) => {
        if(e.target.value === "TECNOLOGIAS"){
            dispatch(getPublicationsTechnologies(""))
            dispatch(ShowFilter())
        }
        else{
            dispatch(getPublicationsTechnologies(e.target.value))
            dispatch(ShowFilter())
        }
    }

    const englishSelection = (e) => {
        if(e.target.value === "NIVEL DE INGLES"){
            dispatch(getPublicationEnglish(""))
            dispatch(ShowFilter())
        }
        else{
            dispatch(getPublicationEnglish(e.target.value))
            dispatch(ShowFilter())
        }
    }

    const workModalSelection = (e) => {
        if(e.target.value === "MODALIDAD"){
            dispatch(getWorkModality(""))
            dispatch(ShowFilter())
        }
        else{
            dispatch(getWorkModality(e.target.value))
            dispatch(ShowFilter())
        }
    }

    const countrySelection = (e) => {
        if(e.target.value === "PAIS"){
            dispatch(getPublicationUbication(""))
            dispatch(ShowFilter())
        }
        else{
            dispatch(getPublicationUbication(e.target.value))
            dispatch(ShowFilter())
        }
    }

    const devTypeSelection = (e) => {
        if(e.target.value === "DESARROLLO"){
            dispatch(getPublicationsDevType(""))
            dispatch(ShowFilter())
        }
        else{
            dispatch(getPublicationsDevType(e.target.value))
            dispatch(ShowFilter())
        }
    }

    return(

       

        <Componente>

            <DivFiltros>
            <select onChange={(e) => techSelection(e)}>
                <option>TECNOLOGIAS</option>
            {technologies.map(e => {
                return <option>{e}</option>
            })}
            </select>

            <select onChange={(e) => englishSelection(e)}>
                <option>NIVEL DE INGLES</option>
            {idiomas.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            <select onChange={(e) => workModalSelection(e)}>
                <option>MODALIDAD</option>
            {workModal.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            <select onChange={(e) => countrySelection(e)}>
                <option>PAIS</option>
            {allCountries.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            <select onChange={(e) => devTypeSelection(e)}>
                <option>DESARROLLO</option>
            {DevType.map(e => {
                return <option>{e}</option>
            })}
            </select> 
            
            </DivFiltros>

            {/* <NavWall/> */} 
            {                  /*  ACTUALIZAR/MODIFICAR LA TARJETA QUE MUESTRA LAS PUBLICACIONES DE EMPRESAS
                                    USAR COMO REFERENCIA MOCKEDFILES => mokedFilesPostBusiness */
                   
                load ? <Loading/> :

                business.length === 0 ? <NoSearchFounds/> :
            
                business.map((e)=>
                (
                    
                    <CardPublicationWorkTest
                        image={e.posterUser.profileImage.secure_url}
                        name={e.posterUser.name}
                        date={e.date}
                        title={e.proyectTittle}
                        summary={e.text}
                        video={e.imgVideo}
                        technologies={e.technologies}
                        backFront={e.backFront}
                        country={e.posterUser.country}
                        workModality={e.workModality}
                        english={e.languages}
                        username={e.userName}
                        id={e.posterUser._id}
                        publicacionID={e._id}
                        text={e.text}
                        userTypes={e.posterUser.userTypes}
                       

                    />
                ))
            }
        </Componente>
       
    )
}