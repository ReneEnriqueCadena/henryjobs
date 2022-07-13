import React from "react";
import { PubContainer } from "./cardStyles/PublicacionCard";

export default function PublicacionesCards ({id, picture, name, date, proyectTittle, summary, technologies}){
    return(
        <PubContainer>
            <div className="img-name-date">
                <div className="perfil">
                <div className="imgPer">
                  <img src={picture} alt="publicacion-imagen"/>
                </div>
                  <h3>{name}</h3>
                </div>
                <p>{date}</p>
            </div>
            <div className="title-summary">
                <h2>{proyectTittle}</h2>
                <h1>ACA IRIA EL VIDEO O IMAGEN</h1>
                <p>{summary}</p>
            </div>
            <div className="tech">
            <p>{technologies}</p>
            </div>
        </PubContainer>
    );
};