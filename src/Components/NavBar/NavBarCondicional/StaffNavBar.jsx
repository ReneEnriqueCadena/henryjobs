import React from "react";
import { useSelector } from "react-redux";
import ButtonHome from "../buttons/buttonHome";
import { StaffNavCont } from "../../Home/HomeForStaff/StaffStyles/staffStyles";


export default function StaffNavBar () {

    const logout = useSelector((state) => state.fetchPostReducer.response);

    
    return(
        <StaffNavCont>
        
            {
                logout ?
                    <div>
                       <ButtonHome/>
                    </div>
                    : null
            }

        </StaffNavCont>
    );
};