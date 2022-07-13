import React, { useState, useRef, useEffect } from "react";
import { useScript } from "../hooks/useScript";
import jwt_deocde from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle, setGoogleUser } from "../../../reducer/actions/actionPost";
import { Goo } from "./goobutton";
const App = () => {
  const dispatch = useDispatch();

  const googlebuttonref = useRef();

  let USER = useSelector(state => state.fetchPostReducer.GOOGLEUSER);
  
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_deocde(userCred);
    console.log(payload);

    // accion que lleve el payload al reducer
    dispatch(setGoogleUser(payload))

  };

  useEffect(() => {
    if (USER !== undefined) {
      console.log("soy el objeto USER", USER)
      let obj = {
        userName: USER.name,
        name: USER.given_name,
        lastName: USER.family_name,
        email: USER.email,
        password: "123456789",
        profileImage: {secure_url:"https://res.cloudinary.com/noisybrain-cloud/image/upload/v1657222048/HenryJobs/profileImage_iptpub.jpg"},
        banner: {secure_url:"https://res.cloudinary.com/noisybrain-cloud/image/upload/v1657222059/HenryJobs/banner_pogdok.jpg"}
      };

      console.log("antes de mandar el objeto", obj);
      dispatch(loginWithGoogle(obj));
      
    }
  }, [USER]);

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id:
        "14757573897-908lenjs63v6ma0bs3pi4n5g9ca0r022.apps.googleusercontent.com", // here's your Google ID
      callback: onGoogleSignIn,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "medium",
    });
  });

  return (
    <Goo>
      {!USER && <div className='goosi' ref={googlebuttonref}></div>}
      
    </Goo>
  );
};

export default App;
