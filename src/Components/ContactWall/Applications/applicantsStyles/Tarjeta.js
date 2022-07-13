import styled from "styled-components";

export const Contenedor = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
min-height: 120vh;

.NoPost {
    position:fixed;
    top: 12em;
    color:yellow;
    text-decoration:none;
}

`

export const Card = styled.div`
padding: 0.8em;
margin-top: 2em;
background-color: #1A1B1E ;
border-radius: 0.5em;
width: 60%;
display: flex;
align-items:center;
justify-content: center;

flex-direction: column;
border: none;
padding-bottom: 5px;
min-height:10em;



.nombre {
    background-color: yellow;
    border-radius: 20px;
    color:black;
    width: 70%; 
    font-size: 1.7em;
    position:relative;
    display:flex;
    justify-content:center;
    margin-bottom: 1em;
}

.email {
    position:relative;
    top: 12%;
    padding-bottom: 0.5em;
}

.pend {
    align-items: center;
    justify-content:center;
    width: 230px;
    height: 50px;
    background-color: black;
    border-radius: 0.5em;
    color: yellow;
}

.rech {
    align-items: center;
    justify-content:center;
    width: 230px;
    height: 50px;
    background-color: black;
    border-radius: 0.5em;
    color: red;

}

.acep {
    align-items: center;
    justify-content:center;
    width: 230px;
    height: 50px;
    background-color: black;
    border-radius: 0.5em;
    color: #0eda07;
}
`