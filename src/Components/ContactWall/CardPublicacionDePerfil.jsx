import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { borrarBusinessPub, getAllStudents, setApplicant } from "../../reducer/actions/actionBusiness";
import { sendNudes } from "../../reducer/actions/actionBusiness";
import { actualizarEstado } from "../../reducer/actions/actionPost";
import NoSearchFounds from "../Loading/NoSearchFounds";
import { CartaBusiness } from "./Applications/applicantsStyles/empresastyles";

export default function PublicationCard(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStudents());
    }, []);

  

    const handlePost = (value) => {
        // dispatch(setApplicant(value));
        // Esta funcion Acepta o rechaza a los postulantes
        // envia un objeto con el id y el step
        let idp = value.target.value.split(',')[2]
        let name = value.target.value.split(',')[1] 
        let id = value.target.value.split(',')[0]
        let valor = "";
        
        if (value.target.textContent === "Aceptar postulante") {
            valor = "aceptado";
            
        }
        if (value.target.textContent === "Rechazar postulante") {
            valor = "rechazado";
            
        }
        let obj = {
            step: valor,
            showBusiness: true,
            userId: id,
            name: name
        };
        console.log("valuetv", value.target.value);
        console.log("objeto e idp", obj, idp);
        dispatch(sendNudes(obj, idp));
        dispatch(actualizarEstado())
    };

    const handleX = (value) => {

        console.log(props.idPublicacion)
        let idp = value.target.value.split(',')[3]
        let step = value.target.value.split(',')[2]
        let name = value.target.value.split(',')[1]
        let id = value.target.value.split(',')[0]
        let obj = {
            step: step,
            showBusiness: false,
            userId: id,
            name: name
        };
        console.log("obj e idp", obj, idp);
        dispatch(actualizarEstado())
        dispatch(sendNudes(obj, idp));
    };

    const borrarPublicacion = () => {
        dispatch(borrarBusinessPub(props.idPublicacion));
    };

    let fecha = props.date.slice(0, 10);

    return (
        props ? 
        <CartaBusiness >
            {
            props.botonDelete ?
            <button className="borrar" onClick={borrarPublicacion}>BORRAR PUBLICACIÓN</button>
            : 
            null
            }
            <div>{props.email}</div>
            <div>{fecha}</div>
            <div>{props.text}</div>

            <div>
                <h1>POSTULANTES:</h1>
            </div>

            <div className="contenedorAlumnos">

                {props.applicants.map(e => e.showBusiness === true ?
                        <div className="Alumno">
                           <p className="nombre">{e.name}</p>
                            <br></br>
                             <span className={e.step === "pendiente" ? "pend" : e.step === "rechazado" ?
                                "rech" : e.step === "aceptado" ? "acep" : null }>{e.step}</span>
                            <Link to={`/profile/${e.userId}`}><button className="botoncito">Ver Perfil</button></Link>
                            {e.step === "pendiente" ?
                                e.step === "pendiente" ?
                                    <div>
                                        <button value={e.userId + ',' + e.name + ',' + props.idPublicacion} onClick={(event) => handlePost(event)}>Aceptar postulante</button>
                                        <button value={e.userId + ',' + e.name + ',' + props.idPublicacion} onClick={(event) => handlePost(event)}>Rechazar postulante</button>
                                    </div>

                                    : <div>
                                        <button value={e.userId + ',' + e.name + ',' + e.step + ',' + props.idPublicacion} onClick={(event) => handleX(event)}>X</button>
                                    </div>
                                :
                                <div>
                                    <button value={e.userId + ',' + e.name + ',' + e.step + ',' + props.idPublicacion} onClick={(event) => handleX(event)}>X</button>
                                </div>
                            }

                        </div>
                        : null
                )}
            </div>
        </CartaBusiness>
        :
        <NoSearchFounds />
    );
};