import styled from 'styled-components';



export const ModalEdit= styled.div`


width: 100%;
min-height:300vh;
margin-top: -30em;

background-color: rgb(134 138 138 / 19%);

display: flex;
align-items: center;
justify-content: center;



`

export const InnerModal = styled.div`


border-radius: 10px;
background-color:#212329;

width: 70%;
height: 80em;

display: flex; 
align-items:center;
justify-content: space-around;
flex-direction:row-reverse;

box-shadow: 6px 7px 5px 0px rgb(255 255 255 / 75%);
    -webkit-box-shadow: 0px 4px 10px 0px rgb(158 158 158 / 45%);
    -moz-box-shadow: 6px 7px 5px 0px rgba(255,255,255,0.75);


`

export const EditCloseButton= styled.div`
width: 2em;
height: 2em;
border-radius: 50%;
overflow: hidden;
display: flex; 
align-items: center;
justify-content: center;
margin-top: -77em;
margin-right: 1em;


button{
   
    width:100%;
    height:100%;

    &:active{
        border-radius: 50%;
        border: 1px solid yellow;
        color: yellow;
        background-color: black;
    }
}

a{
    width: 2em;
    height: 2em;
    text-decoration: none;
   
    color: black;
    border-radius:50%;
 
}



`

export const Fotos = styled.div`



width:50%;
height:100%;
 display: flex;
  align-items:center;
  justify-content: space-around;
  flex-direction: column;
  

.inner{
  
    width:20em;
    height:20em;
   
    display: flex;
    align-items: center;
    justify-content: center;
    
    border: 3px dashed #414550;
    overflow:hidden;
    margin-bottom: 1em;


    .puto{
        font-size: 5em;
        color:#414550;
    }
    img{
        width: 100%;
        height:100%;
    }
}

.cont{
   
    display: flex;
    align-items:center;
    justify-content: space-around;
    flex-direction: column;
}


button{
    &:active{
        background-color:black;
        color: yellow;
        border:1px solid yellow;
    }
}

`

export const NameLast= styled.div`


width:50%;
height:5em;

display:flex;
align-items: center;
justify-content: space-around;
flex-direction: column;

div{
    display: flex;
    align-items:center;
    justify-content: center;

}


label{
    margin-right:1em;
    
}

`


export const RedesEdit= styled.div`


width:100%;
height:auto;

display:flex;
align-items: center;
justify-content: space-around;
flex-direction: column;


`

export const Cont2= styled.div`



width: 50%;
height: 100%;

display: flex;
align-items:center;
justify-content: space-around;
flex-direction: column;



input{
    width:80%;
    padding: 1em;
    border-radius: 10px;
    border:1px solid black;
    margin-bottom:1em;
}

.gh{
    margin-right: 1em;
    font-size: 1.5em;
}
.ln{
    margin-right: 1em;
    color: #0a66c2;
    font-size: 1.5em;
}
.mail{
    margin-right: 1em;
    color: #d93025;
    font-size: 1.5em;
}

div{
    display:flex;
    align-items:center;
    justify-content: center;
}






`


export const SelectorCou= styled.div`


width: 100%;


display: flex;
align-items:center;
justify-content: space-around;
flex-direction: column;


div{
    width:100%;
}

select{
    width:80%;
    padding: 1em;
    border: 1px solid black;
    border-radius: 10px;
    background-color: yellow;
    margin-left: 2em;
   
}

`


export const Foto1= styled.div`
border: 1px solid yellow;
position: absolute;
margin-top: -17em;
margin-right:20%;
width: 2em;
height:2em;
border-radius: 50%;
display: flex;
align-items:center;
justify-content: center;


.ph{
    color: yellow;

}




`

export const Foto2= styled.div`
border: 1px solid yellow;
position: absolute;
margin-top: -15em;
margin-right:20%;
width: 2em;
height:2em;
border-radius: 50%;
display: flex;
align-items:center;
justify-content: center;


.ph{
    color: yellow;

}




`

export const TecOther= styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

select{
    width: 100%;
    padding: 1em;
    background-color: yellow;
    border-radius: 10px;
    option{
        background-color: yellow;
    }
}

.buttClose{
    width:auto;
    height:1em;
    padding: .5em;
    border: 1px solid yelow;
    border-radius: 20px;
    background-color: black;
    color: yellow;

    margin-top: 1em;
    margin-bottom: 1em;

   

    p{
        margin-left: .5em;
        margin-right: .5em;
    }
    button{
        color:yellow;
        background-color: black;
        border:none;
        width:1em;
        height:1em;
        border-radius:50%;
    }

    .contB{
        border: 1px solid white;
    }
}

.st{
    display:flex;
    align-items:center;
    justify-content: center;
    button{
        padding: 1.3em;
        margin-top:-1em;
    }
}

`

export const AboutAs= styled.div`

display: flex; 
align-items: center;
justify-content: center;
flex-direction: column;

input{
    padding: 2em;
    width: 100%;
    border-radius: 10px:
    border: 1px solid yellow;
}
`

export const Eng= styled.div`

width: 100%;
display:flex;
align-items:center;
justify-content: center;
flex-direction: column;

select{
    width: 50%;
    padding: 1em;
    background-color: yellow;
    border-radius: 10px;
    option{
        background-color: yellow;
    }
}



`