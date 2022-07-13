import React, { useEffect, useState } from "react";
import Logo from "./Logo/logo";
import { NavbarS, NavButton } from "./NavStyles/navbar";
import BusinessNavBar from "./NavBarCondicional/NavBarBusiness";
import StudentsNavBar from "./NavBarCondicional/NavBarStudents";
import StaffNavBar from "./NavBarCondicional/StaffNavBar";
import LoginApi from "./buttons/LoginApi";
import { useDispatch, useSelector } from "react-redux";
import { useJwt } from "react-jwt";
import { Link, useNavigate } from "react-router-dom";
import RegistroGeneral from "../Register_form/RegistroGeneral";
import { getStudentsByEmail } from "../../reducer/actions/actionStudents";


export default function Navbar() {

  const actualizar = useSelector((state) => state.fetchPostReducer.buggati)
  const [userT, setUserT] = useState('');
  const [ nav, setNav ] = useState(true);

  const tal = localStorage.getItem('TK')
  const userType = JSON.parse(tal);
  
  useEffect(() => {  
    if(userType !== null){
      setUserT(userType.type)
    } else {
      setNav(!nav)
    }
  }, [actualizar])

  return (
    <NavbarS>
      <div>
        <Logo />
      </div>

      <NavButton>

        {
          userT === '' ? null :

            userT === 1 || userT === 2 ?

              <StudentsNavBar />

              :

              userT === 5 || userT === 4 ?

                <BusinessNavBar />

                :

                userT === 3 ?

                  <StaffNavBar />

                  : userT === 0 ?

                    null

                    : null
        }

      </NavButton>
      <LoginApi />
    </NavbarS>
  );
}

// const tal= localStorage.getItem('TK') TRAE UN ITEM DEL STORAGE
    // const SetearItem=localStorage.setItem(tal,'tal') SETEA UN ITEM DEL STORAGE
    // localStorage.clear() LIMPIA TODO EL STORAGE
    // localStorage.removeItem('nombre de item') REMUEVE UN ITEM ESPECIFICO DEL STORAGE
    // const token= JSON.parse(tal) PARSEO EL ITEM A FORMA DE OBJETO