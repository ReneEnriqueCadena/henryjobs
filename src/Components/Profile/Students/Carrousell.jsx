import React, { useEffect, useState } from "react";
import { mokedFilesPublicaciones } from "../../Home/HomeForBusiness/MokedFilesPublicaciones";
import PublicacionesCards from "./PublicacionesCard";
import Arrow from '../../images/Arrow/atras.png'
import { PublicArrowRight, PublicArrowLeft } from "../profileStyles/studentCV";
import ArrowR from '../../images/adelante.png'
import { SlyderCont } from "./cardStyles/PublicacionCard";
import { useSelector, useDispatch} from "react-redux"


export default function Carrousell ({id}) {
    const allPublicaciones = useSelector((state) => state.fetchStudentsReducer.AllPublications);

    const [ current, setCurrent ] = useState(0);
    const [ pub, setPubs ] = useState([]);

    useEffect(() => {
        if(allPublicaciones.length > 0){
            setPubs(allPublicaciones);
        }
    }, [allPublicaciones]);


    const publicaciones = pub.filter(e => e.posterUser._id === id);
    const length = publicaciones.length

    const next = () => {
        setCurrent(current===length -1 ? 0: current+1);
    };

    const prev = () => {
        setCurrent(current === 0 ? length -1 : current -1);
    };

    if(!Array.isArray(publicaciones) || publicaciones.length <=0){
		return null
	}

    return(
        <SlyderCont>

        
        <PublicArrowLeft src={Arrow} alt='back' onClick={prev}/>

        <div className="ContCards">
            { publicaciones && publicaciones.map( (e, index) => {
                if(current === index ){
                    return(
                        <div key={e.id}>
                        <PublicacionesCards
                        id={e.id} 
                        picture={e.picture} 
                        name={e.name} 
                        date={e.date} 
                        proyectTittle={e.proyectTittle} 
                        summary={e.summary} 
                        technologies={e.technologies}
                        />
                        </div>
                    );
                }   
            })}
        </div>

            <PublicArrowRight src={ArrowR} alt='next'onClick={next}/>

        </SlyderCont>
    );                      
};
