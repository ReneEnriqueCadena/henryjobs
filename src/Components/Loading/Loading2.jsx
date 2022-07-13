import React from "react";
import Cohete from '../images/Cohete (1).gif'
import './Loading.css'

export default function Loading2({setLoading}){
    return(
        <div>
             <div className="loading">
                <img className="imagenLoading" src={Cohete} alt='Loading'/>
            </div>
            <div>
                {setTimeout(() => {
                setLoading(false);
                }, 4000)}
            </div>
        </div>
    )
}