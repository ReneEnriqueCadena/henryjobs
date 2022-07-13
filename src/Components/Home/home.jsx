import React,{useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import HomeForStaff from "./HomeForStaff/HomeForStaff";
import HomeBusinessLogic from "./HomeForBusiness/HomeBusinessLogic";
import HomeStudentsLogic from "./HomeForStudents/HomeStudentsLogic";
import { getInfoUser } from "../../reducer/actions/actionPost";
import UserForm from "../Register_form/completeForm";
import PubliSettings from "./PublicationSet/publicationSettings";
import { ContSetting, HomeCont } from "./PublicationSet/SetCont/styleContsHome";


export default function Home() {
    
    const [userI, setUserI] = useState('');
    const [userT, setUserT] = useState('');
    const tal = localStorage.getItem('TK')
    const userType = JSON.parse(tal);

    useEffect(()=> {
        if(userType !== null){
            setUserT(userType.type)
            setUserI(userType.id)
        }
    },[tal])


    return(

        <HomeCont>
            
            

            {   
                userT === '' ? null :

                userT === 4 || userT === 5 ?
            
                <ContSetting>
                <PubliSettings/> 
                <HomeBusinessLogic id={userI}/>
                </ContSetting>
                : 
                
                userT === 1 || userT === 2? 

                <ContSetting>
                <PubliSettings/> 
                <HomeStudentsLogic id={userI}/>
                </ContSetting>
                :

                userT === 3 ?

                <ContSetting>
                <HomeForStaff/>
                </ContSetting>

                :
                
                userT === 0 ? 
                
                <UserForm/> 
                
                :null
                
            }


        </HomeCont>

    )
}