import React from "react";
import { useSelector } from "react-redux";
import BusinessProfile from "./Bussines/business_profile";
import RecruiterProfile from "./Recruiter/recruiter_profile";
import StudentsProfile from "./Students/students_profile";

export default function ProfileLogic(){

    const userType = useSelector((state) => state.fetchInfoUserReducer.userType)

    return(
        <div>

            {
                userType === 1 || userType === 2 ?  <StudentsProfile/>
                
                :

                userType === 4 || userType === 5 ? <BusinessProfile/>
                
                :
                
                null
            }

        </div>
    )
}