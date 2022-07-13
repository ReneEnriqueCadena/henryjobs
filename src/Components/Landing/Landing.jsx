import React from "react";
import { useDispatch } from "react-redux";
import Carousel from "./booms/cardBoom";
import VertiNav from "./booms/nav2/nav2";
import { LandingCont } from "./LandingStyles/vertiNav";



export default function Landing(){
    const dispatch=useDispatch();

    // useEffect(()=>{
    //     localStorage.removeItem('TK')
    //     localStorage.clear()
    //     dispatch(setLogout())
    // },[])
    



    return(
        <LandingCont>
                <VertiNav/>
                <Carousel/>
        </LandingCont>

    )
}