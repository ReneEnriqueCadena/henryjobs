import React from "react";
import ProyectsCard from "./Proyects Card/Proyects-Card";
import { SearchProyects ,StyleModal} from "./Proyects-styles/Proyects";
import {mokedFilesPublicaciones } from "../Home/HomeForBusiness/MokedFilesPublicaciones"
import { useState } from "react";
import './Proyects-styles/Proyects.css'
import imagenSeach from "../images/search.png"
import Modal from 'react-modal';
import { Button } from "@mui/material";

export default function Proyects() {
    const [name, setName] = useState(''); 
    const [modalIsOpen, setIsOpen] = useState(false);


// traer los datos

const datos = mokedFilesPublicaciones;
function openModal(){
    setIsOpen(true);
}
function closeModal() {
    setIsOpen(false);
  }

function handleChange(e) {

}

function handleSumit(e){

}
    return(
        <>
            <div className="nav">
                {/* <SearchProyects>
                        <input type='search' name='search' value={name}  onChange={e=> handleChange(e)} placeholder="Buscar por nombre o autor"/>
                    
                    <button onClick={e=> handleSumit(e)}>
                    <img src={imagenSeach} />
                    </button>
                </SearchProyects>
            <button onClick={openModal} className="button">PUBLICAR</button> */}

            
            <StyleModal >
                <Modal  
                className="Modal"
                overlayClassName="Overlay"
                isOpen={modalIsOpen} 
                onRequestClose={closeModal} >
                <button onClick={closeModal}>x</button>
                <h1>CREA TU PUBLICACION 🚀</h1>
                <form>
                    <label >TITULO</label>
                    <input className="inputForm"></input>
                    <label>INSERTA IMAGEN O VIDEO</label>
                    <input className="inputForm"></input>
                    <label>COMPARTI TU LINK (LINKEDIN O GITHUB)</label>
                    <input className="inputForm"></input>
                    <label>TECNOLOGIAS QUE USASTE</label>
                    <input className="inputForm"></input>
                    <label>BREVE RESUMEN NO DEBE SUPERAR LOS 100 CARACTERES</label>
                    <input className="inputForm"></input>
                    <button>CREAR</button>
                </form>
            </Modal>
            </StyleModal>
            
            </div>
            <div className="caja">
                {datos.map(el => {
                    return <ProyectsCard 
                        key={el.id}
                        name={el.name} 
                        imagen={el.picture} 
                        titulo={el.proyectTittle}
                        resumen={el.summary} 
                        video={el.imgVideo} 
                        link={el.linkedin} 
                        tecnologias={el.technologies}
                        />
                    })
                }
            </div>
        </>
        
    )
}