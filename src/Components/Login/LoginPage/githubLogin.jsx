import React from "react";
import LoginGithub from 'react-login-github';
import {VscGithubInverted} from 'react-icons/vsc';
import { ButtonGH } from "../LoginStyles/logstyle";



const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

export default function GithubLog(){
    return(
        <LoginGithub
        clientId='8eccabf164d5d88227d5'
        render={(renderProp) => (
            <ButtonGH 
            onClick={renderProp.onClick}
            disabled={renderProp.disabled}
            buttonText={<VscGithubInverted className="goo"
            />}
            >
                {/* <VscGithubInverted className="goo"
                /> */}
            </ButtonGH>
            )}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy='single_host_origin'
        />
       
    )
}