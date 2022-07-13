import styled from 'styled-components';




export const CardRegister= styled.div`



margin-top: 15em;
border-radius: 10px;
background-color: #212329;
width:30%;
height:auto;

display:flex;
align-items: center;
jusrify-content:space-around;
flex-direction: column;


h1{
    color: yellow;
}

div{
    margin-bottom: 2em;

    input{
       

            width:16em;
            padding: 1em;
            border-radius: 10px;
            border 1px solid black;  
            font-family: AVENIR HEAVY;
      
    }

    button{
        &:active{
            background-color: black;
            color: yellow;
            border:1px solid yellow;
        }

    }
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

.cont{
    

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span{
        width: 100%;
        border-radius: 10px;
       
        color: black;
        background-color: yellow;

        
    }
}

`