import React from "react";
import { PersentCont } from "./StaffStyles/staffStudentCards";


export default function Persent(){
    return(
        <PersentCont>
          <div className="progress mx-auto" data-value='80'>
          <span className="progress-left">
                        <span className="progress-bar border-primary"></span>
          </span>
          <span className="progress-right">
                        <span className="progress-bar border-primary"></span>
          </span>
          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
            <div className="h2 font-weight-bold">80<sup className="small">%</sup></div>
          </div>
        </div>
       </PersentCont>

    )
}