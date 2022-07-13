import React,{useEffect} from 'react';
import { GoogleLogin } from 'react-google-login';
import {FcGoogle} from 'react-icons/fc'
import { ButtonGoogle } from '../LoginStyles/logstyle';


const responseGoogle = (response) => {
  // console.log(response);
  // console.log(response.profileObj)
}



export default function GoogleLog(){



  // useEffect(() => {
  //   window.google?.accounts.id.initialize({
  //     client_id:
  //     "14757573897-908lenjs63v6ma0bs3pi4n5g9ca0r022.apps.googleusercontent.com",
  //     callback: handleCallbackGoogle,
  //   });

  //   window.google?.accounts.id.renderButton(
  //     document.getElementById("signInDiv"),
  //     {
  //       theme: "outline",
  //       size: "large",
  //       shape: "circle",
  //     }
  //   );
  // });

    return(
    <GoogleLogin
    clientId="14757573897-908lenjs63v6ma0bs3pi4n5g9ca0r022.apps.googleusercontent.com"
    render={ renderProps=>(
      <ButtonGoogle onClick={renderProps.onClick} disabled={renderProps.disabled}><FcGoogle className='goo'/> </ButtonGoogle>
    )}
    
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  
    )
}
