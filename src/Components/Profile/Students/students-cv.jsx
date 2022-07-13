import React from "react";
import { CV, CvCont, Instancia, Acerca, Publicaciones, Tecnologias, OtrosStudy } from '../profileStyles/studentCV';
import MostrarMas from "./showMore";
import { Link } from "react-router-dom";



export default function StudentCV({ otherStudies, technologies,userTypes, id , acercaDe}) {

    const tal = localStorage.getItem('TK')
    const userType = JSON.parse(tal);


    return (



        <CV>

            <CvCont>

                { 
                    userTypes!== 4 || userTypes !==5 ?
                        <Tecnologias>
                            <h3>Tecnologias:</h3>
                            <ul>
                                {
                                    technologies.map(el => {
                                        return (
                                            <li key={el}>{el}</li>
                                        )
                                    })
                                }

                            </ul>
                        </Tecnologias>
                        : null
                }
              { 
              userTypes!== 4 || userTypes !==5 ?
               <OtrosStudy>
                    <h3>Otros estudios:</h3>
                    <ul>

                        {
                            otherStudies.map(el => (
                                <li>{el}</li>
                            ))
                        }


                    </ul>
                </OtrosStudy>
                :null}
            </CvCont>

            <Acerca>
                
               
                <div className="text">
                <h3>Acerca De:</h3>
                     <p>{acercaDe}</p>
               </div>
                    
                
                
                
            </Acerca>
            <Publicaciones>
                <h3>Publicaciones:</h3>
                {
                    userType.type === 1 || userType.type === 2 ?
                        <Link to={`/myapplications/${id}`}><h3>Ver mis postulaciones</h3></Link>
                        :
                        userType.type === 4 || userType.type === 5 ?
                            <Link to={`/mypublications/${id}`}><h3>Ver todas las publicaciones</h3></Link>
                            : null
                }
               
            </Publicaciones>
        </CV>
    )

}
