import { style } from "@mui/system";
import styled from "styled-components";

export const ContenedorAbout = styled.div`
    display: flex;
    justify-content: center;        
`

export const Card= styled.div`
    display: flex;
    width: 60%;
    margin: 3rem;
    flex-direction: column;
    flex-wrap: nowrap;
   
p{
    font-weight: lighter;
}
h1{
    color:yellow;
    font-size:25px;
}
  
img{
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 2rem;
    width: 15rem;
    height: auto;
    background: black;
}
}
span{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    margin: 1rem;
    
}
.contenedor{
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: center;
    align-items: center;
    margin:3rem;
    background: rgb(27,27,27);
    background: linear-gradient(22deg, rgba(27,27,27,1) 0%, rgba(27,27,27,1) 80%, rgba(37,37,37,1) 86%, rgba(27,27,27,1) 92%);
    border-radius:1rem;
    border: 4px solid #151515;
    box-shadow: -5px 4px 20px 0px rgb(44 44 44 / 75%);
}
.linkedin{
    background-color: yello;
}
.icon{
    display:flex;
    // width: 4rem;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 78%;
    text-decoration:none;
    // background-color: white;
}
`