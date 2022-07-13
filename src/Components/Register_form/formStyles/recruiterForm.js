import styled from "styled-components";



export const RecruiterCont= styled.div`


display: flex;
align-items: center;
justify-content: space-between;

width: 100%;
height:120vh;

`


export const QueryReq= styled.div`

margin-top: -15em;


display: flex;
align-items:center;
justify-content: space-around;
flex-direction: column;

input{
        margin-right: 1em;
        padding: 1em;
        border-radius: 10px;
        font-family: Avenir Heavy;
        color:black;
    }



`


export const CountryCont= styled.div`



margin-top: -18.5em;


display: flex;
align-items:center;
justify-content: space-around;
flex-direction: column;


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


export const EnglishNv= styled.div`

display-flex;
align-items: center;
justify-content: center;
flex-direction: column;





select{
    margin-left: 5em;
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

export const TercerCont= styled.div`


margin-top: -17em;


display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

export const InnerStudy= styled.div`

display: flex;



`

export const Studies= styled.div`

width: 30%;
height:auto;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

input{
    
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


export const ButtonNex= styled.div`

width:4.5em;
heigth:2em;
background-color: #fffc04;
padding:1em;
border-radius: 10px;
font-family: Avenir Heavy;
color: black;

&:active{
    background-color:black;
    color:yellow;
    border:1px solid  #fffc04;
}


`