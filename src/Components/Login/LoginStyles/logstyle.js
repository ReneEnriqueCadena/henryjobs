import styled from "styled-components";

export const LoginnCont= styled.div`
margin-top: -20em;
width:100%;
height: 130vh;

display:flex;
align-items:center;
justify-content:center;

background-color: rgb(134 138 138 / 19%); 

`

export const ConteinLogin = styled.div`

margin-top: 15em;
border-radius: 10px;
background-color: #212329;
width:30%;
height:60%;

.incorrecto {
    color: red;
    margin-bottom: 1.3em;
}

.conteinter{
    
    width:5em;
    height:5em;
    img{
        width:100%;
    }
}

.contLog{
    
    width:100%;
    height:100%;
    margin-top: 3em;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    div{
        margin-bottom: 1em;

        input{

            width:16em;
            padding: 1em;
            border-radius: 10px;
            border 1px solid black;  
            font-family: AVENIR HEAVY;
        }
    }
}


.BTN{
    width: 100%;
    display: flex;
    justify-content: space-between;
   

    a{
        text-decoration: none;
        color: black;
    }

    button{
      

        &:active{
            background-color: black;
            color: yellow;
            border:1px solid yellow;
        }

    }
}

.inputs{
       
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
}




.x{

    position: absolute;
    margin-left: 26%;
    margin-top: 1em;
    
    border-radius: 50%;
    width: 2em;
    height: 2em;
    overflow: hidden;
   
    button{
      width: 100%;
      border-radius: 50%;
    }

    a{
        text-decoration: none;
        color: black;
    }

    button{
        &:active{
            background-color: black;
            color: yellow;
            border:1px solid yellow;
        }

    }
   
  
}


.other{
    width: 50%;
   
  

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -1em;


    div{

        border-radius: 50%;
        width: 2em;
        height: 2em;

    //     box-shadow: 9px 8px 5px -4px rgb(252 252 252 / 75%);
    // -webkit-box-shadow: 6px 2px 5px -4px rgb(252 252 252 / 42%);
    // -moz-box-shadow: 9px 8px 5px -4px rgba(252,252,252,0.75);
        &: active{
            box-shadow: box-shadow:
            7px 6px 28px 1px rgba(0, 0, 0, 0.24);
          transform: translateY(4px);
        }
        

    
        .another{
            
            font-size: 2em;
        }
    }


}


.second{
    
    // top: 75%;
    // right: 45%;
    display:flex;
     align-items:center;
     justify-content: center;
     flex-direction column;
     margin-bottom: 2em;
    
}


`

export const ButtonGoogle= styled.button`

background-color: transparent;
border:none;
padding:0;
border-radius: 50%;
width: 3.5em;
height: 3.5em;
border:1px solid red;
overflow: hidden;

.goo{
    font-size: 2em;
    border: 1px solid red;
}

`


export const ButtonGH= styled.button`

border: 1px solid red;

color: white;

`