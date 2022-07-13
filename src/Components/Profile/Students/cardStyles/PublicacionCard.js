import styled from "styled-components";

export const PubContainer = styled.div`


// animation: slideMeR -1s ease-in;
// animation: slideMeL .3s ease-in;



border: 1px solid hsl(228deg 11% 9%);

box-shadow: 10px 10px 5px 0px rgb(0 0 0 / 42%);
    -webkit-box-shadow: 1px 1px 5px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

margin-bottom: 1em;
width: 100%;
.img-name-date{
    border-top: 1px solid yellow;
    border-bottom: 1px solid hsl(228deg 11% 9%);
    display: flex;
    justify-content: space-between;
}

.perfil{
    display: flex;
.imgPer{
    border: 1px solid yellow;
    overflow: hidden;
    border-radius: 50%;
    margin-right:1em;
    margin-top: 0.5em;
    margin-left:1em;
    width: 3em;
    height: 3em;
    img{
        width:100%;
    }
}
    img{
        
    }
}

.perfil h1{
    padding-left: 1em;
}

.img-name-date p {
    padding-right: 1.5em;
}

.tech {
    display: flex;
    flex-direction: row-reverse;
}
.tech p {
    padding-right: 1.5em;
}

.title-summary h2 {
    padding-left: 1em;
}
.title-summary p{
    padding-left: 1em;
}+





`

export const SlyderCont= styled.div`

overflow: hidden;
display:flex;
align-items: center;
justify-content: center; 
flex-direction: row;
width: 100%;


.ContCards{
    width: 90%;
}
`