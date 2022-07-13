import React, { useState } from "react";

export default function StaffForm ({ sumarFase }) {
    const [ mail, setMail ] = useState("");
    const [ mailError, setEmailError] = useState("");
    
    const validateEmail = (e) => {
        const correo = /[^@ \t\r\n]+@soyhenry\.com/
    
        if(correo.test(e.target.value)){
            setEmailError("");
            setMail(e.target.value);
        }
        else if(e.target.value === ""){
            setEmailError("");
            setMail(e.target.value);
        }
        else{
            setEmailError("Ingresa un email válido!");
            setMail(e.target.value);
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(mailError){
            return;
        }
        else if(mail === ""){
            setEmailError("Ingresa un email válido!");
        }
        else{
            //manejar info(guardar y mandar contraseña)
            sumarFase();
        }
    };
    
    return(
        <div>
            <h1>¿Cuál es tu email de la empresa?</h1>
            { mailError && <span>{ mailError }</span> }
            <input type={"text"} value={mail} onChange={(e) => validateEmail(e)} />
            <button onClick={(e) => handleSubmit(e)}>Registrarse</button>
        </div>
    );

}