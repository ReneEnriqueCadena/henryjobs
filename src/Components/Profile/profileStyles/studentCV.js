import styled from 'styled-components'


export const CV= styled.div`

margin-top: -47em;
width: 60%;
height: auto;

display: flex; 
align-items: center;
justify-content: space-evenly;
flex-direction: column;

h3{
    color: white;
}

border-radius: 10px;
box-shadow: 6px 7px 5px 0px rgb(255 255 255 / 75%);
-webkit-box-shadow: 0px 4px 10px 0px rgb(158 158 158 / 45%);
-moz-box-shadow: 6px 7px 5px 0px rgba(255,255,255,0.75);
overflow-hidden: ;
background-color: hsl(228deg 11% 9%);
overflow-hidden;

`

export const CvCont= styled.div`
width: 100%;


`

export const Instancia= styled.div`
width:100%;
display: flex;

justify-content: space-evenly;

h3{
    background-color: hsl(228deg 8% 12%);
    padding: 2em;
    border-radius: 10px;
}

`

export const Acerca= styled.div`

box-shadow: 10px 10px 5px 0px rgb(0 0 0 / 42%);
    -webkit-box-shadow: 1px 1px 5px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
border-top: 1px solid yellow;
width: 100%;

background-color: hsl(228deg 8% 12%);
width: 90%;
height: auto;
border-radius: 10px;
margin-bottom: 1em;


display:flex;
justify-content: center;
align-items:center;
flex-direction: column;


.text{
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
`

export const More= styled.div`

.read-more-state {
    display: none;
  }
  
  .read-more-target {
    opacity: 0;
    max-height: 0;
    font-size: 0;
    transition: .25s ease;
  }
  
  .read-more-state:checked ~ .read-more-wrap .read-more-target {
    opacity: 1;
    font-size: inherit;
    max-height: 999em;
  }
  
  .read-more-state ~ .read-more-trigger:before {
    content: 'Mostrar mas..';
  }
  
  .read-more-state:checked ~ .read-more-trigger:before {
    content: 'Mostrar menos...';
  }
  
  .read-more-trigger {
    cursor: pointer;
    display: inline-block;
    padding: 0 .5em;
    color: yellow;
    font-size: 1em;
    line-height: 2;
    margin-left: 80%;
    
  }
  
  /* Other style */ 
  body {
    padding: 2%;
  }
  
  p {
    padding: 2%;
   
    border-radius: .25em;
  }


`
export const Publicaciones= styled.div`

background-color: hsl(228deg 8% 12%);
border-radius: 10px;
border-top: 1px solid yellow;
margin-bottom: 1em;
width: 90%;
height: 30%;

box-shadow: 10px 10px 5px 0px rgb(0 0 0 / 42%);
    -webkit-box-shadow: 1px 1px 5px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


a{
  text-decoration: none;
}


`

export const Tecnologias= styled.div`
border-top: 1px solid yellow;
background-color: hsl(228deg 8% 12%);
width: 90%;
height: 10em;

box-shadow: 10px 10px 5px 0px rgb(0 0 0 / 42%);
    -webkit-box-shadow: 1px 1px 5px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

border-radius: 10px;
margin-bottom: 1em;
margin-top: 1em;
margin-left: 5%;

display:flex;
align-items:center;
flex-direction: column;
ul{
    
    display: flex;
    justify-content: space-evenly;
    li{
        list-style: none;
        background-color: black;
        color: yellow;
        padding:0.5em;
        border-radius: 15px;
        margin-left:1em;
    }
}

`

export const OtrosStudy= styled.div`

border-top: 1px solid yellow;
background-color: hsl(228deg 8% 12%);
width: 90%;
height: 10em;
border-radius: 10px;
margin-bottom: 1em;
margin-left: 5%;

box-shadow: 10px 10px 5px 0px rgb(0 0 0 / 42%);
    -webkit-box-shadow: 1px 1px 5px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
ul{
    
    display: flex;
    justify-content: space-evenly;
    li{
        list-style: none;
        background-color: black;
        color: yellow;
        padding:0.5em;
        border-radius: 15px;
        margin-left:1em;
    }
}

`

export const PublicArrowLeft= styled.img`

    height:2em;
    margin-right:1em;

    &:active{
      box-shadow: box-shadow:
        7px 6px 28px 1px rgba(0, 0, 0, 0.24);
      transform: translateY(4px);


      @keyframes slideMeL{
        0%{
            transform: translateX(-700px);
        }
        100%{
            transform:  translateX(0px);
        }
    }
    }

    

`
export const PublicArrowRight= styled.img`
    height:2em;
    margin-left:1em;



&:active{
  box-shadow: box-shadow:
        7px 6px 28px 1px rgba(0, 0, 0, 0.24);
      transform: translateY(4px);
 
      @keyframes slideMeR{
        0%{
            transform: translateX(700px);
            opacity:0%;
        }
        100%{
            transform:  translateX(0px);
            opacity:100%;
        }
    }
}
`








