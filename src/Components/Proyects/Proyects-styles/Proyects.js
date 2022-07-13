import styled from "styled-components";
// import "../images/search.png"

export const ComponentCardProyect = styled.div`
// border: solid yellow;
border-radius: 1rem;
background-color: #212329;
display:flex;
width: 70%;
height: 18rem;
margin: 1rem;
padding: 1rem;
    align-items: center;
    justify-content: center
    flex-direction: row;
    flex-wrap: nowrap;

`
export const SearchProyects = styled.div`
display: flex;
justify-content: space-around;
align-content: center;
flex-direction: row;
align-items: center;

button{
    display: flex;
    border-radius: 0.5rem;
    justify-content: center;
    align-items: center;
    border: none;
    background:none;
}
img{
    cursor: pointer;
    width: 2rem;
    height: auto;
}

input{
    width: 25rem;
    height: 2.5rem;
    border: 2px solid;
    border-color: #fdfc06;
    margin: 0.5rem;
    border-radius: 0.5rem;
    background-color: transparent;
    // color: #9e9e9e;
    padding: 1rem;
}

`

export const Usuario = styled.div`
border-top:yellow solid;
color: #9e9e9e;
    display: flex;
    align-items: center;
    width: 100%;
    height: 20%;
    flex-direction: row-reverse;
    justify-content: space-between;

span{
    display:flex;
    align-items: center;
}
img{
    width: 2rem;
    height: auto;
    border-radius: 1rem;
}
p{
    font-size: 12px;
    margin: 1rem;
}
h3{
    color:white;
    margin: 1rem;
    font-size: 18px;
}
`
export const Publicacion = styled.div`

color: white;
width: 100%;
// height: 80%;
display: flex;
justify-content: space-around;
flex-direction: column;

div{
    background-color: #212329;
    width: 95%;
    height: 80%;
    border-radius: 1rem;
    margin: 1rem;
}

p{
    border-radius: 1rem;
    background-color: #212329;
    text-align: justify;
    margin: 1rem;
    display: flex;
align-items: center;
flex-wrap: nowrap;
flex-direction: column;
}


a{

    // width: 50%;
    // height: 20%;
    color: yellow;
    text-decoration: none;
}

span{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
}

`
export const Video = styled.div`
width: 50%;
    height: 90%;
    margin:1rem;
    border-radius: 1rem;

`
export const Description= styled.div`

    background-color: #141519;
    border-end-end-radius: 1rem;
    border-end-start-radius: 1rem;    
    display: flex;
    width: 50%;
    height: 90%;
    font-size: small;
    flex-direction: column;
    justify-content: space-between;
.imagen{
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    margin: 1rem;
}
`
export const StyleModal = styled.div`

h1{
    display:flex;
    color:red;
}
`