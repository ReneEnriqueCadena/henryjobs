import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function DetailStudent(){

    const { id } = useParams();

    console.log(id)

    return (
        <div>
            hi, i'm details to {id}
            <button>
                <Link to='/home'>Back</Link>
            </button>
        </div>
    )
}
