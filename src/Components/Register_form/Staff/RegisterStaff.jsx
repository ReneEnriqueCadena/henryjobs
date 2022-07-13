import React, { useState } from "react";
import StaffForm from "./StaffForm";

export default function RegisterStaff () {
    const [ fase, setFase ] = useState(1);

    if(fase === 1){
        return(
            <StaffForm sumarFase={setFase} />
        );
    }
    else{
        return(
            <div>
                <div><p>Muchas gracias!, tu contraseña será enviada a @soyhenry.com</p></div>
            </div>
        );
    }
};