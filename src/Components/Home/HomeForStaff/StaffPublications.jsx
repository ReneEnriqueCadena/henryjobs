import React from "react";
import { useDispatch } from "react-redux";
import { StaffContainer, NameMail } from "./StaffStyles/staffPublication";

export default function StaffPublications ({name,lastname, email, text, video, country, workModal, technologies}){
    
    
    ////////////////// REUTILIZAR LAS CARDS Y ESTILOS DEL WORKWALL Y STUDENTSWALL ///////////////////

    return(
        <StaffContainer>
            {
                lastname ? 
                
                <div>
                    <NameMail>
                        <h3>{name + " " + lastname}</h3>
                        <p>{email}</p>
                    </NameMail>
                    <p className="text">{text}</p>
                    <img src={video}/>
                </div>
                
                : 
                
                <div>
                    <NameMail>
                        <h3>{name}</h3>
                        <p>{email}</p>
                    </NameMail>
                    <p  className="text">{text}</p>
                    <p className="wm">{workModal}</p>
                    {technologies && technologies.map(e => <p>{e}</p>)}
                </div>
            }
        </StaffContainer>
    );
};

// alumnosPub
//     name lastname email
//       text video



// empresasPub techonologies name 
//     email country text workModal
