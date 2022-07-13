import React, { useState } from "react";

export default function RegistroGeneral () {
    // Este registro puede ser para Recruiter
    // Este codigo no fue probado

    // Falta hacer validacion del campo de EMAIl
    // Falta juntar los datos en el handle submit
    
    /////////////////////// ESTADOS DE DATOS ////////////////////////////////////////
    const [ datos, setDatos ] = useState({
        nombre:"",
        apellido:"",
        email:"",
        contraseña1:"",
        contraseña2:"",
    });

    /////////////////////// ESTADOS DE ERRORES /////////////////////////////////////

    const [ error, setError ] = useState({
        errorNombre:"",
        errorApellido:"",
        errorEmail:"",
        errorContraseña:"",
        errorContraseña1:"",
        errorContraseña2:""
    });

    /////////////////////// VALIDACION DE NOMBRE Y APELLIDO ////////////////////////

    const validarNombre = (e) => {
        if(/^(([A-ZÁÉÍÓÚÑ]{1}[a-záéíóúüñ]*)(\s)?)((((((((de)|(del)|(la)|(las)|(los))\s)?)?){1,2})(([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)(\s([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))?){1})?)$/gim.test(e.target.value)){
            setError({...error, errorNombre:"El nombre solo debe contener letras"});
        }
        else{
            setError({...error, errorNombre:""})
        }
        setDatos({...datos, nombre: e.target.value});
    };

    const validarApellido = (e) => {
        if(/^(([A-ZÁÉÍÓÚÑ]{1}[a-záéíóúüñ]*)(\s)?)((((((((de)|(del)|(la)|(las)|(los))\s)?)?){1,2})(([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)(\s([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))?){1})?)$/gim.test(e.target.value)){
            setError({...error, errorApellido:"El apellido solo debe contener letras"});
        }
        else{
            setError({...error, errorApellido:""});
        }
        setDatos({...datos, apellido: e.target.value});
    };

    //////////////////////// VALIDACION DE MAIL ////////////////////////////////////

    const validarEmail = (e) => {
        setDatos({...datos, email: e.target.value});
    };

    //////////////////////// VALIDACION DE CONTRASEÑAS /////////////////////////////

    const validarContraseña1 = (e) => {
        setDatos({...datos, contraseña1: e.target.value});
    };

    const validarContraseña2 = (e) => {
        if(e.target.value !== datos.contraseña1){
            setError({...error, errorContraseña: "Las contraseñas deben coincidir"});
        }
        else{
            setError({...error, errorContraseña: ""});
        }
        setDatos({...datos, contraseña2: e.target.value});
    };

    const handleSubmit = () => {
        if(error.errorApellido || error.errorContraseña || error.errorEmail || error.errorNombre){
            return;
        }
        else{
            if(!datos.nombre){
                return setError({...error, errorNombre: "Debes ingresar un nombre!"});
            }
            else if(!datos.email){
                return setError({...error, errorEmail: "Debes ingresar un email"});
            }
            else if(!datos.contraseña1){
                return setError({...error, errorContraseña1: "Debes ingresar una contraseña"});
            }
            else if(!datos.contraseña2){
                return setError({...error, errorContraseña2: "Debes ingresar una contraseña" });
            }
        }
    };

    return(
        <div>
            <div>
                <h1>Nombre</h1>
                <input value={datos.nombre} onChange={(e) => validarNombre(e)}/>
            </div>

            <div>
                <h1>Apellido</h1>
                <input value={datos.apellido} onChange={(e) => validarApellido(e)}/>
            </div>

            <div>
                <h1>Email</h1>
                <input value={datos.email} />
            </div>

            <div>
                <h1>Contraseña</h1>
                <input value={datos.contraseña1} onChange={(e) => validarContraseña1(e)}/>

                <h1>Repite contraseña</h1>
                <input value={datos.contraseña2} onChange={(e) => validarContraseña2(e)}/>
            </div>

            <div>
                <button>SIGUIENTE</button>
            </div>
        </div>
    );
};