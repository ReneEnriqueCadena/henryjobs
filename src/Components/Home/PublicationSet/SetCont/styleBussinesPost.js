import styled from 'styled-components';


export const PublicationBussines= styled.div`

border-top: 2px solid yellow;


`


export const DivInput= styled.div`


height: auto;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top:1em;


input{
    padding: 1em;
    border: 1px solid black;
    border-radius: 10px;
    width: 80%;
}

button{
    width:20%;

    &:active{
        border: 1px solid yellow;
        background-color: black;
        color: yellow;
    }
}

`

export const DivSettings = styled.div`
width: 100%;


display: flex;
align-items:center;
justify-content: space-around;
flex-direction: column;


div{
    width:100%;
}

select{
    width:20%;
    padding: 1em;
    border: 1px solid black;
    border-radius: 10px;
    background-color: yellow;
    
   
}


.Selects{
    display: flex;
    align-items:center;
    justify-content: space-around;
    margin-top: 1em;
}



`


export const TechDiv= styled.div`


width:100%;
height: 3em;

display: flex;
align-items:center;
justify-content:space-around;


div{
   
   background-color:black;
   color: yellow;
   border: 1px solid yellow;
   border-radius: 10px;
   width:auto;
   height:1.5em;
    display: flex;
    align-items:center;
    justify-content: space-around;

button{
    width:1em;
    height:1em;
    background-color: black;
    border: none;
    color: yellow;
    border-radius: 50%;
}
}
p{
    
    font-size: 1em;
    width:auto;
    margin-right: 1em;
    
}

`