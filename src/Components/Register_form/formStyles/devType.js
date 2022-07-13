import styled from "styled-components";


export const DevTypeCont= styled.div`
width: 100%;
height:80%;

display:flex;
align-items:center;
flex-direction:row;
justify-content:center;

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

export const Type= styled.div`

margin-right: 5em;
width:50%;
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;

div{
    margin-bottom: 1em;
    font-size: 1.5em;
    display:flex;
    margin-left: 1em;
}



`


export const TechLenguage=styled.div`
top:0
border: 1px solid white;
width:50%;
height:90%;

display:flex;
align-items:center;
justify-content:center;
flex-direction:column;


`

export const Frontend= styled.div`


width:100%;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;

img{
    width:2em;
    height:2em;
    
    margin-bottom: 1em;
}

div{
    
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-bottom: 1em;
}

`


export const LenguageCont= styled.div`

width: 100%;
display:flex;
align-items: center;
justify-content:center;

img{
    
    width:2em;
    height:2em;
}

div{
    margin-right: 2em;
}

`

export const Backend=styled.div`

width:100%;
height: 5em;

display:flex;
align-items: center;
justify-content: center;


img{
    
    width:2em;
    height:2em;
}

div{
    margin-right: 2em;
    
}

margin-bottom: 1em;

`