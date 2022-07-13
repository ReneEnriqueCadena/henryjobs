import styled from "styled-components";

export const EmpresaContenedor = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 120vh;
align-items: center;
`


export const CartaBusiness = styled.div`
padding: 1em;
background-color: #1A1B1E ;
border-radius: 0.5em;
display: flex;
// align-items:center;
// justify-content: center;
flex-direction: column;
border: none;
margin-bottom: 1.7em;
width: 60%;
margin-top: 1px

button {

}

.borrar {
    margin-left: 85%;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background-color:red;
        border: 1px solid red;
        color: white;
    }
}

.contenedorAlumnos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.Alumno {
    display: flex;
    flex-direction: column;
    align-items:center;
    margin: 1em;
    border: 3px double black;
    border-radius: 0.5em;
    padding: 1em;

    .nombre {
        font-weight: 600;
    }

    .botoncito {
        // margin-top: -2.5em;
    }

    .pend {
        margin-top: -1.5em;
        margin-bottom: 1.5em;
        color: yellow;
    }
    
    .rech {
        margin-top: -1.5em;
        margin-bottom: 1.5em;
        color: red;
    }
    a {
        text-decoration: none;
    }
    .acep {
        margin-top: -1.5em;
        margin-bottom: 1.5em;
        color: #0eda07;
    }

    button {
        margin-bottom: 1em;
        cursor: pointer;
        font-weight: 500;
    }

    

}
`