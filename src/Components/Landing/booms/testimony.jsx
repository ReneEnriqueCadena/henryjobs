import React from "react";
import Bussines from "./data/dataImage";
import { TestimonyDiv, GridDiv,TittleTestimony } from "../LandingStyles/testimony";
import albo from "../../images/Albo-opinion.png"



export default function Testimony(){
    const bussinesArray= Bussines;
    return(
        <TestimonyDiv>
             <img src={albo} alt='testimonio-albo'/>
            {/* <TittleTestimony>
               
            <h1>EMPRESAS QUE NOS ELIGEN</h1>
           
            </TittleTestimony>
            
            <GridDiv>
            {
                bussinesArray.map(bussines=>{
                    return(
                        <div>
                            
                            <img src={bussines}/>
                        </div>
                    )
                })
            }
            </GridDiv> */}
            
        </TestimonyDiv>
    )
}


