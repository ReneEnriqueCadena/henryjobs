import styled from "styled-components";

export const AlumnCont=styled.div`

width:100%;
height:120vh;
margin-top: -10em;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;



div{
   
    margin-bottom: 1em;
    font-size: 1.5em;
    display:flex;
    margin-left:1em;
}

button{
    width:7.5em;
    heigth:2em;
    background-color: #fffc04;
    padding:1em;
    border-radius: 10px;
    font-family: Avenir Heavy;

    &:active{
        background-color:black;
        color:yellow;
        border:1px solid  #fffc04;
    }
}

`