import React from "react";
import { Link } from "react-router-dom";


export default function ButtonStudentsWall(){

    return (
        <div>
            <Link to='/students'><button>Alumnos</button></Link>
        </div>
    )
}