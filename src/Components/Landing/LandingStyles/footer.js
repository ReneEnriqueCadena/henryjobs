import styled from 'styled-components';

export const Contenedor = styled.div`
background: white;
display:flex;
flex-direction: row;
justify-content: flex-end;
align-items: baseline;
font-size: 14px;
a{
    color: black;
    text-decoration: none;
    padding-right: 1rem;
    padding-left: 1rem;
}
p{
    color: #black;
    text-decoration: none;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-block-end: auto;
}
`

export const Redes = styled.div`
display:flex;
align-items: center;
padding-right: 1rem;
a{
    text-decoration: none;
    padding-right: 1rem;
    padding-left: 1rem;
}

// .linkedin{
//     box-shadow: 10px 10px 5px 0px rgb(0 0 0 / 75%);
// -webkit-box-shadow: 1px 5px 5px 2px #ffeb3b;
// }
a:hover{
    box-shadow: 6px 6px 5px 0px #ffeb3b;
}
`

export const ContentForm = styled.div`
width: 100%;
height: 100vh;
display:flex;
align-items: center;
justify-content: center;
input{
    border:none;
    // border: solid yellow;
    border-radius: 0.5rem;
    background: white;
    align-content: normal;
    height: 2rem;
    width: 90%;
    margin-block-start: 0.7rem;
    color:black;
    font-size: 12px;
}
label{
    font-size: 16px;
    color: yellow;
    margin-top: 1.5rem;
}
form{
    width: 40%;
    height: 40vh;
    display: flex;
    flex-direction: row;
}
.datos{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

}
.mensaje{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
}
button:hover{
        background-color: black;
        color:rgb(255, 255, 255);
        border:2px solid #fffc04;
    }
span{
    display: flex;
    width: 100%;
    height: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
textarea{
    height: 72%;
    width: 93%;
    border: solid yellow;
    border-radius: 0.5rem;
    background: black;
    align-content: normal;
    color: grey;
    padding: 0.5rem;
    font-family: unset;
    font-size: 16px;
}
`

export const FAQ = styled.div`
    // width: 100%;
    // height: 100vh;  
    // display: flex;
    // justify-content: center;
    // align-items: center;
width:100%;
min-height: 100vh;
margin-right: 25%;
background: none;

h1{
    font-size: 37px;
    font-weight: bolder;
    color:white;
}
`

export const Conteiner = styled.div`
    display: flex;

.contenedorImg{
    display: flex;
    justify-content: center;
    align-items: center;
}

img{
    width: 75%;
}
`