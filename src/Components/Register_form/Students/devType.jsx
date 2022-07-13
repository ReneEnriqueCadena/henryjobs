import React, { useState } from "react";
import javascript from "./img/javascript.png";
import typescript from "./img/typescript.png";
import python from "./img/python.png";
import react from "./img/react.png";
import redux from "./img/redux.png";
import react_native from "./img/react-native-logo.png";
import css  from "./img/css.png";
import angular from "./img/angular.png";
import tailwind from "./img/Tailwind_CSS_Logo.svg.png";
import laravel from "./img/laravel.png";
import vue from "./img/vue.png";
import express from "./img/express.png";
import php from "./img/php.png";
import sql from "./img/sql.png";
import postgres from "./img/Postgresql_elephant.svg.png";
import { useNavigate } from "react-router-dom";
import { DevTypeCont, Type, TechLenguage, Frontend, LenguageCont, Backend } from "../formStyles/devType";
import { Switch, SwitchChiquito } from "../formStyles/formStyles";
import { Error } from "../formStyles/formStyles";
import { useDispatch } from "react-redux";
import { setDevTypeAndTech } from "../../../reducer/actions/actionPost";


export default function DevType({sumarFase}) {
  const dispatch = useDispatch();
  const [ devType, setDevType ] = useState("");
  const [ tech, setTech ] = useState({
    languages:[],  
    frontend:[],   
    backend:[]     
  });

  const [ error, setError ] = useState("");
  
  const selectDevType = (e) => {
    if(e.target.checked === true){
      if(e.target.value === "Frontend"){
        setDevType(e.target.value);
        document.getElementById('Backend').checked = false;
        document.getElementById('Fullstack').checked = false;
      }
      if(e.target.value === "Backend"){
        setDevType(e.target.value);
        document.getElementById('Frontend').checked = false;
        document.getElementById('Fullstack').checked = false;
      }
      if(e.target.value === "Fullstack"){
        setDevType(e.target.value);
        document.getElementById('Frontend').checked = false;
        document.getElementById('Backend').checked = false;
      }
    }
    else{
      setDevType("");
    }
  }

  // esta funcion setea el estado de tech
  // como saber si los inputs type checkbox estan seleccionados o no ? => con e.target.checked, 
  // esto devuelve true o false 
  const handleProgLangs = (e) => {  // aplicar esta funcion a todos los inputs que tengan checkbox
    if(e.target.checked === true){ // si el checkbox esta seleccionado
      if(tech[e.target.name].includes(e.target.value)){
        return; // si el value ya esta agregado al estado, sale de la funcion
      }else{   // sino aca lo agrega
        return setTech({...tech, [e.target.name]: [...tech[e.target.name], e.target.value]});
      }
    }
    else{  // si el checkbox fue desmarcado, quita ese valor del arreglo de tecnologias
      return setTech({...tech, [e.target.name]: tech[e.target.name].filter(el => el !== e.target.value)});
    }                  
  };


  
  
  const handleSubmit = (e) => { /////////////////////////////////////////////// SUBMIT /////////////////////////
    e.preventDefault();
    if(devType === "" || tech.languages.length === 0 || tech.frontend.length === 0 || tech.backend.length === 0){
      return setError("tienes que seleccionar al menos un lenguaje ó tecnología en cada instancia")
    }
    else{
      setError("")

      const devtech = {
        backfront: devType,
        technologies: [...tech.languages, ...tech.frontend, ...tech.backend]
      };

      dispatch(setDevTypeAndTech(devtech));

      sumarFase();
    }
  };

  return (
    <DevTypeCont>
      <Type>

        <div>
          <h3>¿Qué tipo de desarrollador Eres?</h3>
        </div>

        <div>
          <label>Frontend</label>

        <Switch>
        <label className="switch">
        <input type="checkbox" id="Frontend" name="devType" value={'Frontend'} onClick={(e) => selectDevType(e)}/>
         <span className="slider round"></span>
        </label>
        </Switch>
        </div>

        <div>
          <label>Backend</label>
          <Switch>
        <label className="switch">
        <input type="checkbox" id="Backend"  name="devType" value={'Backend'} onClick={(e) => selectDevType(e)}/>
         <span className="slider round"></span>
        </label>
        </Switch>
        </div>

        <div>
          <label>Fullstack</label>
          <Switch>
        <label className="switch">
        <input type="checkbox" id="Fullstack" name="devType" value={'Fullstack'} onClick={(e) => selectDevType(e)}/>
         <span className="slider round"></span>
        </label>
        </Switch>
        </div>


      </Type>

      <TechLenguage>
        <div>
          <h2>¿Qué tecnologias usas?</h2>
        </div>

            <h2>Lenguajes</h2>
        <LenguageCont>
           <div>
            <img src={javascript} title="Javascript" alt="Javascript" width={"70px"} />

            <SwitchChiquito>
            <label className="switch">
            <input name="languages" value={"Javascript"} type="checkbox" onClick={(e) => handleProgLangs(e)}/>
            <span className="slider round"></span>
            </label>
            </SwitchChiquito>
            </div>
            <div>
            <img src={typescript} title="Typecript" alt="Typescript" width={"70px"} />
            <SwitchChiquito>
            <label className="switch">
            <input name="languages" value={"Typecript"} type="checkbox" onClick={(e) => handleProgLangs(e)}/>
            <span className="slider round"></span>
            </label>
            </SwitchChiquito>
            </div>
            <div>
            <img src={python} title="Python" alt="Python" width={"70px"} />
            <SwitchChiquito>
            <label className="switch">
            <input name="languages" value={"Python"} type="checkbox" onClick={(e) => handleProgLangs(e)}/>
            <span className="slider round"></span>
            </label>
            </SwitchChiquito>
            </div>
        </LenguageCont>

            <h2>Frontend</h2>
        <Frontend>
            <div>
            <img src={react} title="React" alt="React" width={"70px"} />
            
            <SwitchChiquito>
            <label className="switch">
             <input name="frontend" value={"React"} type="checkbox" onClick={(e) => handleProgLangs(e)}/>
            <span className="slider round"></span>
            </label>
           </SwitchChiquito>
            </div>

            <div>
            <img src={redux} title="Redux" alt="Redux" width={"70px"} />
            <SwitchChiquito>
            <label className="switch">
            <input name="frontend" value={"Redux"} type="checkbox" onClick={(e) => handleProgLangs(e)}/>
            <span className="slider round"></span>
            </label>
            </SwitchChiquito>
            </div>

            <div>
            <img src={react_native} title="React Native" alt="React Native" width={"70px"} />
            <SwitchChiquito>
            <label className="switch">
            <input name="frontend" value={"React Native"} type="checkbox" onClick={(e) => handleProgLangs(e)}/>
            <span className="slider round"></span>
            </label>
            </SwitchChiquito>
            </div>

            <div>
            <img src={css} title="CSS" alt="CSS" width={"70px"} />
            <SwitchChiquito>
            <label className="switch">
            <input name="frontend" value={"CSS"} type="checkbox" onClick={(e) => handleProgLangs(e)}/>
            <span className="slider round"></span>
            </label>
            </SwitchChiquito>
            </div>

            <div>
            <img src={angular} title="Angular" alt="Angular" width={"70px"} />
            <SwitchChiquito>
            <label className="switch">
            <input name="frontend" value={"Angular"} type="checkbox" onClick={(e) => handleProgLangs(e)}/>
            <span className="slider round"></span>
            </label>
            </SwitchChiquito>
            </div>

            <div>
            <img src={tailwind} title="Tailwind" alt="Tailwind" width={"70px"} />
            <SwitchChiquito>
            <label className="switch">
            <input name="frontend" value={"Tailwind"} type="checkbox" onClick={(e) => handleProgLangs(e)}/>
            <span className="slider round"></span>
            </label>
            </SwitchChiquito>
            </div>

            <div>
            <img src={laravel} title="Laravel" alt="Laravel" width={"70px"} />
            <SwitchChiquito>
            <label className="switch">
            <input name="frontend" value={"Laravel"} type="checkbox" onClick={(e) => handleProgLangs(e)}/>
            <span className="slider round"></span>
            </label>
            </SwitchChiquito>
            </div>

            <div>
            <img src={vue} title="Vue" alt="Vue" width={"70px"} />
            <SwitchChiquito>
            <label className="switch">
            <input name="frontend" value={"Vue"} type="checkbox" onClick={(e) => handleProgLangs(e)}/>
            <span className="slider round"></span>
            </label>
        </SwitchChiquito>
            </div>
        </Frontend>


            <h2>Backend</h2>
        <Backend>
            
            <div>
            <img src={express} title="Express JS" alt="Express Js" width={"70px"} />
          
            <SwitchChiquito>
            <label className="switch">
            <input name="backend" value={"Express Js"} type="checkbox" onClick={(e) => handleProgLangs(e)}/>
            <span className="slider round"></span>
            </label>
            </SwitchChiquito>
            </div>

            <div>
            <img src={php} title="Php" alt="Php" width={"70px"} />
            <SwitchChiquito>
            <label className="switch">
            <input name="backend" value={"Php"} type="checkbox" onClick={(e) => handleProgLangs(e)}/>
            <span className="slider round"></span>
            </label>
            </SwitchChiquito>
            </div>

            <div>
            <img src={sql} title="SQL" alt="SQL" width={"70px"} />
            <SwitchChiquito>
            <label className="switch">
            <input name="backend" value={"SQL"} type="checkbox" onClick={(e) => handleProgLangs(e)}/>
            <span className="slider round"></span>
            </label>
            </SwitchChiquito>
            </div>

            <div>
            <img src={postgres} title="PostgreSQL" alt="PostgreSQL" width={"70px"} />
            <SwitchChiquito>
            <label className="switch">
            <input name="backend" value={"PostgreSQL"} type="checkbox" onClick={(e) => handleProgLangs(e)}/>
            <span className="slider round"></span>
            </label>
            </SwitchChiquito>
            </div>
        </Backend>
      {error && <Error>{error}😡</Error>}
      <button type="submit" onClick={(e) => handleSubmit(e)}>Siguiente</button>

      </TechLenguage>
      
    
    </DevTypeCont>
  );
};
