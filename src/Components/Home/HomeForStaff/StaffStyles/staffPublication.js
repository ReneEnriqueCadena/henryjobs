import styled from "styled-components";

export const StaffContainer = styled.div`
    width: 90%;
    border-top: 3px solid yellow;
    border-radius: 10px;
    margin-top: 5em;
    margin-bottom: 5em;
    background-color: hsl(228deg 9% 11%);
    margin-left: 1em;


    .text{
       padding: 1em;
        margin-left: 1em;
    }



    .wm{
        margin-left: 1em;
        display:flex;
        align-items: center;
        justify-content: center;
        width: 6em;
        border-radius: 20px;
        border: 1px solid yellow;
        background-color: black;
        color:yellow;
    }
    
`

export const NameMail = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p { 
        margin-right: 1em;
        font-size: 0.7em;
    }
    h3 {
        margin-left: 1em;
    }
`