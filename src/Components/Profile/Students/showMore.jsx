import React from "react";
import { More } from "../profileStyles/studentCV";

export default function MostrarMas(acercaDe){
  console.log(acercaDe)
    return(
        <More>
        <div>
        <input type="checkbox" className="read-more-state" id="post-1" />
      


        
        <p className="read-more-wrap">{acercaDe.acerca !== undefined && acercaDe.acerca[0 , 258]}<span className="read-more-target"> {acercaDe.acerca !== undefined && acercaDe.acerca[259 , -1]}</span></p>
        
        <label for="post-1" className="read-more-trigger"></label>
      </div>
      
      <div>
        <input type="checkbox" className="read-more-state" id="post-2" />
      </div>

      </More>
    )
}