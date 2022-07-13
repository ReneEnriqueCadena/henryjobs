import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMyApplicat} from '../../../reducer/actions/actionStudents'
import { Contenedor, Card } from "./applicantsStyles/Tarjeta";
import Loading from "../../Loading/Loading";
import { useState } from "react";


export default function Applications() {


    const dispatch = useDispatch();
    const { id } = useParams();
    const posteos = useSelector((state) => state.fetchStudentsReducer.myApp);
    const [ tim, setTime ] = useState(true);

    // El componente debe mostrar publicaciones donde me postulé
    // Array de id de publicaciones de empresa, este array esta dentro de los datos del alumno
    // este muro muestra las publicaciones
    
    useEffect(() => {
        dispatch(getMyApplicat(id));
    },[]);

    useEffect(()=> {
        setTimeout(() => {
            setTime(false)
        }, 2000); 
    },[])

    return (

        <Contenedor>
            {
                tim ? <Loading/> :
                posteos.length === 0 ? <h1 className="NoPost">Todavía no te has postulado!! accede al WorkWall para ver publicaciones laborales</h1>  :
                posteos.map(e =>
                    <Card>
                        
                        <div className="nombre">{e.posterUser.name}</div>
                        <div className="email">{e.posterUser.email}</div>
                        <div>{e.workModality}</div>
                        <div>{e.text}</div>
                        <div>{console.log(e.applicants)}</div>

                        {
                            e.applicants.map(a => a.userId === id &&
                                <div>
                                <h1 className={a.step === "pendiente" ? "pend" : a.step === "rechazado" ?
                                "rech" : a.step === "aceptado" ? "acep" : null    
                            }>{a.step}</h1>
                                </div>
                            )
                        }

                    </Card>
                )
            }


        </Contenedor>
    );
};