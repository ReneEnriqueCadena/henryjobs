import React, { useState, useEffect } from "react";
import StaffStudentsBusiness from "./StaffStudentsBusiness";
import StaffPublications from "./StaffPublications";
import { getInfoForStaff, ordenarAlumnos, getStudentDetail, staffShowOrder } from "../../../reducer/actions/actionStaff";
import { useDispatch, useSelector } from "react-redux";
import { NavStaff, ContStafHome, ContDivStaff, DivGrid } from "./StaffStyles/staffStyles";
import { GridStudent } from "./StaffStyles/staffStudentCards";
import Persent from "./persent";


export default function HomeForStaff() {

    const dispatch = useDispatch();

    //////////////////////////// estados de alumnos y empresas, y sus publicaciones respectivamente

    const alumnos = useSelector((state) => state.fetchStaffReducer.staffStudentDetail);
    const empresas = useSelector(state => state.fetchStaffReducer.staffAllBusiness);
    const alumnosPub = useSelector(state => state.fetchStaffReducer.staffAllStudentsPublications);
    const empresasPub = useSelector(state => state.fetchStaffReducer.staffAllBusinessPublications);

    //////////////////////////// Llena los estados ///////////////////////////////////////

    useEffect(() => {
        dispatch(getInfoForStaff());
    }, []);

    //////////////////////////// Seleccion de botones /////////////////////////////////////

    const [renderizar, setRenderizar] = useState("");

    const handleClick = (value) => {
        setRenderizar(value);
    };

    ///////////////////////////// Buscador de Alumnos /////////////////////////////////////

    const [buscador, setBuscador] = useState("");

    const handleChange = (value) => {
        setBuscador(value);
        dispatch(getStudentDetail(value));
        dispatch(staffShowOrder());
    };

    ////////////////////////////// Ordenamientos de alumnos //////////////////////////////////

    const handleSelect = (e) => {
        if (e.target.value === "Orden") {
            dispatch(ordenarAlumnos(""));
            dispatch(staffShowOrder());
        }
        else {
            dispatch(ordenarAlumnos(e.target.value));
            dispatch(staffShowOrder());
        }
    };


    return (
        <ContStafHome>
            {console.log(alumnos.renderizar)}
            <NavStaff>
                <button value={"Alumnos"} onClick={(e) => handleClick(e.target.value)}>Alumnos</button>
                <button value={"AlumnosPub"} onClick={(e) => handleClick(e.target.value)}>Publicaciones de Alumnos</button>
                <button value={"Empresas"} onClick={(e) => handleClick(e.target.value)}>Empresas</button>
                <button value={"EmpresasPub"} onClick={(e) => handleClick(e.target.value)}>Publicaciones de Empresas</button>
            </NavStaff>
            {renderizar === "Alumnos" ?
                <ContDivStaff>
                    <input placeholder="🔎 Busca por nombre..." value={buscador} onChange={(e) => handleChange(e.target.value)} />

                    <select onChange={(e) => handleSelect(e)}>
                        <option>Orden</option>
                        <option>CV enviado ascendente</option>  {/* no cambiar contenido dentro del options */}
                        <option>CV enviado descendente</option>{/* no cambiar contenido dentro del options */}
                        <option>Stars ascendente</option>            {/* no cambiar contenido dentro del options */}
                        <option>Stars descendente</option>          {/* no cambiar contenido dentro del options */}
                    </select>

                </ContDivStaff>

                : null}
                <DivGrid>

            {
                renderizar === "Alumnos" ? alumnos.renderizar.map(e => <StaffStudentsBusiness
                    name={e.name}
                    profileImage={e.profileImage.secure_url}
                    lastname={e.lastName}
                    id={e._id}
                    userName={e.userName}
                    email={e.email}
                    country={e.country}
                    city={e.city}
                    allStars={e.allStars}
                    curriculumCounter={e.curriculumCounter}
                    botAd={true}
                />) :

                    renderizar === "Empresas" ? empresas.map(e => 
                    
                    <StaffStudentsBusiness
                        name={e.name}
                        profileImage={e.profileImage.secure_url}
                        userName={e.userName}
                        email={e.email}
                        country={e.country}
                        city={e.city}
                        id={e._id}
                        botAd={false}
                    />
                    
                    ) :

                        renderizar === "AlumnosPub" ? alumnosPub.map(e => <StaffPublications
                            name={e.posterUser.name}
                            lastname={e.posterUser.lastName}
                            email={e.posterUser.email}
                            text={e.text}
                            video={e.imgVideo}
                        />) :

                            renderizar === "EmpresasPub" ? empresasPub.map(e => <StaffPublications
                                techonologies={e.technologies}
                                name={e.posterUser.name}
                                email={e.posterUser.email}
                                country={e.country}
                                text={e.text}
                                workModal={e.workModality}
                            />) :

                                <div> Bienvenido al panel de control de staff, apreta un boton para visualizar el contenido </div>
                            
                                
                             
            }

        </DivGrid>

        </ContStafHome>
    )
}