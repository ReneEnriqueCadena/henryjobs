import styled from "styled-components";

// intento de Luciano Components, sentite libre de cambiarlos xd
export const FormDiv = styled.div`


width: 100%;
height: 120vh;
margin-top: -10em;


display:flex;
align-items: center;
justify-content: space-evenly;




`

export const CountryForm= styled.div`



div{
    margin-bottom:2em;
}

select{
    appearance: none;
    padding: 1em;
    border-radius: 10px;
    font-family: Avenir Heavy;
    background-color: white;
    // select-styles: none;

    
        ::-webkit-scrollbar {
            width: 12px;
          }
          
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          
          ::-webkit-scrollbar-thumb {
            background-color: black;
            border-radius: 20px;
            
          }

          &:active{
            border: 1px solid transparent;
          }  
    
}





`

export const EnglishLVL= styled.div`

display:flex;
align-items: center;
justify.content: center;
flex-direction: column;

margin-top: 5px;



select{
    appearance: none;
    padding: 1em;
    border-radius: 10px;
    font-family: Avenir Heavy;
    background-color: white;
    // select-styles: none;

    
        ::-webkit-scrollbar {
            width: 12px;
          }
          
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          
          ::-webkit-scrollbar-thumb {
            background-color: black;
            border-radius: 20px;
            
          }

          &:active{
            border: 1px solid transparent;
          }  
    
}


`

export const OtherStudies= styled.div`


width: 30%;
height:100%;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

input{
    margin-right: 1em;
    padding: 1em;
    border-radius: 10px;
    font-family: Avenir Heavy;
    color:black;
}

div{
    margin-bottom: 1.5em;
}

.agregar{

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


export const ButtonNext= styled.div`


margin-top: 30em;

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


export const ListStyles= styled.div`


border-radius: 10px;
display:flex;
justify-content: center;
align-items: center;
flex-direction: row;
width:auto;
height:2em;

background-color: yellow;
color:black;

p{
    margin-left: 1em;
    margin-rigth: 1em;

}

button{
    width:3em;
    height:2em;
    background-color: yellow;
    border:1px transparent;
    font-size: 0.5em;
    font-family: Avenir Heavy;
    color: black;
}


 


`
