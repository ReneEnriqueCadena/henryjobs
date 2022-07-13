import React from "react";
import { FAQ, Conteiner } from "../LandingStyles/footer";
import { useState } from "react";
import Accordion from "./Accordion";
import astronauta from "../../images/astronauta-pregunta.png"
export default function Faq () {
const [active, setActive] = useState("")

return (
    <Conteiner>
        <div className="contenedorImg">
            <img src={astronauta} alt="astronauta"/>
        </div>
    <FAQ>
        <h1>Preguntas Frecuentes</h1>
       <Accordion title="¿Que es Henry Jobs?" p='Es una app que facilita el contacto entre alumno/reclutador, y acelera el trabajo del staff de henry' active={active} setActive={setActive} />
       <Accordion title="¿Siendo reclutador puedo acceser a Henry Jobs?" p='Si claro, podes hacerlo registrandote en la plataforma como Reclutador'active={active} setActive={setActive} />
       <Accordion title="¿Cómo puedo formar parte de Henry?" p='Podes hacer el ingreso desde en el enlace de Admisiones'active={active} setActive={setActive} />
       <Accordion title="¿Cómo me registro?" p='' active={active} setActive={setActive} />
    </FAQ>
    </Conteiner>
)
}