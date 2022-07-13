import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AlumnCont } from "../formStyles/faceAlumn";
import { Switch, Error } from "../formStyles/formStyles";
import { setUserType } from "../../../reducer/actions/actionPost";


export default function Instance({sumarFase,instancia, setInstancia}) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [ instance, setInstance ] = useState("");
  const [ error, setError ] = useState("");

  const handleSubmit = (e) => { ///////////////////////////////////////////// SUBMIT //////////////////////
    e.preventDefault();
    
    if(!instance){
      setError("Selecciona una instancia");
    }
    else{
      setError("");
      if(instance === "PG"){
        dispatch(setUserType(1));
      }
      else if(instance === "Graduate"){
        dispatch(setUserType(2));
      }
      sumarFase();
    }
  };

  const settingValue = (e) => {
    if(e.target.checked === true){
      if(e.target.value === "Graduate"){
        setInstance(e.target.value);
        document.getElementById('PG').checked = false;
      }
      else if(e.target.value === "PG"){
        setInstance("PG");
        document.getElementById('Graduate').checked = false;
    }
  }
  };

  return (
    <AlumnCont>
      
        <h1>¿En qué instancia estas actualmente?</h1>
      

      <div>
        <label>Proyecto Final</label>
        <Switch>
        <label className="switch">
        <input type="checkbox" id='PG' value={'PG'} onClick={(e) => settingValue(e)}/>
         <span className="slider round"></span>
        </label>
        </Switch>
        
      </div>

      <div>
        <label>Alumno Egresado</label>
        <Switch>
        <label className="switch">
        <input type="checkbox" id="Graduate" value={'Graduate'} onClick={(e) => settingValue(e)}/>
         <span className="slider round"></span>
        </label>
        </Switch>
      
      </div>

      { error && <Error>{error}😡</Error> }

      <button type="submit" value={"siguiente"} onClick={(e) => handleSubmit(e)}>Siguiente</button>
    </AlumnCont>
  );
};
