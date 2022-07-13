import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  { ContPremium } from "./premiumStyle/premium";

export default function PremiumCard () {


  const [userT, setUserT] = useState();

  const tal = localStorage.getItem('TK')
  const userType = JSON.parse(tal);
    
  useEffect(() => {
    if(userType !== undefined && userType !== null){
      setUserT(userType.id)
    } 
  },[userType])



  return (
    <ContPremium >
      
            <h1 >HenryJobs plan premium!</h1>
            <h3>
            - Accede a HenryJobs premium <br/><br/>
             para poder utilizar la herramienta de HenryStar! <br/>
            </h3>
            <Link to={`/checkout1/${userType.id}`}><button>Premium</button></Link>
         
      </ContPremium>

  );
}





