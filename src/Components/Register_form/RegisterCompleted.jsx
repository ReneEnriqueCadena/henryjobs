import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setGoogleUser, setLogout } from "../../reducer/actions/actionPost";
import { CompleteStudentCont } from "./formStyles/completeStudent";

export default function RegisterCompleted () {
    const dispatch = useDispatch();
    const name= 'luchosrl';
    const info = useSelector(state => state.fetchPostReducer.upDateProfile);

    useEffect(() => {
        localStorage.clear('TK');
        dispatch(setLogout());
        dispatch(setGoogleUser(false));
    },[]);

    // CUANDO TERMINA EL REGISTRO, SE HACE UN AUTOLOGIN ? O EL USUARIO TIENE QUE LOGEARSE ?
    // EL CODIGO DE ABAJO ESTA HECHO COMO UN AUTOLOGIN
    
    return <CompleteStudentCont>
        <h1>Te has registrado exitosamente!</h1>
        <h1>Bienvenido!!! 🎉🎊🎉</h1>
        
        {/* <h2>Puedes ir a <Link to={'/home'}>Home</Link>, a ver las publicaciones o ingresar a tu <Link to={`/profile/${name}`}>Perfil</Link></h2> */}
        <h2>Por favor vuelve a <Link to={"/login"}>Loggearte</Link></h2>
    </CompleteStudentCont>
};