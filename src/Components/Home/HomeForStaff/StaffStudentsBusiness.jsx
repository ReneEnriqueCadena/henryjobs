import React, { useEffect, useState } from "react";
import { CardStudentsStaff } from "./StaffStyles/staffStudentCards";
import { MdLocationPin } from 'react-icons/all'
import { AiFillStar } from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { sendEmail, userDelete } from "../../../reducer/actions/actionStaff";
import {SiGmail} from 'react-icons/all';

export default function StaffStudentsBusiness({ botAd, id, name, profileImage, lastname, userName, email, country, city, allStars, curriculumCounter }) {

    //////////////////////////////////// AGREGAR ESTILOS ////////////////////////////////////////
    // Estas son tarjetas que se van a renderizar juntas en la pantalla principal del staff
    // a primera vista contienen la info necesaria para el Staff
    // idea de Luciano: tarjeta vertical tipo app del clima con un grid

    const [cartelMail, setCartelMail] = useState(false);

    const dispatch = useDispatch();

    // ¿ el staff a necesitar entrar al perfil del user para ver las publicaciones de solo ese user ?

    const handleDelete = () => {
        dispatch(userDelete(id))
    };

    const handleAdvertencia = (email) => {
        dispatch(sendEmail(email));
        setCartelMail(true);
    };

    return (
        <CardStudentsStaff>
            <div className="cont">
                {
                    lastname ?
                        // Link al perfil con userName?
                        <div >
                            <div className="name">

                                <div className="imgCont">
                                    <img src={profileImage} width={"25px"} height={"25px"} />
                                </div>
                                <div className="detail">
                                    <h3>{name} {lastname}</h3>
                                    <p><MdLocationPin /> {city} {country}</p>
                                </div>
                            </div>
                            <div className="emailCvContainer">

                                <div className='mail'>
                                <SiGmail className="colorMail"/>
                                <p>{email}</p>
                                </div>

                                <h4 className="cv">Curriculums:{curriculumCounter}</h4>
                            </div>
                            <h4 className="star"><AiFillStar className="starColor"/> {allStars}</h4>
                        </div>

                        :

                        // Link al perfil con userName?
                        
                        <div className="name">

                            <div className="imgCont">
                                <img src={profileImage} width={"25px"} height={"25px"} />
                            </div>
                            <div className="detail">
                                <h3>{name}</h3>
                                <p><MdLocationPin /> {city} {country}</p>
                            </div>
                        </div>
                }
                <div className="buttonContainer">
                    <button onClick={() => handleDelete()}>Borrar Usuario</button>
                    {cartelMail && <span>Correo enviado con éxito!</span>}
                    {
                        botAd ?
                            <button onClick={() => handleAdvertencia(id)}>Enviar Advertencia</button>
                            : null
                    }
                </div>
            </div>
        </CardStudentsStaff>
    );
};