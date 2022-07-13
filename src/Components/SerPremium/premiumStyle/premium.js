import styled from 'styled-components';



export const ContPremium= styled.div`



display: flex;
align-items:center;
justify-content: center;
flex-direction: column;

min-height: 80vh;
width: 50%;

a{
    text-decoration:none;
}

h1{
    font-size: 3em;
    color: yellow;
}

h3{
    color: white;
}

button{
    margin-top:3em;
    margin-left: 80%;
    background-color: transparent;
    color: white;
   
    font-size: 1.5em;
    &:hover{
        text-decoration: underline;
    }
   
}


`

export const PremiumCardasd= styled.div`


display:flex;
align-items:center;
justify-content: space-around;

`